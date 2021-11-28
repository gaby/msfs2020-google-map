import { execFile } from 'child_process'
import path from 'path'
import log from 'electron-log'

export function addCertificate () {
  execFile('certutil', ['-addstore', '-f', 'root', 'cert.crt'], { cwd: path.join(__dirname, '../extra/certs'), shell: true }, function (err, data) {
    console.log('certuil', err, data.toString())
    if (err) {
      log.error(err)
      return
    }

    log.debug(data.toString())
  })
}

export function removeCertificate () {
  execFile('certutil', ['-delstore', '-f', 'root', 'cert.crt'], { cwd: path.join(__dirname, '../extra/certs'), shell: true }, function (err, data) {
    console.log('certuil', err, data.toString())
    if (err) {
      log.error(err)
      return
    }

    log.debug(data.toString())
  })
}
