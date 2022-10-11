import '#internal/nitro/virtual/polyfill'
import type { NodeHandler } from 'h3'
import { parseQuery } from 'ufo'
import { nitroApp } from '../app'

export default <NodeHandler> function (req, res) {
  const { url } = parseQuery(req.headers['x-now-route-matches'] as string)
  if (url) {
    req.url = url as string
  }
  return nitroApp.h3App.nodeHandler(req, res)
}
