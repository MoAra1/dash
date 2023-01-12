
process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
    publicPath: '/dashboard/',
    assetsDir: './dashboard/',
    transpileDependencies: [
        'vuetify'
    ],
    configureWebpack: {
        devServer: {
            headers: { 'Access-Control-Allow-Origin': '*' },
            host: 'localhost',
            port: 8080,
            public: 'localhost:8080'
        }
    }
}
