# `@lexjs/prompts`

A wrapper around the [prompts](https://www.npmjs.com/package/prompts) package with abstracted methods.

- [Installation](#installation)
- [Usage](#usage)
- [Methods](#methods)

## Installation

```bash
npm install @lexjs/prompts
```

```bash
pnpm add @lexjs/prompts
```

```bash
yarn add @lexjs/prompts
```

## Usage

```typescript
import $_ from '@lexjs/prompts';

async main() {
  const { answer } = await $_.text({
    name: 'answer',
    message: 'Type something',
  });
}
```

## Methods

- `autocomplete`
- `autocompleteMultiselect`
- `confirm`
- `date`
- `invisible`
- `list`
- `multiselect`
- `number`
- `password`
- `select`
- `text`
- `toggle`
