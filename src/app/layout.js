"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Context from "../provider/provider";
import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import apiClient from "../../lib/apiclient";
import { loginUser } from "../../lib/mutations";

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const router = useRouter();

  useEffect(() => {
    loginUser()
  }, []);

  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <Context>
          <body className={`${inter.className} bg-white`}>{children}</body>
        </Context>
      </QueryClientProvider>
    </html>
  );
}
