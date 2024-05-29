import Providers from "@/lib/Providers/Providers";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";


export const metadata: Metadata = {
  title: "Flat-Finder",
  description: "Welcome to Flat Finder, your ultimate destination for finding the perfect flat share! Our user-friendly platform connects you with a variety of available rooms and flatmates tailored to your preferences. Browse detailed listings, verified profiles, and community reviews to ensure a safe and comfortable living experience. Whether you're a student, professional, or simply seeking a new living arrangement, Flat Finder makes the search simple and stress-free. Start your journey to a new home with us today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <>
            <AppRouterCacheProvider>
              <Toaster position="top-center" />
              {children}
            </AppRouterCacheProvider>
          </>
        </body>
      </html>
    </Providers>
  );
}
