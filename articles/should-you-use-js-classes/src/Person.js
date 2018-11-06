module.exports = state => {
  let name = state.name
  return {
    talk () {
      return `${name} says hello`
    },

    changeName (newName) {
      name = newName
    }
  }
}
