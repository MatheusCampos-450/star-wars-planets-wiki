export function CardFallback() {
  return (
    <div className="px-sm py-xs bg-off-white flex w-full animate-pulse flex-col rounded-lg">
      <div className="pb-xxs border-gray90 gap-xxxs flex w-full items-center border-b border-solid">
        <div className="h-6 w-6 rounded-full bg-gray-300"></div>
        <div className="h-5 w-1/3 rounded bg-gray-300"></div>
      </div>
      <div className="pt-sm">
        <div className="h-4 w-3/4 rounded bg-gray-300"></div>
      </div>
    </div>
  );
}
