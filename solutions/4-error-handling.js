import fs from 'fs';

// BEGIN
export function move(filePath, copyPath, callback){
    fs.readFile(filePath, 'utf-8', (err, copyFile) => {
        if (err){
            callback (err)
            return
        }
        fs.writeFile(copyPath, copyFile, (err) => {
            if (err){
                callback (err)
                return
            }
            fs.unlink(filePath,(err)=>{
            if (err){
                callback (err)
                return
            }
            else{
                callback (null)
            }
            })
        })
    })
}
// END