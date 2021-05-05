import React, { useEffect, useContext } from 'react';
import { StyleSheet, View, RefreshControl, FlatList } from 'react-native';
import PortfolioSummary from "../components/PortfolioSummary";
import { Context as PortfolioContext } from '../context/portfolio';

const PortfolioValues = () => {
  const { state, getPortfolioData } = useContext(PortfolioContext);
  const { portfolioList, securityPrices, loading } = state;

  useEffect(() => {
    getPortfolioData();
  }, [])

  const onRefresh = () => {
    getPortfolioData();
  }
  const _renderPortfolioItem = ({ item }) => {
    if (!securityPrices[item.id]) return null;
    return (
      <PortfolioSummary portfolio={item} securityPrices={securityPrices} />
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={portfolioList}
        renderItem={_renderPortfolioItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listView}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={onRefresh}
          />
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listView: {
    padding: 15
  }
})

export default PortfolioValues;