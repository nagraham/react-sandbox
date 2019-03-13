module.exports = {
  entry: "./src/index.tsx",

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.css$/,
        // the "use" property is for defining multiple loaders
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  resolve: {
    extensions: [".webpack.js", ".web.js", ".tsx", ".ts", ".js"]
  },

  output: {
    filename: "bundle.js",
    path: `${__dirname}/dist`,
    publicPath: "/dist/",
  },

  // publicPath: https://stackoverflow.com/questions/28846814/what-does-publicpath-in-webpack-do
  devServer: {
    contentBase: `${__dirname}/public`,
    port: 3003,
    publicPath: "http://localhost:3003/dist/",
  }
}
