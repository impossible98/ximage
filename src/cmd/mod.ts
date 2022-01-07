import * as process from 'process';

import { help } from './help';
import { version } from './version';

export function main() {
    if (process.argv.length === 3) {
        if (process.argv[2] === 'version') {
            version();
        } else {
            help();
        }
    } else {
        console.log('Hello, world!');
    }
}
