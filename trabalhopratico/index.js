import { promises as fs } from 'fs'
init()
async function init() {
    await imprimir()
    await qntd(`SC`)
}
async function imprimir() {
    const estados = await fs.readFile('./Estados.json', 'utf-8')
    const cidades = await fs.readFile('./Cidades.json', 'utf-8')
    const objetoestados = await JSON.parse(estados)
    const objetocidades = await JSON.parse(cidades)
    objetoestados.forEach(async (estado) => {
        let contJson = objetocidades.filter((cidade) => cidade.Estado == estado.ID)
        try {
            await fs.writeFile(`./estadosecidades/${estado.Sigla}.json`, JSON.stringify(contJson, null, 2))
        } catch (err) {
            console.log(err)
        }
    });
}
async function qntd(uf) {
    const infoestado = await fs.readFile(`./estadosecidades/${uf.toUpperCase()}.json`, `utf-8`)
    const estado = await JSON.parse(infoestado)
    console.log(`${uf.toUpperCase()} é o estado que tem mais cidades, com um número total de ${estado.length}`)
}
