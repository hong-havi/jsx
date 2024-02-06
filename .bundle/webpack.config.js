const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
    entry: {
        //모듈별 스크립트 파일 관리를 위한 명세
        //모듈 명
        products_list: { 
            import : path.resolve(__dirname, 'src/app/products/list.js'), // 사용할 소스파일
            filename : 'products/list.js' // 빌드완료 파일명
        },
        products_detail: {
            import : path.resolve(__dirname, 'src/app/products/detail.js'),
            filename : 'products/detail.js'
        },
    },
    // 출력시 저장할 경로
    output: {
        path: path.resolve(__dirname, '../js'), // 출력 타겟 경로
        filename: '[name].js', // 출력 타겟 파일명
        clean: true,
    },
    module: {
        rules: [ 
            // js 파일을 react babel 로 사용한다는 룰
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use : {
                    loader: 'babel-loader',
                    options:{
                        presets: [
                            "@babel/preset-env", ["@babel/preset-react", {"runtime": "automatic"}]
                        ]
                    }          
                }
            },{
                test: /\.s[ac]ss$/i,
                use: [
                  "style-loader",
                  "css-loader",
                  {
                    loader: "sass-loader",
                    options: {
                      // Prefer `dart-sass`
                      implementation: require("sass"),
                    },
                  },
                ]
              }
        ],
    },
    plugins : [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns:['**/*.LICENSE.txt'],
            protectWebpackAssets: false
        })
    ]

};

module.exports = config;