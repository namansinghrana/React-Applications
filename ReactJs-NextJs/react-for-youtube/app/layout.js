"use client"
import "./globals.css";
import { Header } from "@/Components/Header";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [user, setuser] = useState("Naman")

  return (
    <html lang="en">
      <body>
        <Header logo={user}/>
        {children}
      </body>
    </html>
  );
}
