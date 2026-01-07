'use client';

import * as React from 'react';

type ContentCardsProps = {
  title: string;
  children: React.ReactNode;
};

export function ContentCards({
  title,
  children,
}: ContentCardsProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-medium">{title}</h2>
      {children}
    </section>
  );
}
