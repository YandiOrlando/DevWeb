import {promises as fs} from "fs"; 
init()
async function init(){
    await Arquivos()
    await qntdCidadesUf('ba')
    await qtdUfCidades()
    await RetornarCapital(`ba`)
    await cidadeRegiao(`Nordeste`)
}
async function Arquivos(){
    let data = await fs.readFile("Estados.json", "utf-8");
    const ufs = await JSON.parse(data);
    data = await fs.readFile("Cidades.json", "utf-8");
    const cidades = await JSON.parse(data);

    for (var batatinhafritamurcha of ufs){     
  
        let contCidades = cidades.filter(cidades => cidades.Estado === batatinhafritamurcha.ID);
        await fs.writeFile(`./uf/${batatinhafritamurcha.Sigla}.json`, JSON.stringify(contCidades, null, 2));
    }
}
async function qntdCidadesUf(uf) {

    let data = await fs.readFile(`./uf/${uf.toUpperCase()}.json`, 'utf-8');
    const ufs = await JSON.parse(data);

    console.log(`O estado ${uf.toUpperCase()} tem ${ufs.length} cidades`)

}

// atvd 3

async function qtdUfCidades(){

    let data = await fs.readFile("Estados.json", "utf-8");
    const ufs = await JSON.parse(data);
    const Sigla = await ufs.map( batatinhafritacrocante => batatinhafritacrocante.Sigla )
    const CidadesQtd = []

    Sigla.forEach( async (uf, i) => {
        try{
            let ufs = await fs.readFile(`./uf/${uf}.json`, `utf-8`)
            let objufs = await JSON.parse(ufs)

            CidadesQtd.push({
                uf : uf,
                cidades : objufs.length
            })
            CidadesQtd.sort((a, b) => {
                if (a.cidades > b.cidades){
                    return -1;
                }
                if(a.cidades < a.cidades){
                    return 1
                }
                return 0;
            })
            CidadesQtd.splice(5, 1)

            if( i == sigla.length - 1){
                CidadesQtd.forEach( dl => {
                    console.log(`${dl.uf} - ${dl.cidades}`)
                })
            }
        }catch(err){
            console.log(err)
        }
        
    });
}

// continuação Trabalho Nodejs
async function RetornarCapital(uf){
    let data = await fs.readFile(`./Capitais.json`, 'utf-8');
    const ufs = await JSON.parse(data);
    ufs.forEach(d => {
        if(d.Sigla == uf.toUpperCase()){

            console.log(`A cidade de ${d.Capital} é a capital de ${d.Estado}`)
        }
    })
    
}

async function cidadeRegiao(reg){
    let data = await fs.readFile(`./Capitais.json`, 'utf-8');
    const leregion = await JSON.parse(data);

    leregion.forEach(d => {
        if(d.Regiao == reg){
            console.log(`${reg} - ${d.Capital} - ${d.Estado}`)
        }
    })
}
