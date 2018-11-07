#!/usr/bin/env node

/**
 * Removes the most recent articles entry
 */

const json = require('../data/articles.json')
const {
  getArticlesPath,
  writeJsonToFile
} = require('./common-utils')

async function run () {
  const sortedKeys = Object.keys(json.articles).sort()
  delete json.articles[sortedKeys[sortedKeys.length - 1]]
  await writeJsonToFile(getArticlesPath(), json)
}

run()
