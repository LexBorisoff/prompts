import $_ = require('../lib');

import type { Choice, Options } from '../lib';
import type {
  AutocompleteConfig,
  AutocompleteReturn,
  MultiSelectConfig,
  MultiSelectReturn,
  SelectConfig,
  SelectReturn,
  TextConfig,
  TextReturn,
  ToggleOptions,
  ToggleReturn,
} from './types';

const prompts = {
  async autocomplete<C extends Choice, Name extends string = string>(
    config: AutocompleteConfig<C, Name>,
    options?: Options,
  ): AutocompleteReturn<C, Name> {
    return await $_({ ...config, type: 'autocomplete' }, options);
  },

  async select<C extends Choice, Name extends string = string>(
    config: SelectConfig<C, Name>,
    options?: Options,
  ): SelectReturn<C, Name> {
    return await $_({ ...config, type: 'select' }, options);
  },

  async multiselect<C extends Choice, Name extends string = string>(
    config: MultiSelectConfig<C, Name>,
    options?: Options,
  ): MultiSelectReturn<C, Name> {
    return await $_({ ...config, type: 'multiselect' }, options);
  },

  async text<Name extends string = string>(
    config: TextConfig<Name>,
    options?: Options,
  ): TextReturn<Name> {
    return await $_({ ...config, type: 'text' }, options);
  },

  async toggle<Name extends string>(
    {
      active = 'yes',
      inactive = 'no',
      initial = false,
      ...config
    }: ToggleOptions<Name>,
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
};

export = prompts;
