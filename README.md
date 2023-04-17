
# PFJ Monolithic Repository and Pattern Library

This is the proof of concept for [WEBSITE-9880](https://pilotflyingj.atlassian.net/browse/WEBSITE-9880). This project builds upon the previous [repository](https://github.com/lotiviot-ptc/svelte-monorepo-poc), by implementing [Lerna](https://lerna.js.org/), in order to further flesh out the tool


## Tech Stack

Svelte, SvelteKit, Rollup, NPM Registry, PNPM, Lerna


## Run Locally

Clone the project

```bash
  git clone https://github.com/lotiviot-ptc/PFJ-Lerna-MonoRepo
```

Go to the project directory

```bash
  cd PFJ-Lerna-MonoRepo
```

Install dependencies

```bash
  pnpm i -g lerna
```

```bash
  pnpm i
```

Build the Repository

```bash
  lerna run build
```

Run a Singular Project

```bash
  lerna run dev --scope=<Project Name>
```

Run the Storybook Implementation

```bash
  lerna run storybook --scope=pfj-storybook
```

How to Publish to Package updates to NPM (update only)

```bash
  lerna publish
```

How to Publish to Package updates to NPM (first publish)

```bash
  cd ./package-to-publish/
  npm publish --access public
```
## Roadmap

- Further Documentation Regarding NPM Publishing
- Discusssions on Security
- Fleshing out of Storybook Implementation


## Documentation

[Documentation](https://pilotflyingj.atlassian.net/wiki/spaces/~62dbcce977308a9694e2b882/pages/3037167781/PFJ+Lerna+MonoRepo+and+Pattern+Library+Proof+of+Concept)


## Acknowledgements

 - [readme.so/editor](https://readme.so/editor)


