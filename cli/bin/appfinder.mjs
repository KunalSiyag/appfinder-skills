#!/usr/bin/env node
import { help, queryAppFinder } from '../lib/client.mjs';

const args = process.argv.slice(2);
if (!args.length || (args.length === 1 && ['--help', '-h'].includes(args[0]))) {
  process.stdout.write(help);
} else if (args.length === 1 && args[0] === '--version') {
  process.stdout.write('0.1.0\n');
} else {
  try {
    process.stdout.write(`${JSON.stringify(await queryAppFinder(args), null, 2)}\n`);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Request failed';
    process.stderr.write(`AppFinder: ${message.replace(/[\x00-\x1f\x7f]/g, ' ')}\n`);
    process.exitCode = 1;
  }
}
