sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/mdpert/notebook/test/integration/FirstJourney',
		'com/mdpert/notebook/test/integration/pages/OrderedProductList',
		'com/mdpert/notebook/test/integration/pages/OrderedProductObjectPage'
    ],
    function(JourneyRunner, opaJourney, OrderedProductList, OrderedProductObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/mdpert/notebook') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheOrderedProductList: OrderedProductList,
					onTheOrderedProductObjectPage: OrderedProductObjectPage
                }
            },
            opaJourney.run
        );
    }
);