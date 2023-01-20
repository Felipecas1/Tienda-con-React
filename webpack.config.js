//permite construir el proyecto de forma personalizada

const path = require('path'); //permite saber donde vamos a trabajar o donde esta ubicado el proyecto.
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


//con el module.exports añadimos las configuraciones necesarias para el proyecto
module.exports = {
    entry: './src/index.js', //permite decir cual es el punto de entrada de la app.
    //con output ponemos donde va a vivir el proyecto despues de estar preparado
    output: { //dentro de path vamos a dar un resolve para saber donde nos encontramos y ahi crear una carpeta donde vivira el proyecto
        path: path.resolve(__dirname, 'dist'), //la carpeta se llama dist de distribution - build - main.
        filename: 'bundle.js', //nombre al empaquetado que se va a crear
        publicPath: '/'
    },
    mode: 'development',
    //que extensiones y como voy a trabajar con mi proyecto
    resolve: { //por medio de un arreglo pasamos las extensiones
        extensions: ['.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@icons': path.resolve(__dirname, 'src/assets/Icons/'),
            '@logos': path.resolve(__dirname, 'src/assets/Logos/'),
        }
    },
    //siguen los modulos donde vamos a trabajar las reglas que creamos con los loaders como los plugins
    module: { 
        rules: [
            {
                test: /\.(js|jsx)$/, //permite probar los elementos que vamos a trabajar
                exclude: /node_modules/, //lo que queremos que no lea
                use: { 
                    loader: 'babel-loader' //agregamos los loaders agregados previamente
                }
            },
            { //agregamos una nueva regla para trabajar con html
                test: /\.html$/, //permite probar los elementos que vamos a trabajar
                use: [
                    { 
                    loader: 'html-loader' //agregamos los loaders agregados previamente
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
            /*aquí en test agregas la expresión regular para procesar los diferentes tipos de imagenes que tengas.*/
                type: 'asset',
                generator: {
                   filename: 'assets/pictures/[hash][ext]',
            /*aquí en filename pones la carpeta en donde quieres que se guarden tus imagenes (le agrego el [hash] para evitar problemas con el cache, además [ext] hace referencia a la extensión del archivo que se haya procesado).*/
                }
             }
        ]
    },
    plugins: [ //agrega plugins que hemos instalado para usarlos
        new HtmlWebpackPlugin({ //para hacer referencia a este archivo toca llamarlo arriba para hacer la referencia
            template: './public/index.html',
            filename: './index.html' //como se llamara cuando lo preparemos
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 3005,
        historyApiFallback: true // habilitar endpoints
    }
}