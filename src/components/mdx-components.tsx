import { MDXProvider } from '@mdx-js/react';

const components = {};

export function MdxWrapper({ children }: { children: React.ReactNode }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}
