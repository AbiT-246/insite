import type { PublicUser } from '../types';

type Props = { user: PublicUser };

export function UserSummary({ user }: Props) {
  return (
    <section className="w-full max-w-md rounded-xl border border-base-300 bg-base-100 p-6 shadow-sm">
      <p className="text-xs font-medium uppercase tracking-wide text-secondary">
        User profile (MongoDB)
      </p>
      <h2 className="mt-2 text-2xl font-semibold text-base-content">{user.name}</h2>
      <p className="text-sm text-secondary">{user.email}</p>
      <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
        <dt className="text-secondary">Age</dt>
        <dd className="font-medium text-base-content">{user.age}</dd>
        <dt className="text-secondary">City</dt>
        <dd className="font-medium text-base-content">{user.city}</dd>
        <dt className="text-secondary">Occupation</dt>
        <dd className="font-medium text-base-content">{user.occupation}</dd>
        <dt className="text-secondary">Income</dt>
        <dd className="font-medium text-base-content">
          ${user.income.toLocaleString()}
        </dd>
        <dt className="text-secondary">Score</dt>
        <dd className="font-medium text-base-content">{user.score}</dd>
        {user.savingTypeId ? (
          <>
            <dt className="text-secondary">Saving type</dt>
            <dd className="truncate font-mono text-xs text-base-content/80">
              {user.savingTypeId}
            </dd>
          </>
        ) : null}
      </dl>
    </section>
  );
}
