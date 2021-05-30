// CONSTANTS
const itemTypes = {
    NOTE: `note`, // Variables [ readOnly: boolean(false), text: string(""), persistent: boolean(true)]
    LINK: `link`, // Variables (*:string) [ icon(image link), title, subtitle, link ]
};

// A list of available widgets that have been integrated, please list the in an array in the 
const availableWidgets = {
    // A widget to keep up with the value of crypto currency
    coinWatch: (coinType : string = "ETH", targetFiat : string = "EUR") => {
        return { coinType: coinType, targetFiat: targetFiat };
    },
};

export = {
    // The main navigation bar
    header: {
        // Enable or disable the whole top-navbar
        enabled: true,
        // Enable the search function on the right hand side of the navbar
        enableSearch: true,
        // The search engine to use for for the box, 'https://google.com/search', 'https://duckduckgo.com/'
        searchEngine: 'https://www.google.com/search',
        // The search param, this usually is 'q' for google and duckduckgo
        searchParam: `q`,
        // If the search box should be focused when accessing the page
        searchEngineFocus: false,
        // Menu items
        menuItems: [
            {
                // The Font Awesome 5 icon of the entry
                icon: `fas fa-home`,
                // The text to display of the item
                text: `Home`,
                // The link can also be javascript:
                link: `/`
            },
            {
                icon: `fas fa-info`,
                text: `About`,
                link: `https://justkato.me/work`
            },
            {
                icon: false,
                text: `Dummy`,
                link: `javascript:alert('Hey There')`
            },
        ],
    },

    // The cards to display in the body of the 
    items: [
        {
            // The type of item to display
            type: itemTypes.NOTE,
            
            // If the text should be editable
            readOnly: false,
            // The default text to display if nothing is locally stored
            text: ``,
            // Keep the text even after quiting the tab
            persistent: true,
        }
    ],

    // Widgets to enable in the widgets menu on the top side of the dashboard
    widget: [
        availableWidgets.coinWatch(`ETH`, `EUR`),
        availableWidgets.coinWatch(`BTC`, `EUR`),
    ],

}