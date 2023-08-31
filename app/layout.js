"use client";

import "./globals.css";
import { IdentityContextProvider } from "./lib/identityContext";
import { SocketContextProvider } from "./lib/socketContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Anon Chat</title>
        <meta
          name="description"
          content="An annonymous chat platform that connects individuals to converse"
        />
      </head>

      <body>
        <IdentityContextProvider>
          <SocketContextProvider>{children}</SocketContextProvider>
        </IdentityContextProvider>
      </body>
    </html>
  );
}
