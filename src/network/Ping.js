module.exports = {
    pingAndGetFavicon: async function(url) {
        return {
            url: url,
            duration: '18ms',
            iconPath: 'http://google.com/favicon.ico'
        }
    }
}