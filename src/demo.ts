/* eslint-disable no-console */
import $_ = require('./index');

const Demo = {
  autocomplete: 'autocomplete',
  autocompleteMultiselect: 'autocompleteMultiselect',
  confirm: 'confirm',
  date: 'date',
  invisible: 'invisible',
  list: 'list',
  multiselect: 'multiselect',
  number: 'number',
  password: 'password',
  select: 'select',
  text: 'text',
  toggle: 'toggle',
};

(async function demo(): Promise<void> {
  const currentDemo = Demo.autocomplete;

  switch (currentDemo) {
    case Demo.autocomplete: {
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
      console.log(result);
      break;
    }
    case Demo.autocompleteMultiselect: {
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
      console.log(result);
      break;
    }
    case Demo.confirm: {
      const result = await $_.confirm({
        message: 'Confirm?',
        name: 'value',
      });
      console.log(result);
      break;
    }
    case Demo.date: {
      const result = await $_.date({
        message: 'Enter a date',
        name: 'date',
      });
      console.log(result);
      break;
    }
    case Demo.invisible: {
      const result = await $_.invisible({
        message: 'Enter password',
        name: 'password',
      });
      console.log(result);
      break;
    }
    case Demo.list: {
      const result = await $_.list({
        message: 'Enter values',
        name: 'values',
        separator: ' ',
      });
      console.log(result);
      break;
    }
    case Demo.multiselect: {
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
      console.log(result);
      break;
    }
    case Demo.number: {
      const result = await $_.number({
        message: 'Enter a number between 10 and 100',
        name: 'number',
        min: 10,
        max: 100,
        initial: 0,
      });
      console.log(result);
      break;
    }
    case Demo.password: {
      const result = await $_.password({
        message: 'Enter password',
        name: 'password',
      });
      console.log(result);
      break;
    }
    case Demo.select: {
      const result = await $_.select({
        message: 'Pick a color',
        name: 'colors',
        choices: [
          { title: 'Red', value: '#ff0000' },
          { title: 'Green', value: '#008000' },
          { title: 'Blue', value: '#0000ff' },
          { title: 'White', value: '#ffffff' },
          { title: 'Black', value: '#000000' },
        ],
      });
      console.log(result);
      break;
    }
    case Demo.text: {
      const result = await $_.text({
        message: 'What is your name?',
        name: 'value',
      });
      console.log(result);
      break;
    }
    case Demo.toggle: {
      const result = await $_.toggle({
        message: 'Confirm?',
        name: 'value',
      });
      console.log(result);
      break;
    }
  }
})();
