const {ESLint} = require('eslint');

(async function main() {
    const lint = new ESLint();
    const result = await lint.lintFiles(['src/**/*.ts']);

    const formatter = await lint.loadFormatter('stylish');
    const resultText = formatter.format(result);

    console.log(resultText);
    if (result.some(({errorCount: ec}) => ec)) process.exitCode = 1;
})().catch(function (err) {
    throw err;
});
