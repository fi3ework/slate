/** @jsx h */

import { h } from '../../helpers'

export const input = (
  <value>
    <block>one</block>
    <block>two</block>
  </value>
)

export const run = editor => {
  return editor.getBefore({
    anchor: { path: [0, 0], offset: 1 },
    focus: { path: [0, 1], offset: 2 },
  })
}

export const output = { path: [0, 0], offset: 0 }
