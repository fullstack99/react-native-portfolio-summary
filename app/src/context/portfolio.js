import { ServerMock } from 'securitiesservermock/ServerMock';
import createDataContext from './createDataContext';

const initialState = {
  portfolioList: [],
  securities: [],
  securityPrices: {},
  equity: 0,
  loading: false,
};

const portfolioReducer = (state, action) => {
  switch (action.type) {
    case 'setPortfolioList':
      return {
        ...state,
        portfolioList: action.payload,
      };
    case 'setAllSecurities':
      return {
        ...state,
        securities: action.payload,
      };
    case 'setSecurityPrices':
      return {
        ...state,
        securityPrices: action.payload,
      };
    case 'setEquity':
      return {
        ...state,
        equity: action.payload,
      };
    case 'setLoading':
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state;
  }
};

export const dispatch = (dispatch) => {
  return async (action) => {
    dispatch(action);
  };
};

export const getPortfolioData = (dispatch) => {
  return async () => {
    dispatch({ type: 'setLoading', payload: true });
    let result = await ServerMock.getPortfolio();
    dispatch({ type: 'setPortfolioList', payload: result.data });
    result = await ServerMock.getAllSecurities();
    dispatch({ type: 'setAllSecurities', payload: result.data });
    const ids = result.data.map(i => i.id);
    result = await ServerMock.getSecurityPrices(ids);
    dispatch({ type: 'setSecurityPrices', payload: result.data });
    result = await ServerMock.getEquity();
    dispatch({ type: 'setEquity', payload: result.data });
    dispatch({ type: 'setLoading', payload: false });
  };
};

export const { Provider, Context } = createDataContext(
  portfolioReducer,
  {
    getPortfolioData,
  },
  initialState,
);
