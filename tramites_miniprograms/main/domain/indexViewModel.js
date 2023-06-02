function goToPage() {
  const navigates = {
    contract: () =>
      my.navigateTo({
        url: "/pages/contract-assignment/contract-assignment"
      }),
    plan: () =>
      my.navigateTo({ url: "/pages/plan-management/plan-management" }),
    transfer: () => my.navigateTo({ url: "/pages/transfer/transfer" }),
    sim: () => my.navigateTo({ url: "/pages/sim-management/sim-management" })
  };
  const pageName = e.id;
  return navigates[pageName]();
}

module.exports.goToPage = goToPage;