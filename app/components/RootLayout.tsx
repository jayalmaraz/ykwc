import type { PropsWithChildren } from 'react';

function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex flex-col flex-auto w-full flex-grow max-w-[1440px] px-4 md:px-24 mt-8">{children}</div>
    </div>
  );
}

export { RootLayout };
