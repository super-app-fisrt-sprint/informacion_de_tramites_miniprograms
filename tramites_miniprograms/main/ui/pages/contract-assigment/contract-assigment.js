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
    documentsList: [
      {
        text: "Cámara de comercio original y vigente no mayor a 30 días."
      },
      {
        text: "Fotocopia de cédula de ambos representantes legales."
      },
      {
        text:
          "Carta firmada por los representantes legales de la empresa cedente y cesionaria, solicitando la cesión del contrato."
      }
    ],
    mobileList: [
      {
        text: "Cámara de comercio original y vigente no mayor a 30 días."
      },
      {
        text: "Fotocopia de cédula de ambos representantes legales."
      },
      {
        text:
          "Si el cedente autoriza a un tercero, debe traer carta autenticada en Notaría, donde el Representante legal lo autorice con poder amplio y suficiente para firmar en representación de la empresa que cede las líneas."
      },
      {
        text:
          "Carta de Empresa que cede en papel membretado donde autoriza ceder las líneas de la empresa ( relacionar las líneas) a la empresa (Nombre de la empresa que recibe) firmada por el representante legal."
      },
      {
        text:
          "Carta de Empresa que recibe las líneas en papel membretado donde autoriza recibir las líneas ( relacionar las líneas) de la empresa (Nombre de la empresa que cede) firmada por el representante legal."
      },
      {
        text:
          "En el momento de la cesión quien recibe las líneas debe cancelar el primer CFM ."
      }
    ],
    fixedList: [
      {
        text: "El contrato a ceder debe tener mínimo una antigüedad de 6 meses."
      },
      {
        text:
          "La empresa que cede el contrato como la que recibe deben estar al día en sus facturas."
      },
      {
        text:
          "El trámite lo podrá solicitar el representante legal. A través de las líneas de atención al cliente o al correo electrónico:", 
        link:
          "Contactopyme.co@claro.com.co"
      }
    ],
  },
  onLoad() {},
  onChange(current) {
    this.setData({
      current,
    });
  },
  handleCustomButtonTap() {
    this.setData({
      showWebView: true,
      webViewUrl: "https://www.claro.com.co/personas/cavs/"
    });
  },
});
