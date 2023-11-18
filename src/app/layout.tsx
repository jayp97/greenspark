import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";

const cabin = Cabin({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Greenspark",
  description: "Imapct-as-as-service",
  icons: {
    icon: "/favicon.ico",
  },
  creator: "Jay Pinion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          cabin.className,
          "max-w-[851px] mx-auto h-screen flex items-center justify-center"
        )}
      >
        <TooltipProvider delayDuration={200}>{children}</TooltipProvider>
      </body>
    </html>
  );
}
