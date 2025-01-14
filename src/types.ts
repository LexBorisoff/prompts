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

export type BaseReturn<Name extends string = string> = Promise<{
  [K in Name]: string | undefined;
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

export type MultiSelectReturn<
  C extends Choice,
  Name extends string = string,
> = Promise<{
  [K in Name]: C['value'][] | undefined;
}>;

/* ~~~ TOGGLE ~~~  */
export interface ToggleConfig<Name extends string> extends BaseConfig<Name> {
  active?: string;
  inactive?: string;
  initial?: boolean;
}

export type ToggleReturn<Name extends string> = Promise<{
  [K in Name]: boolean | undefined;
}>;
