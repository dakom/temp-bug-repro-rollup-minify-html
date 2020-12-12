import resolve from '@rollup/plugin-node-resolve';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import copy from 'rollup-plugin-copy';

export default {
    input: `./.ts-output/index.js`,
    output: [
        {
            file: `./dist/bundle.js`,
            format: 'es',
            sourcemap: true,
        },
    ],

    context: "window",

    plugins: [
        resolve(),
        minifyHTML(),
        copy({
            targets: [ { src: 'src/index.html', dest: 'dist' }, ]
        })
    ],
}