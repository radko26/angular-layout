define(
  ['angular'],
  function(angular) {
    'use strict';

    angular
    .module('layout-directive',[])
    .directive('layoutDirective', ['$templateCache','$compile', function($templateCache,$compile) {
     return{
      link: function(scope,element){


        scope.$watch("currentLayout",function() {
          element.html($templateCache.get(scope.getTemplateUrl() )).show();
          $compile(element.contents())(scope);
          
          
            $(function() {
                  $( ".column" ).sortable({
                    connectWith: ".column",
                    handle: ".portlet-header",
                    cancel: ".portlet-toggle",
                    placeholder: "portlet-placeholder ui-corner-all"
                  });
                });

              });
      }
      
      };
    }]);
  }
);