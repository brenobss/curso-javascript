const fs = require('fs').promises
const path = require('path')

const caminhoArquivo = path.resolve(__dirname, 'texto.txt')

fs.writeFile(caminhoArquivo, 'Funciona')