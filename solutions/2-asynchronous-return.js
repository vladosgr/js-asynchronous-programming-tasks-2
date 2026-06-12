import fs from 'fs';

// BEGIN
export default function write(path, data, callback){
    fs.writeFile(path,data, (err,success)=>{
        callback (success)
    })
}
// END