const { describe, it, eq } = require('./utils')

describe('str.search', () => {
  it('returns correct index', () => {
    const str = 'Hello, world!'
    eq(str.search(/,/), 5)
    eq(str.search(/d!/), 11)
    eq(str.search(/ /), 6)
  })
})

describe('str.match', () => {
  it('returns correct match-object', () => {
    const str = 'yo yo yo!'
    const expr = str.match(/yo/)
    eq(expr[0], 'yo')
    eq(expr.index, 0)
    eq(expr.input, str)
  })
  it('returns correct match-object with multiple members', () => {
    const str = 'yo you yo!'
    const expr = str.match(/yo(u)/)
    eq(expr[0], 'yo')
    eq(expr[1], 'u')
    eq(expr.index, 0)
    eq(expr.input, str)
  })
  it('returns an array when used with /g flag', () => {
    const expr = 'yo you yo!'.match(/yo/g)
    eq(expr[0], 'yo')
    eq(expr[1], expr[2])
  })
  it('returns single element when used with /g flag and braces', () => {
    const expr = 'yo you yo!'.match(/yo(u)/g)
    eq(expr[0], 'you')
    eq(expr[1], undefined)
  })
  it('returns null when zero matches', () => eq(''.match(/nothing/), null))
})

describe('str.split', () => {
  it('splits string into array with reges', () => {
    const expr = 'some str'.split(/ /)
    eq(expr[0], 'some')
    eq(expr[1], 'str')
  })
})

describe('str.replace', () => {
  it('replaces first match', () => eq('some_str_x'.replace(/_/, '-'), 'some-str_x'))
  it('replaces all matches', () => eq('some_str_x'.replace(/_/g, '-'), 'some-str-x'))
  // TODO: special symbols
})

describe('regexp.test', () => {
  it('replaces first match', () => {
    eq(/, /.test('Hello, darkness, my old friend.'), true)
    eq(/!/.test('Hello, darkness, my old friend.'), false)
  })
})
