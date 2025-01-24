import $_ = require('../lib');

import type { Choice, Options } from '../lib';
import type {
  BaseConfig,
  BaseReturn,
  MultiSelectReturn,
  NumberReturn,
  SelectConfig,
  SelectReturn,
  ToggleConfig,
  ToggleReturn,
} from './types';

const prompts = {
  async text<Name extends string = string>(
    config: BaseConfig<Name>,
    options?: Options,
  ): BaseReturn<Name> {
    return await $_({ ...config, type: 'text' }, options);
  },

  async select<C extends Choice, Name extends string = string>(
    config: SelectConfig<C, Name>,
    options?: Options,
  ): SelectReturn<C, Name> {
    return await $_({ ...config, type: 'select' }, options);
  },

  async multiselect<C extends Choice, Name extends string = string>(
    config: SelectConfig<C, Name>,
    options?: Options,
  ): MultiSelectReturn<C, Name> {
    return await $_({ ...config, type: 'multiselect' }, options);
  },

  async autocomplete<C extends Choice, Name extends string = string>(
    config: SelectConfig<C, Name>,
    options?: Options,
  ): SelectReturn<C, Name> {
    return await $_({ ...config, type: 'autocomplete' }, options);
  },

  async autocompleteMultiselect<C extends Choice, Name extends string = string>(
    config: SelectConfig<C, Name>,
    options?: Options,
  ): MultiSelectReturn<C, Name> {
    return await $_({ ...config, type: 'autocompleteMultiselect' }, options);
  },

  async toggle<Name extends string>(
    {
      active = 'yes',
      inactive = 'no',
      initial = false,
      ...config
    }: ToggleConfig<Name>,
    options?: Options,
  ): ToggleReturn<Name> {
    return await $_(
      {
        ...config,
        type: 'toggle',
        initial,
        active,
        inactive,
      },
      options,
    );
  },

  async confirm<Name extends string = string>(
    config: BaseConfig<Name>,
    options?: Options,
  ): BaseReturn<Name> {
    return await $_({ ...config, type: 'confirm' }, options);
  },

  async password<Name extends string = string>(
    config: BaseConfig<Name>,
    options?: Options,
  ): BaseReturn<Name> {
    return await $_({ ...config, type: 'password' }, options);
  },

  async invisible<Name extends string = string>(
    config: BaseConfig<Name>,
    options?: Options,
  ): BaseReturn<Name> {
    return await $_({ ...config, type: 'invisible' }, options);
  },

  async number<Name extends string = string>(
    config: BaseConfig<Name>,
    options?: Options,
  ): NumberReturn<Name> {
    return await $_(
      {
        validate(input) {
          return typeof input === 'number' || 'Enter a valid number';
        },
        ...config,
        type: 'number',
        format(input) {
          return Number(input);
        },
      },
      options,
    );
  },

  async list<Name extends string = string>(
    config: BaseConfig<Name>,
    options?: Options,
  ): BaseReturn<Name> {
    return await $_({ ...config, type: 'list' }, options);
  },

  async date<Name extends string = string>(
    config: BaseConfig<Name>,
    options?: Options,
  ): BaseReturn<Name> {
    return await $_({ ...config, type: 'date' }, options);
  },
};

export = prompts;
