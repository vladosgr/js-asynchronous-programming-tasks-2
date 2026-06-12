import fsp from 'fs/promises';

// BEGIN
export function getTypes(pathList){
    let array = pathList.map(path =>{
    return fsp.stat(path)
        .then((type)=>{
            if (type.isDirectory() === true){
                return('directory')
            }
            else if (type.isDirectory() === false){
                return('file')
            }
        })
        .catch(()=>null)
    })
    return(Promise.all(array))
}
// END