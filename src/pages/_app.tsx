import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@material-tailwind/react";
import { AppContextProvider } from "@/components/appContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppContextProvider>
  );
}
