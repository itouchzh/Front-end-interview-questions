module.exports = (options) => {
    return {
        transformIndexHtml: {
            enforce: 'pre',
            transform: (html, ctx) => {
                console.log('html', html)
                return html.replace(/<%= title %>/g, options.inject.data.title)
            },
        },
    }
}
