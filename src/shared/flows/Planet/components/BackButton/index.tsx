'use client';

import ChevronLeftIcon from '@/shared/components/ui/Icons/ChevronLeftIcon';
import { Typography } from '@/shared/components/ui/Typography';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  const handleClick = () => router.back();

  return (
    <button
      className="gap-xs ml-auto flex cursor-pointer items-center justify-center pt-[6.75rem]"
      onClick={handleClick}
      type="button"
    >
      <ChevronLeftIcon />

      <Typography
        as="p"
        className="font-medium text-white"
        fontFamily="montserrat"
      >
        Back
      </Typography>
    </button>
  );
}
