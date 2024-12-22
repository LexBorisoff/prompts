import type { Choice, PromptObject } from '../lib/index';

export type OmitKey<T extends object, K extends keyof T> = Pick<
  T,
  Exclude<keyof T, K>
>;

export type BaseConfig<Name extends string = string> = OmitKey<
  PromptObject<Name>,
  'type'
> &
  Required<Pick<PromptObject<Name>, 'message'>>;

/* ~~~ AUTOCOMPLETE ~~~  */
export interface AutocompleteConfig<
  C extends Choice,
  Name extends string = string,
> extends BaseConfig<Name> {
  choices: C[];
}

export type AutocompleteReturn<
  C extends Choice,
  Name extends string = string,
> = Promise<{
  [K in Name]: C['value'] | undefined;
}>;

/* ~~~ SELECT ~~~  */
export interface SelectConfig<C extends Choice, Name extends string = string>
  extends BaseConfig<Name> {
  choices: C[];
}

export type SelectReturn<
  C extends Choice,
  Name extends string = string,
> = Promise<{
  [K in Name]: C['value'] | undefined;
}>;

/* ~~~ MULTISELECT ~~~  */
export interface MultiSelectConfig<
  C extends Choice,
  Name extends string = string,
> extends BaseConfig<Name> {
  choices: C[];
}

export type MultiSelectReturn<
  C extends Choice,
  Name extends string = string,
> = Promise<{
  [K in Name]: C['value'][] | undefined;
}>;

/* ~~~ TEXT ~~~  */
export type TextConfig<Name extends string> = BaseConfig<Name>;

export type TextReturn<Name extends string> = Promise<{
  [K in Name]: string | undefined;
}>;

/* ~~~ TOGGLE ~~~  */
export interface ToggleOptions<Name extends string> extends BaseConfig<Name> {
  active?: string;
  inactive?: string;
  initial?: boolean;
}

export type ToggleReturn<Name extends string> = Promise<{
  [K in Name]: boolean | undefined;
}>;
