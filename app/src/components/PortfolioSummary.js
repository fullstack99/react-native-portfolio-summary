import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getAmountTextColor, getPriceCurrency, roundNumberToFixed } from '../services/operators';
import { Context as PortfolioContext } from '../context/portfolio';

export default function PortfolioSummary({ portfolio, securityPrices }) {
    const { state } = useContext(PortfolioContext);
    const { portfolioList } = state;

    const { current_price_change, current_price_change_percent } = securityPrices[portfolio.id];
    const cpc = roundNumberToFixed(current_price_change, 2);
    const cpcp = roundNumberToFixed(current_price_change_percent, 2);
    const stock1 = securityPrices[portfolioList.length + 1];
    const stock2 = securityPrices[portfolioList.length + 2];
    const stock1_cpcp = roundNumberToFixed(stock1.current_price_change, 2);
    const stock2_cpcp = roundNumberToFixed(stock2.current_price_change, 2);
    return (
        <View style={styles.container}>
            <View style={styles.portfolioItem}>
                <View style={styles.left}>
                    <Text>Portfolio Value</Text>
                    <Text style={styles.currentPrice}>${securityPrices[portfolio.id]?.current_price}</Text>
                </View>
                <View style={styles.right}>
                    <View style={styles.rightInner}>
                        <Text style={{ color: getAmountTextColor(cpc) }}>
                            {cpc > 0 ? '▲' : '▼'}
                        </Text>
                        <View style={styles.priceChangeRight}>
                            <Text style={[styles.priceChange, { color: getAmountTextColor(cpc) }]}>{getPriceCurrency(cpc, '$')}</Text>
                            <Text style={[styles.priceChange, { color: getAmountTextColor(cpcp) }]}>{cpcp}%</Text>
                        </View>
                    </View>
                </View>

            </View>
            <View style={styles.market}>
                <Text style={styles.marketOverViewText}>
                    {`${stock1.name}(${stock1.symbol})`}
                    <Text style={{ color: getAmountTextColor(stock1_cpcp) }}>
                        {stock1_cpcp > 0 ? ' ▲ ' : ' ▼ '}
                    </Text>
                    <Text style={{ color: getAmountTextColor(stock1_cpcp) }}>
                        {`${stock1_cpcp}%`}
                    </Text>
                </Text>
                <Text style={styles.marketOverViewText}>
                    {`${stock2.name}(${stock2.symbol})`}
                    <Text style={{ color: getAmountTextColor(stock2_cpcp) }}>
                        {stock2_cpcp > 0 ? ' ▲ ' : ' ▼ '}
                    </Text>
                    <Text style={{ color: getAmountTextColor(stock2_cpcp) }}>
                        {`${stock2_cpcp}%`}
                    </Text>
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgray',
        borderRadius: 4,
        marginVertical: 3,
        padding: 10,
    },
    portfolioItem: {
        display: 'flex',
        flexDirection: 'row'
    },
    left: {
        flex: 1,
    },
    right: {
        flex: 1,
        alignItems: 'flex-end'
    },
    currentPrice: {
        fontSize: 28
    },
    rightInner: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    priceChange: {
        fontSize: 18,
        marginBottom: 5
    },
    priceChangeIcon: {
        fontSize: 20,
    },
    priceChangeRight: {
        alignItems: 'flex-end',
        marginLeft: 15,
        width: 70
    },
    marketOverViewText: {
        fontSize: 10,
        fontWeight: 'bold'
    },
    market: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    }
});
