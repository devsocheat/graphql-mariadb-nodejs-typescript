import fs from 'fs';
import path from 'path';

const graphReader = (fileName : string) => {
    try {
        //Navigate to graphql/schema directory
        return `${fs.readFileSync(path.join(__dirname, '../graphql/schema', fileName), 'utf-8')}`
    } catch (error) {
        return `type Unknown {}`
    }
}

export default graphReader