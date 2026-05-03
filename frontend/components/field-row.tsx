import type { ReactNode } from 'react';

export type FieldRowProps = {
  label: string;
  children: ReactNode;
};

export function FieldRow({ label, children }: FieldRowProps) {
  return (
    <div className="flex w-full flex-col gap-1.5">
      <span className="text-sm font-medium text-secondary">{label}</span>
      {children}
    </div>
  );
}
