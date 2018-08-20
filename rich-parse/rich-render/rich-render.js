Component({
  properties: {
    item: {
      type: Object,
      value: {},
    },
    images: {
      type: Array,
      value: [],
    },
    parse_id: {
      type: String,
      value: '',
    }
  },

  methods: {
    onImgTap(e) {
      global.richParses[this.data.parse_id].onImgTap(e)
    },

    onLinkTap(e) {
      global.richParses[this.data.parse_id].onLinkTap(e)
    },
  }
})
