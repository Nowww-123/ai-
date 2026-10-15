import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync } from 'node:fs'
import path from 'node:path'

// Copy portable assets only. Large original media and unused documents stay local.
const works = readFileSync('src/works.ts', 'utf8')
const usedMedia = new Set([...works.matchAll(/['"]\/(works\/(?:videos|docs)\/[^'"]+)['"]/g)].map(match => match[1]))
for (const relative of usedMedia) {
  if (!existsSync(path.join('public', relative))) throw new Error(`Missing asset: ${relative}`)
}
function copy(directory = '') {
  for (const item of readdirSync(path.join('public', directory), { withFileTypes: true })) {
    const relative = path.join(directory, item.name)
    if (item.isDirectory()) copy(relative)
    else {
      if (/^works\/(videos|docs)\//.test(relative) && !usedMedia.has(relative)) continue
      const target = path.join('dist', relative)
      mkdirSync(path.dirname(target), { recursive: true })
      copyFileSync(path.join('public', relative), target)
    }
  }
}
copy()
