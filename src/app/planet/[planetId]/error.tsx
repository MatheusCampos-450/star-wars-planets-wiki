'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Starfleet Mission Critical Failure:', error);
    console.error('Failure Code Digest:', error.digest);
  }, [error]);

  return (
    <div className="p-md sm:px-xxl md:p-xl flex h-full w-full items-center justify-center">
      <div className="flex w-full max-w-[50rem] flex-col items-center justify-center">
        <div className="border-off-white rounded-lg border bg-white p-6 text-center shadow-md">
          <svg
            className="text-red mx-auto h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.3 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>

          <h2 className="mt-2 text-lg font-semibold text-red-800">
            **Critical Data Transmission Failure!**
          </h2>

          <p className="text-red mt-1 text-sm">
            Communication with the sensor dish has failed. We could not retrieve
            the records from the Starbase.
          </p>

          {process.env.NODE_ENV === 'development' && (
            <p className="text-red mt-2 text-xs italic">
              Detail (Dev Protocol): {error.message}
            </p>
          )}

          <button
            className="bg-red hover:bg-red mt-4 rounded-md px-4 py-2 font-medium text-white transition"
            onClick={() => reset()}
          >
            **Attempt a Hyperspace Jump** (Reload)
          </button>
        </div>
      </div>
    </div>
  );
}
