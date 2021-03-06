#!/usr/bin/env node
'use strict'
const meow = require('meow')

const cli = meow(
	`
  Usage
    $ unicorn-fun [input]

  Options
    --postfix  Lorem ipsum  [Default: rainbows]

  Examples
    $ cli-name
    unicorns & rainbows
    $ cli-name ponies
    ponies & rainbows
`,
	{
		flags: {
			postfix: {
				type: 'string',
				default: 'rainbows'
			}
		}
	}
)

const moduleName = (input, flags) => {
	console.log(input)
	console.log(flags)
}

console.log(moduleName(cli.input[0] || 'unicorns', cli.flags))
