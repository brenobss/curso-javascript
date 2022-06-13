const fs = require('fs').promises
const path = require('path')

const caminhoArquivo = path.resolve(__dirname, 'texto.txt')

//Funciona dos dois modos

// async function ler(caminho) {
//     const dados = await fs.readFile(caminho, { encoding: 'utf8' })
//     console.log(dados);
// }

// ler(caminhoArquivo)


fs.readFile(caminhoArquivo, { encoding: 'utf8' }).then(value => console.log(value))