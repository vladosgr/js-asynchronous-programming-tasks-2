import fs, { Stats } from 'fs';

// BEGIN
export default function watch(filePath, timeDuration, callback){
    let changeTime = 0;
    const id = setInterval(function(){
        fs.stat(filePath, (err,changes) => {
            if (err){
                callback (err);
                return
            }
        let newChangeTime = changes.mtimeMs;
        if (newChangeTime !== changeTime && changeTime !== 0){
            callback (null)
        };
        changeTime = newChangeTime;
        })
    }, timeDuration);
    return (id)
}


// END