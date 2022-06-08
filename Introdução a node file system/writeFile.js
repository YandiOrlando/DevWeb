import { promises as fs } from 'fs'
async function init() {
    try {
        await fs.writeFile('EEEEEEE.txt', 'eita')
    } catch (err) {
        console.log(err)
    }
}
export default { init }