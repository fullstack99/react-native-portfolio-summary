export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const roundNumberToFixed = (number, fixed) => {
  return Math.round(number * Math.pow(10, fixed)) / Math.pow(10, fixed);
}

export const getAmountTextColor = (amount) => {
  return amount > 0 ? 'green' : amount < 0 ? 'red' : 'gray';
}

export const getPriceCurrency = (price, currency) => {
  const symbol = price > 0 ? '+' : price < 0 ? '-' : '';
  return `${symbol}${currency}${numberWithCommas(Math.abs(price).toFixed(2))}`;
}
