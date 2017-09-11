(function (global) {
    System.config({
        transpiler: 'plugin-babel',
        defaultExtension: 'js',
        paths: {
            "npm:": 'https://unpkg.com/'
        }, 
        map: Object.assign({
            // babel transpiler
            'plugin-babel': 'npm:systemjs-plugin-babel@0.0.25/plugin-babel.js',
            'systemjs-babel-build': 'npm:systemjs-plugin-babel@0.0.25/systemjs-babel-browser.js',

            // react
            'react': 'npm:react@15.6.1',
            'react-dom': 'npm:react-dom@15.6.1',
            'react-dom-factories': 'npm:react-dom-factories',
            'prop-types': 'npm:prop-types',

            'app': appLocation + 'app'
            
        }, systemJsMap), // systemJsMap comes from index.html

        packages: {
            "react": {
                main: "./dist/react.min.js"
            },
            "react-dom": {
                main: './dist/react-dom.min.js'
            },
            "prop-types": {
                main: './prop-types.min.js',
                defaultExtension: 'js'
            },
            "app": {
                defaultExtension: 'jsx'
            }
        },
        meta: {
            '*.jsx': {
                babelOptions: {
                    react: true
                }
            }
        }
    });
})(this);