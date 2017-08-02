define(['angular'], function(angular) {

  /*Keep in sync with docs/mardown/configuration.md*/

    var config = angular.module('override', []);
    config
        //see http://uw-madison-doit.github.io/uw-frame/latest/#/md/configuration for howto
        .constant('OVERRIDE', {
          'NAMES' : {
            'title' : 'Time And Absence',
            'fname' : 'time-and-absence'
          },
          'APP_BETA_FEATURES' : [
            {
              "id" : "someAdditionalBetaFeature",
              "title" : "App Seed Beta Feature",
              "description" : "This is just an example of a toggle. Look at your localStorage after you switch this on for the first time."
            }
          ],
          'HRS_URLS' :[
            {
              "help" : "https://uwservice.wisc.edu/help/time-absence.php"
            }
          ]
        },
        )

    return config;

});
