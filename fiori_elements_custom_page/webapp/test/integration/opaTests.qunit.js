sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/mdpert/laptop/test/integration/FirstJourney',
		'com/mdpert/laptop/test/integration/pages/OrderedProductMain'
    ],
    function(JourneyRunner, opaJourney, OrderedProductMain) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/mdpert/laptop') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheOrderedProductMain: OrderedProductMain
                }
            },
            opaJourney.run
        );
    }
);