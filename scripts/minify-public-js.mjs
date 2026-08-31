import { readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { build } from 'esbuild'

const jsDir = join(process.cwd(), 'dist', 'js')

async function minifyDir(dir) {
  let entries
  try {
    entries = readdirSync(dir)
  } catch {
    console.warn(`skip minify: ${dir} missing`)
    return
  }

  for (const name of entries) {
    const full = join(dir, name)
    if (!statSync(full).isFile() || !name.endsWith('.js')) continue
    try {
      await build({
        entryPoints: [full],
        outfile: full,
        allowOverwrite: true,
        minify: true,
        legalComments: 'none',
        logLevel: 'silent',
      })
      console.log(`minified ${join('dist/js', name)}`)
    } catch (e) {
      console.warn(`warning: could not minify ${name}, keeping original file:`, e.message)
    }
  }
}

await minifyDir(jsDir)
