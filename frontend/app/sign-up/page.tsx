'use client';

import { useState } from 'react';
import { FieldRow } from '@/components/field-row';

const TOTAL_STEPS = 2;
const TOTAL_STEPS_PERCENT = 100;
const HALF_STEPS = 1;
const HALF_STEPS_PERCENT = 50;

export default function SignUpPage() {
  const [step, setStep] = useState(HALF_STEPS);

  const inputClassName =
    'input input-bordered w-full border-base-300 bg-base-100 text-sm text-base-content transition-[border-color,box-shadow] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20';

  const progressValue = step === HALF_STEPS ? HALF_STEPS_PERCENT : TOTAL_STEPS_PERCENT;

  return (
    <div className="flex min-h-full flex-1 flex-col items-center justify-center bg-base-200 px-4 py-12">
      <main className="w-full max-w-lg">
        <div className="card rounded-3xl border border-base-300/40 bg-base-100 shadow-xl">
          <div className="card-body gap-5 px-6 py-8 sm:gap-6 sm:px-10 sm:py-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-base-content sm:text-3xl">
                  Account Setup
                </h1>
                {step === HALF_STEPS ? (
                  <p className="mt-1 text-sm text-secondary">
                    Join Insite to get started.
                  </p>
                ) : null}
              </div>
              <span className="badge badge-ghost shrink-0 self-start border-base-300 bg-base-200/80 text-secondary sm:self-auto">
                Step {step} of {TOTAL_STEPS}
              </span>
            </div>

            <progress
              className="progress progress-primary h-2 w-full"
              value={progressValue}
              max={TOTAL_STEPS_PERCENT}
            />

            {step === HALF_STEPS ? (
              <>
                <fieldset className="fieldset flex flex-col gap-4 border-0 p-0">
                  <legend className="fieldset-legend sr-only">Your details</legend>

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
                      placeholder="e.g., Software Engineer, Teacher, etc."
                      autoComplete="off"
                    />
                  </FieldRow>

                  <FieldRow label="Annual income ($)">
                    <input
                      type="number"
                      name="income"
                      className={inputClassName}
                      placeholder="e.g., 65000"
                      min={0}
                      autoComplete="off"
                    />
                  </FieldRow>
                </fieldset>

                <button
                  type="button"
                  className="btn btn-primary btn-block font-semibold"
                  onClick={() => setStep(TOTAL_STEPS)}
                >
                  Next →
                </button>
              </>
            ) : (
              <>
                <div>
                  <h2 className="text-lg font-semibold text-base-content sm:text-xl">
                    How would you like to allocate your income?
                  </h2>
                  <p className="mt-1 text-sm text-secondary">
                    Enter a percentage for each category (static preview).
                  </p>
                </div>

                <fieldset className="fieldset flex flex-col gap-4 border-0 p-0">
                  <legend className="fieldset-legend sr-only">
                    Income allocation
                  </legend>

                  <FieldRow label="Spending">
                    <label className="input input-bordered flex w-full items-center gap-2 border-base-300 bg-base-100 transition-[border-color,box-shadow] focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
                      <input
                        type="number"
                        name="allocSpending"
                        className="grow border-0 bg-transparent text-sm text-base-content outline-none focus:outline-none"
                        placeholder="e.g., 25"
                        min={0}
                        max={TOTAL_STEPS_PERCENT}
                        autoComplete="off"
                      />
                      <span className="text-sm text-secondary">%</span>
                    </label>
                  </FieldRow>

                  <FieldRow label="Saving">
                    <label className="input input-bordered flex w-full items-center gap-2 border-base-300 bg-base-100 transition-[border-color,box-shadow] focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
                      <input
                        type="number"
                        name="allocSaving"
                        className="grow border-0 bg-transparent text-sm text-base-content outline-none focus:outline-none"
                        placeholder="e.g., 25"
                        min={0}
                        max={TOTAL_STEPS_PERCENT}
                        autoComplete="off"
                      />
                      <span className="text-sm text-secondary">%</span>
                    </label>
                  </FieldRow>

                  <FieldRow label="Bills and essentials">
                    <label className="input input-bordered flex w-full items-center gap-2 border-base-300 bg-base-100 transition-[border-color,box-shadow] focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
                      <input
                        type="number"
                        name="allocBills"
                        className="grow border-0 bg-transparent text-sm text-base-content outline-none focus:outline-none"
                        placeholder="e.g., 35"
                        min={0}
                        max={TOTAL_STEPS_PERCENT}
                        autoComplete="off"
                      />
                      <span className="text-sm text-secondary">%</span>
                    </label>
                  </FieldRow>

                  <FieldRow label="Miscellaneous">
                    <label className="input input-bordered flex w-full items-center gap-2 border-base-300 bg-base-100 transition-[border-color,box-shadow] focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
                      <input
                        type="number"
                        name="allocMisc"
                        className="grow border-0 bg-transparent text-sm text-base-content outline-none focus:outline-none"
                        placeholder="e.g., 15"
                        min={0}
                        max={TOTAL_STEPS_PERCENT}
                        autoComplete="off"
                      />
                      <span className="text-sm text-secondary">%</span>
                    </label>
                  </FieldRow>
                </fieldset>

                <div className="flex flex-col gap-2">
                  <button
                    type="button"
                    className="btn btn-primary btn-block font-semibold"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="btn btn-ghost btn-sm text-secondary"
                    onClick={() => setStep(HALF_STEPS)}
                  >
                    Back
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
