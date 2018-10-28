// @ts-check

const path = require('path')
const fs = require('fs')
const util = require('util')
const writeFile = util.promisify(fs.writeFile)
const qiita = require('./qiita')

require('dotenv').config()

const main = async () => {
  const data = await qiita.getUser('koh110', { Authorization: `Bearer ${process.env.TOKEN}` })
  console.log(data)
  await writeFile(path.join(__dirname, './response.log'), JSON.stringify(data))
}

main().then(() => console.log('done')).catch(err => console.error(err))