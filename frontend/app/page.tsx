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
    <div className="flex min-h-full flex-1 flex-col items-center justify-center bg-base-200 px-4 py-16 text-base-content">
      <main className="flex w-full max-w-lg flex-col items-stretch gap-6">
        <div>
          <h1 className="text-2xl font-semibold text-base-content">Insite</h1>
          <p className="mt-1 text-sm text-secondary">
            Feature flow: Next server → Nest controller → service (hardcoded
            user).
          </p>
        </div>
        {error ? (
          <p
            className="rounded-lg border border-error/30 bg-error/10 px-4 py-3 text-sm text-error"
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
