

import { ThemeProvider } from "next-themes";

type ProviderProp = {
    children: React.ReactNode,
}

export function Provider({ children }: ProviderProp) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
}