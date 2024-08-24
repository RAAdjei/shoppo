'use client'
import HomePage from "@/components/General/HomePage";
import { SessionProvider } from "next-auth/react";
import React from "react";

const Home: React.FC = () => {
  return (
    <div>
      <SessionProvider>
        <HomePage/>
      </SessionProvider>
    </div>
  );
};

export default Home;
