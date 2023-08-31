"use client"

import "./globals.css";
import { IdentityContextProvider } from "./lib/identityContext";



export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full w-full scroll-smooth antialiased">
     <head>
        <title>Anon Chat</title>
        <meta name='description' content='An annonymous chat platform that connects individuals to converse' />
      </head>
     
      <body>
        <IdentityContextProvider>{children}</IdentityContextProvider>
      </body>
    </html>
  );
}
