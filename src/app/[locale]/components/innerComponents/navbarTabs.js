export function getTabs(category) {
    const data = {
        Investing: [
            {
                title: 'Demo Trading Account',
                link: '/services/demo-account',
            },
            {
                title: '0% Stock Trading',
                link: '/services/zero-commission',
            },
            {
                title: 'Investment Baskets',
                link: '/services/eib',
            },
            {
                title: 'Islamic Trading Account',
                link: '/services/islamic-account',
            },
            {
                title: 'currencies',
                link: '/services/currencies',
            },
            {
                title: 'commodities',
                link: '/services/commodities',
            },
            {
                title: 'CryptoCurrencies',
                link: '/services/crypto',
            },
            {
                title: 'indices',
                link: '/services/indices',
            },
        ],
    };

    return data[category]; // Return user data and update function
}
