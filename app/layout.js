import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";


const inter = Inter({subsets:["latin"]});

export const metadata = {
  title: "Care-Connect - Doctors Appointment Booking and Consultation App",
  description: "Connect and consult with your doctor anywhere at any time",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{theme:'simple'}}>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.className}`}
        >
          <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              {/* header */}
                <Header/>

                <main className="min-h-screen">{children}</main>

                <footer className="bg-muted/50 py-12">
                  <div className="container mx-auto px-4 text-center text-gray-200">
                    <p>Made by Kishore Nath with social responsibilities</p>
                  </div>
                </footer>

            </ThemeProvider>
        
          
        </body>
      </html>
    </ClerkProvider>
  );
}
