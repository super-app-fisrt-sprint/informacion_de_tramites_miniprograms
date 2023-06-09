Page({
  data: {
    titleBarHeight: 0,
    statusBarHeight: 0,
  },
  onLoad() {
    const { titleBarHeight, statusBarHeight } = my.getSystemInfoSync();
    this.setData({
      titleBarHeight,
      statusBarHeight,
    });
  },
  handleCustomButtonTap() {
    my.navigateTo({
      url: `/main/ui/pages/plan-management/redirectToWeb/redirectToWeb?url=https://www.claro.com.co/personas/cavs/`
    })
  },
});
