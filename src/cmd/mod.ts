import * as process from 'process';

import terminalImage from 'term-img';

import { help } from './help';
import { version } from './version';

function fallback() {
    // Return something else when not supported
}

export async function main() {
    if (process.argv.length === 3) {
        if (process.argv[2] === 'version') {
            version();
        } else {
            console.log(terminalImage(process.argv[2], { fallback }));
        }
    }
}
