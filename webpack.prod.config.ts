import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import path from 'path';
import { Configuration, ProvidePlugin } from 'webpack';

const config: Configuration = {
  mode: 'production',
  entry: './src/main.tsx',
  externals: {
    jquery: 'jQuery',
  },
  output: {
    path: path.resolve(__dirname, 'checkout-ui-custom'),
    filename: 'checkout6-custom.js',
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    //new HtmlWebpackPlugin({
    //template: "src/index.html",
    //}),

    new ProvidePlugin({
      $: 'jquery',
      jquery: 'jquery',
    }),

    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),

    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),

    new CleanWebpackPlugin(),
  ],
};

export default config;
