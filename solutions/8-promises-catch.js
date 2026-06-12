import fsp from 'fs/promises';

// BEGIN
export function touch(file){
    return fsp.access(file)
    .then(()=>{
            return
        })
    .catch(()=>{
            return fsp.writeFile(file,'file')
        })
}

// END