#!/usr/bin/env node

/**
 * Adds an articles entry
 */

const inquirer = require('inquirer')
const json = require('../data/articles.json')
const {
  getArticlesPath,
  writeJsonToFile
} = require('./common-utils')

async function run () {
  const articleData = {}

  const {
    DIRECTORY_NAME,
    TITLE,
    SUBTITLE,
    COVER_PHOTO,
    TAGS,
    DATE_CREATED,
    PUBLISH_URL
  } = await askQuestions()

  articleData.id = getNextId()
  articleData.path = `articles/${DIRECTORY_NAME}/`
  articleData.cover = `${articleData.path}images/${COVER_PHOTO}`
  articleData.title = TITLE
  articleData.subtitle = SUBTITLE
  articleData.tags = TAGS
  articleData.date = DATE_CREATED
  articleData.published = PUBLISH_URL

  json.articles[articleData.id] = articleData

  await writeJsonToFile(getArticlesPath(), json)
}

function askQuestions () {
  return inquirer.prompt([
    {
      name: 'DIRECTORY_NAME',
      type: 'input',
      message: 'Name of the directory where article is located'
    },
    {
      name: 'TITLE',
      type: 'input',
      message: 'What is the title of the article?'
    },
    {
      name: 'SUBTITLE',
      type: 'input',
      message: 'What is the subtitle of the article?"'
    },
    {
      name: 'COVER_PHOTO',
      type: 'input',
      message: 'Name of cover photo including extension'
    },
    {
      name: 'TAGS',
      type: 'checkbox',
      message: 'What tags?',
      choices: json.tags
    },
    {
      name: 'DATE_CREATED',
      type: 'input',
      message: 'When was it created? (yyyy-mm-dd)'
    },
    {
      name: 'PUBLISH_URL',
      type: 'input',
      message: 'Where was it originally published?'
    }
  ])
}

function getNextId () {
  let keys = Object.keys(json.articles)
  return parseInt(keys[keys.length - 1]) + 1
}

run()
