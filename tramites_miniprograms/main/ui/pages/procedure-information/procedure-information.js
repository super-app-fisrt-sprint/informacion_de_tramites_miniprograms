Page({
  data: {
    nodes: [
      {
        name: "span",
        children: [
          {
            type: "text",
            text: "Gestiona tus trámites"
          }
        ]
      }
    ],
    proceduresMenu: [
      {
        id: "contract",
        iconUrl: "/main/ui/assets/file.svg",
        text: "Cesión de contrato"
      },
      {
        id: "plan",
        iconUrl: "/main/ui/assets/change.svg",
        text: "Cambio de plan"
      },
      {
        id: "transfer",
        iconUrl: "/main/ui/assets/move.svg",
        text: "Traslados"
      },
      {
        id: "sim",
        iconUrl: "/main/ui/assets/sim.svg",
        text: "Cambio de SIM card"
      }
    ]
  },
  goToPage(e) {
    const navigates = {
      contract: () =>
        my.navigateTo({
          url: "/main/ui/pages/contract-assigment/contract-assigment"
        }),
      plan: () =>
        my.navigateTo({ url: "/main/ui/pages/plan-management/plan-management" }),
      transfer: () => my.navigateTo({ url: "/main/ui/pages/transfer/transfer" }),
      sim: () => my.navigateTo({ url: "/main/ui/pages/sim-management/sim-management" })
    };
    const pageName = e.id;
    return navigates[pageName]();
  },
  onShareAppMessage() {
    return {
      title: "My App",
      desc: "My App description",
      path: "pages/index/index"
    };
  }
});
