const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        historyApiFallback: true,
        static: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
        compress: true, // это ускорит загрузку в режиме разработки
        port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт
        open: true, // сайт будет открываться сам при запуске npm run dev
        hot: true,
    },
    plugins: [
        new ReactRefreshWebpackPlugin(),
    ]
}
