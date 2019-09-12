# Plugin API

A plugin is an object which has following properties:

## name

- Type: `string`
- Required: `true`

The plugin name.

## extend

- Type: `(api: SaikaInstance) => void`
- Required: `true`

Extending Saika instance.

## when

- Type: `(api: SaikaInstance) => boolean`
- Required: `false`

Whether to enable plugin.
