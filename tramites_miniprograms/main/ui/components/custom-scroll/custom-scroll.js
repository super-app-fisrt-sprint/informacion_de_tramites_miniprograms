Component({
  props: {
    text: "Default",
    isCustomNumber: false,
    customNumber: 0,
    padding: false,
    paragraphs: [],
    finalparagraphs: [],
    list: [],
    secondlist: [],
    invitation: ""
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  /* methods: {
    goToExternalPage(e) {
      console.log(e);
    },
  } */
  methods: {
    goToExternalPage(e) {
      console.log(e.currentTarget.dataset.link);
      const linkRedirect = e.currentTarget.dataset.link
      my.navigateTo({
        url:  `/main/ui/pages/plan-management/redirectToWeb/redirectToWeb?url=${linkRedirect}?id=1`

      })
    },
    goToExternalUrl(e) { 
      const linkRedirect = e.currentTarget.dataset.link
      my.navigateTo({
        url: `/main/ui/pages/plan-management/redirectToWeb/redirectToWeb?url=${linkRedirect}`
      })
    }

  }
  
  
});
