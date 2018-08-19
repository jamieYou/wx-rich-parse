Component({
  properties: {
    item: {
      type: Object,
      value: {},
    },
    images: {
      type: Array,
      value: [],
    }
  },

  methods: {
    onImgTap(e) {
      wx.previewImage({
        current: e.target.dataset.src, // 当前显示图片的http链接
        urls: this.data.images, // 需要预览的图片http链接列表
      })
    }
  }
})
