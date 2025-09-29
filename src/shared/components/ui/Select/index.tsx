'use client';

import { useEffect, useRef, useState } from 'react';

import ChevronBottom from '../Icons/ChevronBottom';
import { SelectProps } from './tyles';

export default function Select({
  onSelect,
  options,
  label,
  selectedOption,
}: SelectProps) {
  const [isOpenState, setIsOpenState] = useState(false);

  const selectRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => setIsOpenState(true);
  const handleClose = () => setIsOpenState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    if (isOpenState) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpenState]);

  return (
    <div ref={selectRef} className="relative flex flex-col items-center">
      <button
        className="gap-xxxs font-lato flex cursor-pointer items-center justify-center text-white"
        onClick={handleOpen}
      >
        <ChevronBottom />

        {selectedOption?.label || label}
      </button>

      {isOpenState && (
        <div className="mt-xxxs absolute top-full bg-white">
          {options.map((option) => (
            <button
              key={option.id}
              className="px-xxxs font-lato w-full cursor-pointer bg-white py-[.125rem] text-black hover:font-medium"
              onClick={() => {
                onSelect(option);
                handleClose();
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
