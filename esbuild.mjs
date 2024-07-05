import esbuild from 'esbuild'
import { sassPlugin } from 'esbuild-sass-plugin'

let context = await esbuild.context({
  entryPoints: ['app/javascript/application.js'],
  assetNames: "[name]-[hash].digested",
  bundle: true,
  sourcemap: true,
  outdir: 'app/assets/builds/bnb_blazer',
  publicPath: 'assets',
  plugins: [
    sassPlugin()
  ],
  loader: {
    ".locale.json": "file",
    ".json": "json",
    ".png": "file",
    ".jpeg": "file",
    ".jpg": "file",
    ".svg": "file",
    ".woff": "file",
    ".woff2": "file"
  },
  mainFields: ["browser", "module", "main"],
  logLevel: 'info',
  minify: true,
  define: {
    global: "window",
  },
})

if (process.argv[2] === '--watch') {
  await context.watch()
} else {
  await context.rebuild()
  process.exit(0)
}