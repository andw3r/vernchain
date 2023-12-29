"use client";
import "./globals.css";
import ClashDisplay from "./fonts";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import clsx from "clsx";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const setLoadingTime = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsLoading(false);
    };

    setLoadingTime();
  }, []);

  return (
    <html lang="en" className={ClashDisplay.className}>
      <body
        className={clsx(
          "bg-black relative overflow-x-hidden",
          isLoading ? "overflow-y-hidden" : ""
        )}
      >
        {/* {isLoading ? (
          <Loader />
        ) : (
          <>
            <NavBar />
            {children}
          </>
        )} */}

        <>
          <NavBar />
          {children}
        </>
      </body>
    </html>
  );
}
