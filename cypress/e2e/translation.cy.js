describe('Translations', () => {
    it.skip('check home page translation', () => {
        cy.visit.skip('http://localhost:3000');
        cy.wait.skip(2000);
        cy.get('body').should('not.contain', 'HomePage2.');
    });

    it.skip('check Services pages translation', () => {
        cy.visit.skip('http://localhost:3000/evest-demo-trading-account');
        cy.get('body').should('not.contain', 'Services.');
        cy.visit.skip('http://localhost:3000/evest-0-commission-stocks');
        cy.get('body').should('not.contain', 'Services.');
        cy.visit.skip('http://localhost:3000/evest-investment-baskets');
        cy.get('body').should('not.contain', 'Services.');
        cy.visit.skip('http://localhost:3000/evest-islamic-trading-account');
        cy.get('body').should('not.contain', 'Services.');
        cy.visit.skip('http://localhost:3000/evest-promotions');
        cy.get('body').should('not.contain', 'Services.');
    });
    it.skip('check services categories page translation', () => {
        cy.visit.skip('http://localhost:3000/evest-cryptocurrencies');
        cy.get('body').should('not.contain', 'categories.');
        cy.visit.skip('http://localhost:3000/evest-commodities');
        cy.get('body').should('not.contain', 'categories.');
        cy.visit.skip('http://localhost:3000/evest-currencies');
        cy.get('body').should('not.contain', 'categories.');
        cy.visit.skip('http://localhost:3000/evest-indices');
        cy.get('body').should('not.contain', 'categories.');
    });

    it.skip('check Webinar page translation', () => {
        cy.visit.skip('http://localhost:3000/webinars');
        cy.get('body').should('not.contain', 'educative.');
    });

    it.skip('check Products pages translation', () => {
        cy.visit.skip('http://localhost:3000/evest-copy-trade');
        cy.get('body').should('not.contain', 'Products.');
        cy.visit.skip('http://localhost:3000/evest-analytics');
        cy.get('body').should('not.contain', 'Products.');
        cy.visit.skip('http://localhost:3000/evest-trading-central');
        cy.get('body').should('not.contain', 'Products.');
        cy.visit.skip('http://localhost:3000/evest-tipranks');
        cy.get('body').should('not.contain', 'Products.');
    });
    it.skip('check Platforms pages translation', () => {
        cy.visit.skip('http://localhost:3000/evest-trading-app');
        cy.get('body').should('not.contain', 'Platforms.');
        cy.visit.skip('http://localhost:3000/evest-webtrader-platform');
        cy.get('body').should('not.contain', 'Platforms.');
        cy.visit.skip('http://localhost:3000/evest-mobile-webtrader');
        cy.get('body').should('not.contain', 'Platforms.');
        cy.visit.skip('http://localhost:3000/evest-metaTrader5');
        cy.get('body').should('not.contain', 'Platforms.');
    });
    it.skip('check calculators page translation', () => {
        cy.visit.skip('http://localhost:3000/trading-calculator');
        cy.get('body').should('not.contain', 'Trading-calculator.');
    });
    it.skip('check fees page translation', () => {
        cy.visit.skip('http://localhost:3000/evest-trading-fees');
        cy.get('body').should('not.contain', 'Trading-fees.');
    });
    it.skip('check hours page translation', () => {
        cy.visit.skip('http://localhost:3000/market-trading-hours');
        cy.get('body').should('not.contain', 'Trading-hours.');
    });
    it.skip('check Account types page translation', () => {
        cy.visit.skip('http://localhost:3000/evest-trading-account-types');
        cy.get('body').should('not.contain', 'Account-types.');
    });
    it.skip('check Deposit and Withdrawal page translation', () => {
        cy.visit.skip('http://localhost:3000/evest-deposit-withdrawal');
        cy.get('body').should('not.contain', 'Deposit-and-Withdrawal.');
    });
    it.skip('check Account security page translation', () => {
        cy.visit.skip('http://localhost:3000/evest-account-security');
        cy.get('body').should('not.contain', 'Account-security.');
    });
    it.skip('check Regulatory Authorization page translation', () => {
        cy.visit.skip('http://localhost:3000/evest-regulatory-authorization');
        cy.get('body').should('not.contain', 'Regulatory-Authorization.');
    });
    it.skip('check documents policies page translation', () => {
        cy.visit.skip('http://localhost:3000/evest-Documents-Policies');
        cy.get('body').should('not.contain', 'documents-policies.');
    });
    it.skip('check Evest page translation', () => {
        cy.visit.skip('http://localhost:3000/evest');
        cy.get('body').should('not.contain', 'Evest.evest.');
    });
    it.skip('check CEO page translation', () => {
        cy.visit.skip('http://localhost:3000/ceo');
        cy.get('body').should('not.contain', 'Evest.CEO');
    });
    it.skip('check Ambassador page translation', () => {
        cy.visit.skip('http://localhost:3000/evest-ambassador');
        cy.get('body').should('not.contain', 'Evest-Ambassador.');
    });
    it.skip('check in The Press page translation', () => {
        cy.visit.skip('http://localhost:3000/evest-brand-spotlights');
        cy.get('body').should('not.contain', 'in-The-Press.');
    });
    it.skip('check entertainments page translation', () => {
        cy.visit.skip('http://localhost:3000/evest-entertainments');
        cy.get('body').should('not.contain', 'Evest.entertainment');
    });
    it.skip('check evest Talk page translation', () => {
        cy.visit.skip('http://localhost:3000/evest-talk');
        cy.get('body').should('not.contain', 'evest-Talk.');
    });
    it.skip('check evest careers page translation', () => {
        cy.visit.skip('http://localhost:3000/evest-careers');
        cy.get('body').should('not.contain', 'Evest.Careers');
        cy.get('#apply0').click();
        cy.get('body').should('not.contain', 'Evest.Careers');
        cy.get('#SecBtn0').click();
        cy.get('body').should('not.contain', 'Evest.CEO');
    });
    it.skip('check Contact Us page translation', () => {
        cy.visit.skip('http://localhost:3000/contact-us');
        cy.get('body').should('not.contain', 'Evest.Contact-Us');
    });
    it.skip('check complaints page translation', () => {
        cy.visit.skip('http://localhost:3000/evest-complaints');
        cy.get('body').should('not.contain', 'Evest.complaints');
    });

    it.skip('check markets pages translation', () => {
        cy.visit.skip('http://localhost:3000/market');
        cy.get('body').should('not.contain', 'Market.all-markets');
        cy.visit.skip('http://localhost:3000/market/stocks');
        cy.get('body').should('not.contain', 'Market.all-markets');
        cy.visit.skip('http://localhost:3000/market/currencies');
        cy.get('body').should('not.contain', 'Market.all-markets');
        cy.visit.skip('http://localhost:3000/market/commodities');
        cy.get('body').should('not.contain', 'Market.all-markets');
        cy.visit.skip('http://localhost:3000/market/indices');
        cy.get('body').should('not.contain', 'Market.all-markets');
        cy.visit.skip('http://localhost:3000/market/future-indices');
        cy.get('body').should('not.contain', 'Market.all-markets');
        cy.visit.skip('http://localhost:3000/market');
        cy.get('body').should('not.contain', 'Market.all-markets');
        cy.visit.skip('http://localhost:3000/market/cryptocurrencies');
        cy.get('body').should('not.contain', 'Market.all-markets');
    });

    it.skip('check news pages translation', () => {
        cy.visit.skip('http://localhost:3000/news/trading-news');
        cy.get('body').should('not.contain', 'News.Trading-News');
        cy.visit.skip('http://localhost:3000/news/gold');
        cy.get('body').should('not.contain', 'News.Gold-News');
        cy.visit.skip('http://localhost:3000/news/oil');
        cy.get('body').should('not.contain', 'News.Oil-News');
        cy.visit.skip('http://localhost:3000/news/cryptocurrencies');
        cy.get('body').should('not.contain', 'News.cryptocurrency-News');
        cy.visit.skip('http://localhost:3000/news/Currencies');
        cy.get('body').should('not.contain', 'News.Currencies-News');
        cy.visit.skip('http://localhost:3000/news/stocks');
        cy.get('body').should('not.contain', 'News.Stocks-News');
    });

    it.skip('check Referral program page translation', () => {
        cy.visit.skip('http://localhost:3000/promotions/referral-program');
        cy.get('body').should('not.contain', 'promotions.Referral-program');
    });

    it.skip('check signup page translation', () => {
        cy.visit.skip('http://localhost:3000/sign-up');
        cy.get('body').should('not.contain', 'SignUp.');
        cy.visit.skip('http://localhost:3000/sign-in');
        cy.get('body').should('not.contain', 'SignUp.');
        cy.visit.skip('http://localhost:3000/reset-password');
        cy.get('body').should('not.contain', 'SignUp.');
    });
});
