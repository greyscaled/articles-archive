const PersonFactory = require('./Person')
const Mammal = require('./Mammal')

module.exports = (state) => (
  Object.assign(
    {},
    Mammal,
    PersonFactory(state)
  )
)
