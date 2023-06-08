Page({
  data: {
    titleBarHeight: 0,
    statusBarHeight: 0,
    showWebView: false,
    webViewUrl: ""
  },
  onLoad() {
    const { titleBarHeight, statusBarHeight } = my.getSystemInfoSync();
    this.setData({
      titleBarHeight,
      statusBarHeight,
    });
  },
  goToExternalPage(e) {
    const { link } = e.target.dataset;
    const externalPages = {
      miClaroPortal: () =>
        this.setData({
          showWebView: true,
          webViewUrl: "https://miclaroempresas.claro.com.co/#/login"
        }),
      eCarePortal: () =>
        this.setData({
          showWebView: true,
          webViewUrl:
            "https://e-services.telmexla.com.co/Pages/Default.aspx?ReturnUrl=%2f"
        }),
      claroCloud: () =>
        this.setData({
          showWebView: true,
          webViewUrl: "https://www.clarocloud.com.co"
        })
    };
    return externalPages[link]();
  },
  
  handleCustomButtonTap() {
    return this.setData({
      showWebView: true,
      webViewUrl: "https://www.claro.com.co/personas/cavs/"
    });
  },

  onCustomButtonTap(e) {
    console.log(e)
  }
});
