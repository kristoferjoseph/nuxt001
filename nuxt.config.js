export default {
 mode: 'spa',
 proxy: {
  '/api': {
    target: process.env.API_URL,
    pathRewrite: {
      '^/api' : '/'
      }
    }
  },
  configureWebpack: {
    stats: 'errors-only'
  },
  env: {
    apiUrl: process.env.API_URL || ''
  },
  generate: {
    dir: 'public'
  },
  srcDir: 'src/nuxt/'
}
