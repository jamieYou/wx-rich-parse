import showdown from './helper/showdown.js'
import { html2json } from './helper/html2json.js'

Component({
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
    }
  },

  data: {
    rich: null
  },

  ready() {
    this.parse(this.data.content)
  },

  methods: {
    parse(content) {
      const { type } = this.data
      if (type === 'md' || type === 'markdown') {
        const converter = new showdown.Converter()
        content = converter.makeHtml(content)
      }
      const transData = html2json(content, 'rich')
      this.setData({ rich: transData })
    }
  }
})
