# `@lexjs/prompts`

![Build](https://img.shields.io/github/actions/workflow/status/LexBorisoff/prompts/release.yml)
![NPM Version](https://img.shields.io/npm/v/@lexjs/prompts)

Interactive prompts

- [Installation](#installation)
- [Methods](#methods)
  - [`autocomplete`](#autocomplete)
  - [`autocompleteMultiselect`](#autocompletemultiselect)
  - [`confirm`](#confirm)
  - [`date`](#date)
  - [`invisible`](#invisible)
  - [`list`](#list)
  - [`multiselect`](#multiselect)
  - [`number`](#number)
  - [`password`](#password)
  - [`select`](#select)
  - [`text`](#text)
  - [`toggle`](#toggle)

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

## Methods

### `autocomplete`

```typescript
import $_ from '@lexjs/prompts';

const result = await $_.autocomplete({
  message: 'Choose a city',
  name: 'city',
  choices: [
    { title: 'New York City' },
    { title: 'Toronto' },
    { title: 'London' },
    { title: 'Paris' },
  ],
});
```

<img src="https://github.com/LexBorisoff/prompts/blob/demo/demo/autocomplete.gif?raw=true" alt="autocomplete prompt" width="500" />

### `autocompleteMultiselect`

```typescript
import $_ from '@lexjs/prompts';

const result = await $_.autocompleteMultiselect({
  message: 'Pick colors',
  name: 'colors',
  choices: [
    { title: 'Red', value: '#ff0000' },
    { title: 'Green', value: '#008000' },
    { title: 'Blue', value: '#0000ff' },
    { title: 'White', value: '#ffffff' },
    { title: 'Black', value: '#000000' },
  ],
  instructions: false,
});
```

<img src="https://github.com/LexBorisoff/prompts/blob/demo/demo/autocomplete-multiselect.gif?raw=true" alt="autocompleteMultiselect prompt" width="500" />

### `confirm`

```typescript
import $_ from '@lexjs/prompts';

const result = await $_.confirm({
  message: 'Confirm?',
  name: 'value',
});
```

<img src="https://github.com/LexBorisoff/prompts/blob/demo/demo/confirm.gif?raw=true" alt="confirm prompt" width="500" />

### `date`

```typescript
import $_ from '@lexjs/prompts';

const result = await $_.date({
  message: 'Enter a date',
  name: 'date',
});
```

<img src="https://github.com/LexBorisoff/prompts/blob/demo/demo/date.gif?raw=true" alt="date prompt" width="500" />

### `invisible`

```typescript
import $_ from '@lexjs/prompts';

const result = await $_.invisible({
  message: 'Enter password',
  name: 'password',
});
```

<img src="https://github.com/LexBorisoff/prompts/blob/demo/demo/invisible.gif?raw=true" alt="invisible prompt" width="500" />

### `list`

```typescript
import $_ from '@lexjs/prompts';

const result = await $_.list({
  message: 'Enter values',
  name: 'values',
  separator: ' ',
});
```

<img src="https://github.com/LexBorisoff/prompts/blob/demo/demo/list.gif?raw=true" alt="list prompt" width="500" />

### `multiselect`

```typescript
import $_ from '@lexjs/prompts';

const result = await $_.multiselect({
  message: 'Pick colors',
  name: 'colors',
  choices: [
    { title: 'Red', value: '#ff0000' },
    { title: 'Green', value: '#008000' },
    { title: 'Blue', value: '#0000ff' },
    { title: 'White', value: '#ffffff' },
    { title: 'Black', value: '#000000' },
  ],
  instructions: false,
});
```

<img src="https://github.com/LexBorisoff/prompts/blob/demo/demo/multiselect.gif?raw=true" alt="multiselect prompt" width="500" />

### `number`

```typescript
import $_ from '@lexjs/prompts';

const result = await $_.number({
  message: 'Enter a number between 10 and 100',
  name: 'number',
  min: 10,
  max: 100,
  initial: 0,
});
```

<img src="https://github.com/LexBorisoff/prompts/blob/demo/demo/number.gif?raw=true" alt="number prompt" width="500" />

### `password`

```typescript
import $_ from '@lexjs/prompts';

const result = await $_.password({
  message: 'Enter password',
  name: 'password',
});
```

<img src="https://github.com/LexBorisoff/prompts/blob/demo/demo/password.gif?raw=true" alt="password prompt" width="500" />

### `select`

```typescript
import $_ from '@lexjs/prompts';

const result = await $_.select({
  message: 'Pick a color',
  name: 'color',
  choices: [
    { title: 'Red', value: '#ff0000' },
    { title: 'Green', value: '#008000' },
    { title: 'Blue', value: '#0000ff' },
    { title: 'White', value: '#ffffff' },
    { title: 'Black', value: '#000000' },
  ],
});
```

<img src="https://github.com/LexBorisoff/prompts/blob/demo/demo/select.gif?raw=true" alt="select prompt" width="500" />

### `text`

```typescript
import $_ from '@lexjs/prompts';

const result = await $_.text({
  message: 'What is your name?',
  name: 'value',
});
```

<img src="https://github.com/LexBorisoff/prompts/blob/demo/demo/text.gif?raw=true" alt="text prompt" width="500" />

### `toggle`

```typescript
import $_ from '@lexjs/prompts';

const result = await $_.toggle({
  message: 'Confirm?',
  name: 'value',
});
```

<img src="https://github.com/LexBorisoff/prompts/blob/demo/demo/toggle.gif?raw=true" alt="toggle prompt" width="500" />

## Credits

This library is a wrapper around the [prompts](https://www.npmjs.com/package/prompts) package.
