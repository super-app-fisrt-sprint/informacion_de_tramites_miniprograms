Page({
  data: {
    current: 0,
    items: [
      {
        title: 'Soluciones fijas',
        content: "Paquete adquirido vigente"
      },
      {
        title: 'Soluciones móviles',
        content: "Paquete adquirido asdfsad"
      }
    ],
  },
  onLoad() {},
  onChange(current) {
    this.setData({
      current,
    });
  },
});
