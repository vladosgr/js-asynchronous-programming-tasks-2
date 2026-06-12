import path from 'path';
import fs, { Stats } from 'fs';
import _ from 'lodash';
import async from 'async';
import { deepStrictEqual } from 'assert';
import file from './1-asynchronous-code';

// ВEGIN
export function getDirectorySize(dirPath, dirSize){
    fs.readdir(dirPath, (err, dirFiles) => {
        if (err){
            dirSize (err)
            return
        }
        const fullPath = dirFiles.map(filePath => path.join(dirPath, filePath));
        async.map(fullPath, fs.stat, (err, fileStat) => {
        const size = _.sumBy(fileStat, function(file){
            if (file.isFile()){
                return file.size;
            }
            else {
                return 0
            }
        })
        dirSize(null, size)
    })
    })
}
// END