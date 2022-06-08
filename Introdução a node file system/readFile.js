import { promises as fs } from 'fs'
import op from "./writeFile.js"
op.init().then(() => {
    readFile()
})
async function readFile() {
    try {
        const texto = await fs.readFile('EEEEEEE.txt', 'utf-8');
        console.log(texto)
    } catch (err) {
        console.log(err)
    }
}