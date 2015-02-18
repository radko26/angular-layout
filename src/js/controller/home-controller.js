define(
  [
    'angular',
    'js/directive/layout-directive',
    'js/classes/layout',
    'js/classes/column',
    'js/classes/portlet',
    'js/classes/merge'
  ],
  function(angular) {
    'use strict';
    angular
      .module('todoApp.home-controller', [
        'layout-directive'
      ])
      .controller('HomeController', [
        '$scope',
        '$templateCache',
        function($scope,$templateCache) {

          

          $scope.layouts = [];
          $scope.layouts.push(new Layout('6,6'));
          $scope.layouts.push(new Layout('8,4'));
          $scope.layouts.push(new Layout('4,4,4'));


          var columns = [];

          columns.push(new Column(0));
          columns.push(new Column(1));
          columns.push(new Column(2));
  

          var portlets = [];
          portlets.push(new Portlet('A','B'));
          portlets.push(new Portlet('Aa','B'));
          portlets.push(new Portlet('Aaa','B'));
          portlets.push(new Portlet('Aaaa','B'));
          portlets.push(new Portlet('Aaaaa','B'));
          portlets.push(new Portlet('Aaaaaa','B'));
          portlets.push(new Portlet('Aaaaaaa','B'));


          
          for(var i=0;i<$scope.layouts.length;i++){
            var template  = merge($scope.layouts[i],columns,portlets);
            $templateCache.put($scope.layouts[i].getType()+'.html', template);
          }

          $scope.currentLayout = $scope.layouts[0].getType();

          $scope.changeLayout = function(layout){
            $scope.currentLayout = layout.getType();
          }

          $scope.getTemplateUrl = function(){
            return $scope.currentLayout+'.html';
          }
        }
      ]);
  }
);