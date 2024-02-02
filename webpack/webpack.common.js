const path = require('path');// для того чтобы превратить относительный путь в абсолютный, мы будем использовать пакет path
const HTMLWebpackPlugins = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const production = process.env.NODE_ENV === 'production';

module.exports = {
    entry: path.resolve(__dirname, '..', './src/index.tsx'),// Точка входа в наше приложение содержит абсолютный путь к index.tsx
    output: {
        path: path.resolve(__dirname, '..', './dist'),// Путь, куда будет собираться наш проект
        filename: "main.js"// Имя нашего бандла
    },
    // mode: "development",// По умолчанию webpack миницифирует скрипты. Чтобы этого избежать, меняем режим
    // Нужно помочь вебпаку научиться работать с jsx- и tsx-файлами. Для этого используют ts loader
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,// Содержит регулярное выражение, которое включает информацию о том, какие файлы должны обрабатываться этим loader'ом
                use: [{
                    loader: 'ts-loader'
                }],// Для того чтобы ts-loader корректно отработал, нам нужен tsconfig. Его можно создать вручную или автоматически
                /** Чтобы проиницилизовать tsconfig автоматически, можно установить пакет typesctipt глобально или использовать npx,
                 выполнив команду npx tsc --init
                 После создания конфига нужно включить "allowJs": true, чтобы работать не только c typescript.
                 Также меняем "jsx": "react", чтобы мы могли работать с компонентами react,
                 и включаем карту ресурсов "sourceMap": true.
                 Пока на этом всё, вернёмся в этот конфиг позже*/
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    production ? MiniCssExtractPlugin.loader : 'style-loader',
                    // {
                    //     loader: "css-loader",
                    //     options: {
                    //         modules: true,
                    //         importLoaders: 1, //Значение 1 говорит о том, что некоторые трансформации PostCSS нужно применить до css-loader.
                    //     }
                    // },
                    // 'postcss-loader',

                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[local]__[hash:base64:5]',
                                auto: /\.modules\.\w+$/i
                            },
                            importLoaders: 1, //Значение 1 говорит о том, что некоторые трансформации PostCSS нужно применить до css-loader.
                        }
                    },
                    'postcss-loader',
                ]
            },


            // работа с изображениями
            {
                test: /\.(png|jpg|gif|webp)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/images/[hash][ext][query]',
                },
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/fonts/[hash][ext][query]',
                },
            },

            // для работы с svg
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack', 'url-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'] // Указываем файлы, с которыми будет работать Webpack
    },
    plugins: [
        new HTMLWebpackPlugins({
            template: path.resolve(__dirname, '..', 'public/index.html')
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: production
                ? 'static/styles/[name].[contenthash].css'
                : 'static/styles/[name].css',
        }),
    ],
    devServer: {
        historyApiFallback: true,
        static: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
        compress: true, // это ускорит загрузку в режиме разработки
        port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт
        open: true, // сайт будет открываться сам при запуске npm run dev
        hot: true,
    }
}