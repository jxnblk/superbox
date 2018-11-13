module.exports = {
  presets: [
    [
      '@babel/env', {
        modules: false,
        loose: true
      }
    ],
    '@babel/react'
  ],
  env: {
    test: {
      presets: [
        [
          '@babel/env', {
            loose: true
          }
        ],
        '@babel/react'
      ]
    }
  }
}
