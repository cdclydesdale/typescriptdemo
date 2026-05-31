# TypeScript Demo

This repository is for learning TypeScript.

The source code is written in TypeScript and lives in the `src` directory.
When the project is built, TypeScript compiles those files into JavaScript in the `dist` directory.

## Project structure

- `src/` - TypeScript source files
- `dist/` - compiled JavaScript files
- `tsconfig.json` - TypeScript compiler configuration
- `package.json` - npm scripts and project dependencies

## Scripts

- `npm run build` - compile TypeScript files from `src` into JavaScript files in `dist`
- `npm run watch` - compile automatically when TypeScript files change
- `npm run start` - run the compiled `dist/index.js` file
- `npm run dev` - build the project, then run it

## Getting started

```bash
npm install
npm run build
```

## Build

Use this command to compile the TypeScript files:

```bash
npm run build
```

## Run

After building, run a compiled JavaScript file from the `dist` directory.

For example, to run `playerdata.js`:

```bash
node dist/playerdata.js
```

To run the default project entry point:

```bash
npm run start
```
