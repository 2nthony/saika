import { PluginOptions } from 'saika/lib/types'
import ga from './ga'

export default (id: string) =>
  ({
    name: 'ga',
    extend: api => ga(api.router, id)
  } as PluginOptions)
