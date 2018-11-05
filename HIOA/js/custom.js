(function () {
"use strict";
'use strict';
 
var app = angular.module('viewCustom', ['angularLoad']);
/****************************************************************************************************/
/*In case of CENTRAL_PACKAGE - comment out the below line to replace the other module definition*/
/*var app = angular.module('centralCustom', ['angularLoad']);*/
/****************************************************************************************************/
 
// Begin BrowZine - Primo Integration...
  window.browzine = {
    api: "https://public-api.thirdiron.com/public/v1/libraries/1447",
    apiKey: "3968149f-0d52-45a6-bdd5-948c42ce251d",
    journalBrowZineWebLinkText: "Vis innhold i tidsskrift",
    articleBrowZineWebLinkText: "Vis innhold i tidsskrifthefte",
    articlePDFDownloadLinkEnabled: true,
    articlePDFDownloadLinkText: "Last ned artikkel",
  };
 
  browzine.script = document.createElement("script");
  browzine.script.src = "https://s3.amazonaws.com/browzine-adapters/primo/browzine-primo-adapter.js";
  document.head.appendChild(browzine.script);
 
  app.controller('prmSearchResultAvailabilityLineAfterController', function($scope) {
    window.browzine.primo.searchResult($scope);
  });
 
  app.component('prmSearchResultAvailabilityLineAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'prmSearchResultAvailabilityLineAfterController'
  });
// ... End BrowZine - Primo Integration
 
})();
