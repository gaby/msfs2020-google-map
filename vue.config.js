
module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        extraResources: ['./extra/**', './extra/nginx/temp/**']
      }
    }
  }
}
