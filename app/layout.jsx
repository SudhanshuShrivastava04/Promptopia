import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";

export const metadata = {
  title: "Promptopia",
  description: "A platform to share prompts for AI",
};

import React from "react";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <Providers>
        <body>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Navbar />
            {children}
          </main>
        </body>
      </Providers>
    </html>
  );
};

export default RootLayout;
