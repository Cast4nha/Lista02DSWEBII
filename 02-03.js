const fs = require('fs').promises;

async function showArquivosDir(diretorio, arquivos){
    if(!arquivos)
    arquivos = [];
    let showArquivosDir = await fs.readdir(diretorio);
    for(let c in showArquivosDir){
        let stat = await fs.stat(diretorio + '/' + showArquivosDir[c]);
        if(stat.isDirectory())
            await showArquivosDir(diretorio + '/' + showArquivosDir[c], arquivos);
        else
            files.push(diretorio + '/' + showArquivosDir[c]);
    }

    return files;
}

async function retorna(){
    let files = await showArquivosDir('./files');
    console.log(arquivos);
    return arquivos;
}

retorna();