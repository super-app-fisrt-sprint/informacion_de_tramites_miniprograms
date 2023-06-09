Page({
  data: {
    url: '',
    id: ''
  },
  onLoad(query) {
    console.log(query.url)
    this.setData({
      url: query.url,
      linkIndex: query.id
    });
  },

});