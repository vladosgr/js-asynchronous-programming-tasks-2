import { readFile, writeFile } from 'fs';
import fsp from 'fs/promises';

// BEGIN
export async function exchange(firstFile, secondFile){
    let firstData = await fsp.readFile(firstFile,'utf-8')
    let secondData = await fsp.readFile(secondFile,'utf-8')
    await fsp.writeFile(firstFile,secondData)
    await fsp.writeFile(secondFile,firstData)
}
// END