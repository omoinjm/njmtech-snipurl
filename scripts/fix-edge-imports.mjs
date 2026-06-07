import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join, dirname } from 'path';

const distDir = '.vercel/output/static/_worker.js/__next-on-pages-dist__';

function walk(dir) {
	const files = readdirSync(dir);
	for (const file of files) {
		const path = join(dir, file);
		if (statSync(path).isDirectory()) {
			walk(path);
		} else if (path.endsWith('.js')) {
			let content = readFileSync(path, 'utf8');
			if (content.includes('from"async_hooks"') || content.includes('from "async_hooks"')) {
				console.log(`Fixing async_hooks import in ${path}`);
				content = content.replace(/from\s*"async_hooks"/g, 'from "node:async_hooks"');
				content = content.replace(/from\s*'async_hooks'/g, 'from "node:async_hooks"');
				writeFileSync(path, content);

				// Create a shim file just in case the bundler still tries to resolve it relatively
				const shimPath = join(dirname(path), 'async_hooks.js');
				if (!existsSync(shimPath)) {
					console.log(`Creating shim at ${shimPath}`);
					writeFileSync(shimPath, 'export * from "node:async_hooks";');
				}
			}
		}
	}
}

try {
	walk(distDir);
	console.log('Successfully fixed Edge imports.');
} catch (error) {
	console.error('Failed to fix Edge imports:', error);
}
