/**! __CODEPLACEHOLDER_START__ */ /*[PositionForHostEntryCodeBegin]*/ /**! __CODEPLACEHOLDER_END__ */
if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');
require('./importScripts$');

      function getUserAgentInPlatformWeb() {
        return typeof navigator !== 'undefined' ? navigator.swuserAgent || navigator.userAgent || '' : '';
      }
      if(getUserAgentInPlatformWeb() && (getUserAgentInPlatformWeb().indexOf('LyraVM') > 0 || getUserAgentInPlatformWeb().indexOf('AlipayIDE') > 0) ) {
        var AFAppX = self.AFAppX.getAppContext ? self.AFAppX.getAppContext().AFAppX : self.AFAppX;
      } else {
        importScripts('https://appx/af-appx.worker.min.js');
        var AFAppX = self.AFAppX;
      }
      self.getCurrentPages = AFAppX.getCurrentPages;
      self.getApp = AFAppX.getApp;
      self.Page = AFAppX.Page;
      self.App = AFAppX.App;
      self.my = AFAppX.bridge || AFAppX.abridge;
      self.abridge = self.my;
      self.Component = AFAppX.WorkerComponent || function(){};
      self.$global = AFAppX.$global;
      self.requirePlugin = AFAppX.requirePlugin;
    

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../components/card-button/card-button?hash=575d90c0564a9ec75a9b4077920c00bb78edc4fd');
require('../../components/custom-button/custom-button?hash=575d90c0564a9ec75a9b4077920c00bb78edc4fd');
require('../../components/custom-header/custom-header?hash=575d90c0564a9ec75a9b4077920c00bb78edc4fd');
require('../../components/claro-ol-list/claro-ol-list?hash=575d90c0564a9ec75a9b4077920c00bb78edc4fd');
require('../../pages/procedure-information/procedure-information?hash=85f26f41ca648ab3cf4219d8fd49b85f684d380f');
require('../../pages/index/index?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../pages/contract-assignment/contract-assignment?hash=aef4245b527ccd0c3bbca2269dd910e7164be214');
require('../../pages/plan-management/plan-management?hash=aef4245b527ccd0c3bbca2269dd910e7164be214');
require('../../pages/transfer/transfer?hash=aef4245b527ccd0c3bbca2269dd910e7164be214');
require('../../pages/sim-management/sim-management?hash=aef4245b527ccd0c3bbca2269dd910e7164be214');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}