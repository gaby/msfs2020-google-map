import { fork, execFile, ChildProcess } from 'child_process'
import path from 'path'
import log from 'electron-log'

const isDevelopment = process.env.NODE_ENV !== 'production'

export function startServer (): void {
  if (isDevelopment) {
    log.info('Starting koa server in dev env')
    fork(require.resolve('../../extra/server/server.js'))
  } else {
    log.info('Starting koa server in prod env')
    fork('./server.js', [], {
      cwd: path.join(__dirname, '../extra/server')
    })
  }

  log.info('Starting nginx server in dev env')
  execFile('./nginx.exe', { cwd: path.join(__dirname, '../extra/nginx') }, function (err, data) {
    if (err) {
      log.error(err)
      return
    }

    log.debug(data.toString())
  })
}

export function stopServer (): void {
  log.info('Stopping nginx server')
  execFile('./nginx.exe', ['-s', 'stop'], { cwd: path.join(__dirname, '../extra/nginx') }, function (err, data) {
    if (err) {
      log.error(err)
      return
    }

    log.debug(data.toString())
  })
}
