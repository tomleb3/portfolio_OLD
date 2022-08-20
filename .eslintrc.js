module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        semi: ['error', 'always'],
        'arrow-parens': ['warn', 'as-needed'],
        'no-trailing-spaces': ['warn'],
        'comma-dangle': ['error', 'always-multiline'],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
    },
};
