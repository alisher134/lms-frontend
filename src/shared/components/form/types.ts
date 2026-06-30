import type { ComponentProps, JSX, JSXElementConstructor } from 'react';

export type FormUIProps<
  Element extends keyof JSX.IntrinsicElements | JSXElementConstructor<unknown>,
> = {
  label?: string;
  error?: string;
} & ComponentProps<Element>;
