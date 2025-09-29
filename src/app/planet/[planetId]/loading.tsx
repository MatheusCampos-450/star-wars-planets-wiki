import Spinner from '@/shared/components/ui/Spinner';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex h-full items-center justify-center bg-white/70 dark:bg-black/70">
      <Spinner />
    </div>
  );
}
