import { type HTMLAttributes } from 'react';
import { type VariantProps } from 'tailwind-variants';

import { typography } from './styles';

type TypographyVariants = VariantProps<typeof typography>;

type AllowedTags = TypographyVariants['variant'];

type TypographyProps = HTMLAttributes<HTMLElement> &
  TypographyVariants & {
    as?: AllowedTags;
  };

export function Typography({
  as: Component = 'p',
  variant,
  fontFamily,
  className,
  ...props
}: TypographyProps) {
  return (
    <Component
      {...props}
      className={typography({
        variant: variant || Component,
        fontFamily,
        className,
      })}
    />
  );
}
