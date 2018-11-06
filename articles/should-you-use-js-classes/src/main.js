const Person = require('./PersonMammal')

const Grey = Person({ name: 'Grey' })

const btn = document.createElement('button')
btn.addEventListener('click', Grey.talk)

document.body.appendChild(btn)
