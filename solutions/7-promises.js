import fsp from 'fs/promises';

// BEGI
export function reverse(inputPath){
    return fsp.readFile(inputPath, 'utf-8')
        .then((data)=>{
            let oldFile = data.split('\n');
            let newFile = [];
            for (let i = oldFile.length-1; i >= 0; i--){
                newFile.push(oldFile[i])
            }
            newFile = newFile.join('\n');
            return fsp.writeFile(inputPath,newFile)
        })  
    }
// END