angular.module('nibs.shop', [])

// Routes
.config(function ($stateProvider) {

    $stateProvider

        .state('app.shop', {
            url: "/shop",
            views: {
                'menuContent' :{
                    templateUrl: "templates/shop.html",
                    controller: 'DashCtrl'

                }
            }
        });
})
//Controllers
.controller('DashCtrl', function($scope) {})
;