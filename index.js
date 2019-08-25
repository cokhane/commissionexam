import { userActionIn, userActionOut } from './method/actiontype.mjs';
const fs = require("fs"); // Or `import fs from "fs";` with ESM
const jsonfile = require('jsonfile')

const ask = (e) => {
  process.stdout.write(`\n\n ${e}`)
  process.stdout.write('>')
}
process.stdin.on('data', (data) => {
  fs.stat(`${data.toString().trim()}`, (e) => {
    (!e) ? getJson(data.toString().trim()) : process.exit()
  })
})

process.on('exit', () => {
  process.stdout.write(`\n\n\n\n`)
  process.stdout.write('wrong path! please read the README file for path instruction')
  process.stdout.write(`\n\n\n\n`)
})


const getJson = e => {
  const file = e
  const inputJson = jsonfile.readFileSync(file)
  const jsonMapData = inputJson.map((e) => {
   return (e.type == "cash_in") ? userActionIn(e) : userActionOut(e)
  });

  console.log('\n\n'+'---answer' + '\n\n')
  jsonMapData.map((e) => {
    console.log(e)
  })
  console.log('\n\n')
  ask('Enter input file path for JSON: ')
}

ask('Enter input file path for JSON: ')
