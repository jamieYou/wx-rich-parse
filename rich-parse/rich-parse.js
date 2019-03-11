const { html2json } = require('./helper/html2json')

global.richParses = {}

Component({
  options: {
    addGlobalClass: true,
  },

  properties: {
    content: {
      type: String,
      value: '',
      observer(newVal) {
        this.parse(newVal)
      }
    },
    type: {
      type: String,
      value: 'html',
    },
    preview: {
      type: Boolean,
      value: true,
    },
  },

  data: {
    rich: null,
    parse_id: null,
  },

  attached() {
    // 把组件实例放到全局上，让 rich-render 里面可以访问
    global.richParses[this.__wxExparserNodeId__] = this
    this.setData({ parse_id: this.__wxExparserNodeId__ })
  },

  ready() {
    this.parse(this.data.content)
    global.tt = this
  },

  detached() {
    delete global.richParses[this.__wxExparserNodeId__]
  },

  methods: {
    parse(content, cb) {
      const { type } = this.data
      if (type === 'md' || type === 'markdown') {
        const { md2html = v => v } = global
        content = md2html(content)
      }
      const transData = html2json(content, 'rich')
      this.setData({ rich: transData }, cb)
    },

    onImgTap(e) {
      const detail = {
        current: e.target.dataset.src, // 当前显示图片的http链接
        urls: this.data.rich.imageUrls, // 需要预览的图片http链接列表
      }
      this.triggerEvent('imgTap', detail, {})
      this.data.preview && wx.previewImage(detail)
    },

    onLinkTap(e) {
      const { href } = e.currentTarget.dataset
      this.triggerEvent('linkTo', { href }, {})
    }
  }
})
