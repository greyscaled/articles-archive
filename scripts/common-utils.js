const fs = require('fs')
const path = require('path')

function writeJsonToFile (path, json) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, JSON.stringify(json, null, 2), 'utf8', (err) => {
      if (err) reject(err)
      else resolve()
    })
  })
}

function getArticlesPath () {
  return path.resolve(__dirname, '../data', 'articles.json')
}

module.exports = {
  getArticlesPath,
  writeJsonToFile
}
