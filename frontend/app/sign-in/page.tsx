import Link from 'next/link';
import { FieldRow } from '@/components/field-row';

const inputClassName =
  'input input-bordered w-full border-base-300 bg-base-100 text-sm text-base-content transition-[border-color,box-shadow] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20';

export default function SignInPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center justify-center bg-base-200 px-4 py-12">
      <main className="w-full max-w-md">
        <div className="card rounded-3xl border border-base-300/40 bg-base-100 shadow-xl">
          <div className="card-body gap-6 px-8 py-10 sm:px-10">
            <header className="text-center">
              <h1 className="text-2xl font-bold tracking-tight text-base-content sm:text-3xl">
                Insite
              </h1>
              <p className="mt-1 text-base font-medium text-base-content">
                Welcome Back
              </p>
            </header>

            <div className="flex w-full flex-col gap-4">
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
            </div>

            <button
              type="button"
              className="btn btn-primary btn-block font-semibold"
            >
              Sign In
            </button>

            <p className="text-center text-sm text-secondary">
              Don&apos;t have an account?{' '}
              <Link href="/sign-up" className="link link-primary font-semibold">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
