const HL = require('highlight.js')

module.exports = {
  chainWebpack: config => {
    // Add Markdown Loader using highlight.js for <code>
    config.module
      .rule('markdown')
      .test(/\.(md)$/)
      .use('markdown-loader')
      .loader('markdown-loader')
      .options({
        highlight: (code, lang) => {
          if (!lang || ['text', 'literal', 'nohighlight'].includes(lang)) {
            return `<pre class="hljs">${code}</pre>`
          }
          const html = HL.highlight(lang, code).value
          return `<span class="hljs">${html}</span>`
        }
      })
      .end()

    // feed markdown loader into html-loader
    config.module
      .rule('markdown')
      .use('html-loader')
      .before('markdown-loader')
      .loader('html-loader')
  }
}
