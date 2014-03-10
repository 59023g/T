 'use strict';

 angular.module('tint')
   .controller('doController', function($scope, $location) {
   	   $RootScope.go = function (path, pageAnimationClass) {

        if (typeof(pageAnimationClass) === 'undefined') { // Use a default, your choice
            $RootScope.pageAnimationClass = 'crossFade';
        }
        
        else { // Use the specified animation
            $RootScope.pageAnimationClass = pageAnimationClass;
        }

        if (path === 'back') { // Allow a 'back' keyword to go to previous page
            $window.history.back();
        }
        
        else { // Go to the specified path
            $location.path(path);
        }
    };
        


   });

