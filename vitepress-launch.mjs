// vitepress-launch.mjs
import { webcrypto } from 'node:crypto'

if (!globalThis.crypto) {
    globalThis.crypto = webcrypto;
}

import('vitepress').then(async (vitepress) => {
    const command = process.argv[2] || 'dev';

    if (command === 'build') {
        await vitepress.build();
    } else if (command === 'preview') {
        await vitepress.preview().then(server => server.listen());
    } else {
        await vitepress.createServer().then(server => server.listen());
    }
});
