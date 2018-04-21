const ANSI = {
  RESET: '\x1b[0m',
  FG_GREEN: '\x1b[32m'
}

const describe = (descriptor, cb) => {
  const { RESET, FG_GREEN } = ANSI
  console.log(`${FG_GREEN}%s${RESET}`, `${descriptor}\n`.toUpperCase())
  cb()
}
const it = (descriptor, cb) => {
  const { RESET, FG_GREEN } = ANSI
  console.log(`${FG_GREEN}%s${RESET}`, `${descriptor}\n`)
  cb()
}
const eq = (result, expectedValue) => console.log({ result, expectedValue, success: result === expectedValue })

module.exports = { describe, it, eq }
