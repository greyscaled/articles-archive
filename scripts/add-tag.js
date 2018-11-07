#!/usr/bin/env node

/**
 * Adds a tag entry
 */

const inquirer = require('inquirer')
const json = require('../data/articles.json')
const {
  getArticlesPath,
  writeJsonToFile
} = require('./common-utils')

async function run () {
  const { ADD_TAG } = await promptForTag()

  const tags = json.tags
  if (!tags.includes(ADD_TAG)) {
    json.tags.push(ADD_TAG)
    json.tags.sort()
    await writeJsonToFile(getArticlesPath(), json)
  }
}

function promptForTag () {
  return inquirer.prompt([{
    name: 'ADD_TAG',
    type: 'input',
    message: 'What tag would you like to add?'
  }])
}

run()
