'use client';

import { FormspreeProvider } from '@formspree/react';
import React from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <FormspreeProvider>
      {children}
    </FormspreeProvider>
  );
} 