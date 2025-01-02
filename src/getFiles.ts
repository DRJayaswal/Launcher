import fs from "fs";
import path from "path";

export default function getFiles(id:string,filePath: string): string[] {
    const distPath = filePath.replace('src', `dist/projects/${id}`);
    if (!fs.existsSync(distPath)) {
        return [];
    }
    let allFiles: string[] = [];
    const files = fs.readdirSync(distPath);
    files.forEach((file) => {
        const fullPath = path.join(distPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            allFiles = allFiles.concat(getFiles(id,fullPath));
        } else {
            allFiles.push(fullPath);
        }
    });
    return allFiles;
}