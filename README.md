# `@lexjs/prompts`

A wrapper around the [prompts](https://www.npmjs.com/package/prompts) package with abstracted methods.

- [Installation](#installation)
- [Usage](#usage)
- [Methods](#methods)

## Installation

```bash
npm install @lexjs/prompts --save-dev
```

```bash
pnpm add @lexjs/prompts --save-dev
```

```bash
yarn add @lexjs/prompts --dev
```

## Usage

```typescript
import $_ from '@lexjs/prompts';

async main() {
  const { answer } = await $_.text({
    name: 'answer',
    message: 'Type something'
  })
}
```

## Methods

The following methods are available:

- `autocomplete`
- `select`
- `multiselect`
- `text`
- `toggle`
