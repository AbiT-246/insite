import type { PublicUser } from '../types';

type Props = { user: PublicUser };

export function UserSummary({ user }: Props) {
  return (
    <section className="w-full max-w-md rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <p className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
        User profile (MongoDB)
      </p>
      <h2 className="mt-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        {user.name}
      </h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">{user.email}</p>
      <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
        <dt className="text-zinc-500 dark:text-zinc-400">Age</dt>
        <dd className="font-medium text-zinc-900 dark:text-zinc-100">{user.age}</dd>
        <dt className="text-zinc-500 dark:text-zinc-400">City</dt>
        <dd className="font-medium text-zinc-900 dark:text-zinc-100">{user.city}</dd>
        <dt className="text-zinc-500 dark:text-zinc-400">Occupation</dt>
        <dd className="font-medium text-zinc-900 dark:text-zinc-100">{user.occupation}</dd>
        <dt className="text-zinc-500 dark:text-zinc-400">Income</dt>
        <dd className="font-medium text-zinc-900 dark:text-zinc-100">
          ${user.income.toLocaleString()}
        </dd>
        <dt className="text-zinc-500 dark:text-zinc-400">Score</dt>
        <dd className="font-medium text-zinc-900 dark:text-zinc-100">{user.score}</dd>
        {user.savingTypeId ? (
          <>
            <dt className="text-zinc-500 dark:text-zinc-400">Saving type</dt>
            <dd className="truncate font-mono text-xs text-zinc-700 dark:text-zinc-300">
              {user.savingTypeId}
            </dd>
          </>
        ) : null}
      </dl>
    </section>
  );
}
