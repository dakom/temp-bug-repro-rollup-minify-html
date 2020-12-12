# Temporary repo for https://github.com/asyncLiz/rollup-plugin-minify-html-literals/issues/16
1. `npm install`
2. `npm run build`
3. run a http server in dist directory (e.g. `npx http-server ./dist`)

The red circle button does not show properly and the console logs `CSSResult {cssText: ""}`

Now, in the `rollup.config.js`, comment out `minifyHTML` and rebuild/re-run

Now the red circle button shows and  the console logs `CSSResult {cssText: "red"}`
