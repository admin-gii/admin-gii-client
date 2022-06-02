const fs = require('fs');
const config = require('../tsconfig.paths.json');
const prettier = require('prettier');

if (!config.compilerOptions.paths) config.compilerOptions.paths = {};

/**
 * Root module path
 */
const base = './src';

/**
 * Modules for caching
 */
let registered = [];

/**
 * Clear old module paths
 */
const clear = () => {
  Object.entries(config.compilerOptions.paths)
    .filter(([_, value]) => {
      return value.some(item => {
        const isModule = item.match(/.*\/modules\/((?!(\/)).)*\/\*$/gi);
        const isModuleRoot = item.match(/.*\/modules\/((?!(\/)).)*\/index$/gi);

        return isModule || isModuleRoot;
      })
    })
    .forEach(([key]) => {
      const isRegistered = registered.some(one => one === key);

      if (!isRegistered) {
        delete config.compilerOptions.paths[key];
      }
    });
};

/**
 * Recursively register modules without unneeded /modules path chaining
 */
const writePaths = (path = []) => {
  const depth =
    base + (path.length ? '/modules/' + path.join('/modules/') : '');
  const dirs = fs.readdirSync(depth);

  if (dirs.includes('modules')) {
    fs.readdirSync(depth + '/modules').forEach(item => {
      writePaths(path.concat(item));
    });
  }

  if (path.length) {
    const root = depth
      .replace(base + '/modules/', '@')
      .replace(/\/modules/gi, '');
    const content = fs.readdirSync(depth);

    const exts = ['.ts', '.tsx', '.js', '.jsx'];

    if (exts.some(ext => content.includes(`index${ext}`))) {
      config.compilerOptions.paths[root] = [`${depth}/index`];

      registered.push(root);
    }

    const rootRecursive = `${root}/*`;

    config.compilerOptions.paths[rootRecursive] = [`${depth}/*`];

    registered.push(rootRecursive);
  }
};

writePaths();

clear();

fs.writeFileSync(
  './tsconfig.paths.json',
  prettier.format(JSON.stringify(config), {
    parser: 'json'
  })
);
