
module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        extraResources: ['./extra/**', './extra/nginx/temp/**']
      },
      preload: 'src/preload.js'
    }
  }
}
