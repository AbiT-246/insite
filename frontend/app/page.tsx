import { fetchPlaceholderUser } from '@/features/users/api/fetchPlaceholderUser';
import { UserSummary } from '@/features/users/components/UserSummary';

export default async function Home() {
  let error: string | null = null;
  let user = null;
  try {
    user = await fetchPlaceholderUser();
  } catch (e) {
    error = e instanceof Error ? e.message : 'Unknown error';
  }

  return (
    <div className="flex min-h-full flex-1 flex-col items-center justify-center bg-zinc-50 px-4 py-16 dark:bg-black">
      <main className="flex w-full max-w-lg flex-col items-stretch gap-6">
        <div>
          <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            Insite
          </h1>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Feature flow: Next server → Nest controller → service (hardcoded user).
          </p>
        </div>
        {error ? (
          <p
            className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 dark:border-red-900 dark:bg-red-950 dark:text-red-200"
            role="alert"
          >
            {error}
          </p>
        ) : user ? (
          <UserSummary user={user} />
        ) : null}
      </main>
    </div>
  );
}
