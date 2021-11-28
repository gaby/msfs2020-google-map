import fs from 'fs'
import log from 'electron-log'

export function patchHostsFile (): void{
  log.info('Patching hosts')
  let hosts = fs.readFileSync('C:\\windows\\system32\\drivers\\etc\\hosts').toString()
  hosts += '\n127.0.0.1 kh.ssl.ak.tiles.virtualearth.net\n127.0.0.1 khstorelive.azureedge.net\n'
  fs.writeFileSync('C:\\windows\\system32\\drivers\\etc\\hosts', hosts)
}

export function unpatchHostsFile (): void{
  log.info('Unpatching hosts')
  let hosts = fs.readFileSync('C:\\windows\\system32\\drivers\\etc\\hosts').toString()
  hosts = hosts.replace('127.0.0.1 kh.ssl.ak.tiles.virtualearth.net\n', '').replace('127.0.0.1 khstorelive.azureedge.net\n', '').replace('\n\n', '\n')
  fs.writeFileSync('C:\\windows\\system32\\drivers\\etc\\hosts', hosts)
}
