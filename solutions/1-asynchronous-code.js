import fs from 'fs';

// BEGIN
export default function file(path){
    fs.readFile(path, 'utf-8', (err, data) => {
        console.log(data);
    });
};
// END