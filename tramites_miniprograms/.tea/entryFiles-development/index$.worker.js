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
require('../../main/ui/components/card-button/card-button?hash=575d90c0564a9ec75a9b4077920c00bb78edc4fd');
require('../../node_modules/antd-mini/es/Tabs/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../main/ui/components/custom-button/custom-button?hash=575d90c0564a9ec75a9b4077920c00bb78edc4fd');
require('../../main/ui/components/claro-ol-list/claro-ol-list?hash=575d90c0564a9ec75a9b4077920c00bb78edc4fd');
require('../../main/ui/components/mini-card-button/card-button?hash=575d90c0564a9ec75a9b4077920c00bb78edc4fd');
require('../../main/ui/components/custom-header/custom-header?hash=575d90c0564a9ec75a9b4077920c00bb78edc4fd');
require('../../main/ui/pages/contract-assigment/contract-assigment?hash=cfdfe0b84801cea41b3171930963af9fb879f691');
require('../../main/ui/pages/procedure-information/procedure-information?hash=85dbbde464bdbffcb6077f6dbc147bc67bee56d6');
require('../../main/ui/pages/index/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../main/ui/pages/plan-management/plan-management?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}