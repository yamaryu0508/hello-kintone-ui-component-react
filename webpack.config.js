module.exports = {
  mode: 'development',

  entry: {
    desktop: './src/js/desktop.js'
  },
  output: {
    path: `${__dirname}/dist/`,
    filename: '[name]_bundle.js'
  },

  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              "presets": [
                "@babel/preset-env",
                "@babel/preset-react"
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ]
  }
}
