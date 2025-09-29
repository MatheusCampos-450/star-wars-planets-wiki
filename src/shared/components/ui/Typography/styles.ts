import { tv } from 'tailwind-variants';

export const typography = tv({
  variants: {
    variant: {
      h1: 'text-[2rem] font-semibold',
      h2: 'text-md font-regular sm:text-lg',
      h3: 'text-md font-extrabold',
      h4: 'text-xxxs font-regular sm:text-sm',
      p: 'text-[.875rem] font-normal',
      strong: 'text-[.875rem] font-bold',
    },
    fontFamily: {
      lato: 'font-lato',
      inter: 'font-inter',
      montserrat: 'font-montserrat',
    },
  },
  defaultVariants: {
    variant: 'p',
    fontFamily: 'inter',
  },
});
