'use client';

import * as React from 'react';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/packages/ui-library/dist/react';
import { CodeBlock } from './CodeBlock';

type ComponentExampleProps = {
  preview: React.ReactNode;
  code: any;
};

export function ComponentExample({
  preview,
  code,
}: ComponentExampleProps) {
  return (
    <Tabs defaultValue="preview">
      {/* Tabs FUERA de la card */}
      <TabsList className="mb-4 justify-start w-37">
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>

      {/* Preview */}
      <TabsContent value="preview">
        <div className="rounded-xl border bg-background p-6 border-gray-200">
          <div className="flex justify-center gap-4">
            {preview}
          </div>
        </div>
      </TabsContent>

      {/* Code */}
      <TabsContent value="code">
        <CodeBlock code={code} />
      </TabsContent>
    </Tabs>
  );
}
