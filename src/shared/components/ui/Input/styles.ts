import { tv } from 'tailwind-variants';

export const inputStyles = tv({
  slots: {
    input:
      'font-lato font-regular flex w-full items-center justify-center border-none bg-none text-center outline-none focus-visible:outline-none',
    inputContainer:
      'px-sm flex h-[2.5rem] w-full items-center justify-center rounded-[.3125rem] bg-white',
  },
});
