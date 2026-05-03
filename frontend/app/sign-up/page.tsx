import type { ReactNode } from 'react';

function FieldRow({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex w-full flex-col gap-1.5">
      <span className="text-sm font-medium text-secondary">{label}</span>
      {children}
    </div>
  );
}

export default function SignUpPage() {
  const inputClassName =
    'input input-bordered w-full border-base-300 bg-base-100 text-sm text-base-content transition-[border-color,box-shadow] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20';

  return (
    <div className="flex min-h-full flex-1 flex-col items-center justify-center bg-base-200 px-4 py-12">
      <main className="w-full max-w-lg">
        <div className="rounded-2xl border border-black/[0.06] bg-base-100 shadow-xl">
          <div className="flex flex-col gap-6 p-8 sm:p-10">
            <div className="text-center">
              <h1 className="text-2xl font-bold tracking-tight text-base-content">
                Create an account
              </h1>
              <p className="mt-2 text-sm text-secondary">
                Join Insite to get started.
              </p>
            </div>

            <fieldset className="fieldset flex flex-col gap-4 border-0 p-0">
              <legend className="fieldset-legend mb-1 w-full text-center text-base font-semibold text-base-content">
                Your details
              </legend>

              <FieldRow label="Name">
                <input
                  type="text"
                  name="name"
                  className={inputClassName}
                  placeholder="Full name"
                  autoComplete="off"
                />
              </FieldRow>

              <FieldRow label="Email">
                <input
                  type="email"
                  name="email"
                  className={inputClassName}
                  placeholder="you@example.com"
                  autoComplete="off"
                />
              </FieldRow>

              <FieldRow label="Password">
                <input
                  type="password"
                  name="password"
                  className={inputClassName}
                  placeholder="••••••••"
                  autoComplete="off"
                />
              </FieldRow>

              <FieldRow label="Confirm">
                <input
                  type="password"
                  name="confirmPassword"
                  className={inputClassName}
                  placeholder="Repeat password"
                  autoComplete="off"
                />
              </FieldRow>

              <FieldRow label="Age">
                <input
                  type="number"
                  name="age"
                  className={inputClassName}
                  placeholder="e.g. 28"
                  min={0}
                  autoComplete="off"
                />
              </FieldRow>

              <FieldRow label="City">
                <input
                  type="text"
                  name="city"
                  className={inputClassName}
                  placeholder="Where you live"
                  autoComplete="off"
                />
              </FieldRow>

              <FieldRow label="Occupation">
                <input
                  type="text"
                  name="occupation"
                  className={inputClassName}
                  placeholder="Job title or role"
                  autoComplete="off"
                />
              </FieldRow>

              <FieldRow label="Income">
                <input
                  type="number"
                  name="income"
                  className={inputClassName}
                  placeholder="Annual amount"
                  min={0}
                  autoComplete="off"
                />
              </FieldRow>
            </fieldset>

            <div className="flex flex-col gap-3">
              <button
                type="button"
                className="btn btn-primary btn-block font-semibold"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
