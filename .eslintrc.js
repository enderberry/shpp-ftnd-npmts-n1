module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
    },
    'extends': ['eslint:recommended', 'airbnb-base'],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module',
    },
    'rules': {
        'indent': ['error', 4],
        'func-names': 0,
        'prefer-arrow-callback': 0,
        'no-plusplus': 0,
        'import/no-unresolved': 0,
        'import/extensions': 0,
        'camelcase': 0,
        'prefer-template': 0,
        'no-return-assign': 0,
        'object-curly-spacing': 0
    },
    'parser': '@typescript-eslint/parser'
};
