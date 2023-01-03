{
    "data": [
        // --------------------------------------------------------------------------------
        {
            "featureName": "binance_bestBid0For1Second", // best bid sampled every 1 second
            "pairsList": [
                {
                    "time": "1672776891", //  NOW, which is = 1672776891 seconds since 1 January 1970 = Wed Jan  4 02:15:04 AM +06 2023
                    "value": "16.671.23" // BTC-USDT best bid value
                },
                {
                    "time": "1672776890", //  NOW-1second, 1 second ago
                    "value": "16.672.53" // BTC-USDT best bid value
                }
                ... // more historical data
            ]
        },
        // the same goes for featureNames: binance_bestBid1For1Second, binance_bestBid2For1Second, ..., binance_bestAsk0For1Second(another part of orderbook), binance_bestAsk0For1Second, binance_bestAsk1For1Second, ...
        // and then:
        // --------------------------------------------------------------------------------
        {
            "featureName": "binance_bestBid0For5Second", // best bid sampled every 5 second
            "pairsList": [
                {
                    "time": "334555378", //  NOW, which is = (334555378 * 5) seconds since 1 January 1970 = Wed Jan  4 02:15:04 AM +06 2023
                    "value": "16.671.23" // BTC-USDT best bid value
                },
                {
                    "time": "334555377", //  NOW-5second, 5 second ago
                    "value": "16.670.00" // BTC-USDT best bid value
                }
                ... // more data
            ]
        },
        // the same goes for featureNames: binance_bestBid1For5Second, binance_bestBid2For5Second, ..., binance_bestAsk0For5Second(another part of orderbook), binance_bestAsk0For5Second, binance_bestAsk1For5Second, ...
        // and then:
        // --------------------------------------------------------------------------------
        {
            "featureName": "kucoin_bestBid0For1Second", // same data, but from kucoin exchange, not binance exchange
            // same type of data but from different exchange
            ...
        },
        ...
        // and then:
        // --------------------------------------------------------------------------------
        {
            "featureName": "greedAndFearIndexFor1Second", // https://edition.cnn.com/markets/fear-and-greed
            ... 
        },
        // and then:
        // --------------------------------------------------------------------------------
        {
            "featureName": "greedAndFearIndexFor1Second", // https://edition.cnn.com/markets/fear-and-greed
            ... 
        },
    ]
}
