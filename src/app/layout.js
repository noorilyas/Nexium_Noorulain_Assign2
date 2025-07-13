import "./globals.css";
import { Toaster } from "sonner";

export const metadata = {
  title: "Nexium Blog Summariser",
  description: "AI-powered blog summary app by Noorulain Ilyas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
