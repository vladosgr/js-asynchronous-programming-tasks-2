import fs from 'fs';

// BEGIN
export function compareFileSizes(firstFile, secondFile, result){
    fs.stat(firstFile,(err, firstStat) =>{
        fs.stat(secondFile, (err, secondStat) => {
            if (firstStat.size > secondStat.size){
                result(null, 1)
            }
            if (firstStat.size === secondStat.size){
                result(null, 0)
            }
            if (firstStat.size < secondStat.size){
                result(null, -1)
            }
        })
    });
}
// END