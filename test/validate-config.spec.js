/* eslint-env jest */

const eslint = require('eslint')
const config = require('../')

describe('eslint-config-aegir', () => {
  it('basic export', () => {
    expect(config).toMatchSnapshot()
  })

  it('load config in eslint to validate all rule syntax is correct', () => {
    const CLIEngine = eslint.CLIEngine

    const cli = new CLIEngine({
      useEslintrc: false,
      configFile: 'index.js'
    })

    const code = `
'use strict'
var foo = 1
var bar = function () {}
bar(foo)
`

    expect(cli.executeOnText(code).errorCount).toEqual(0)
  })
})
