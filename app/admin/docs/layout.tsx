"use client";

import { AdminNavbar } from "@/components/Navbar";
import { ReactNode } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { Footer } from "@/components/Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const router = useRouter();
  if (user === null) {
    router.push("/admin/login");
  }
  return (
    <>
      <div className="h-screen flex flex-col">
        <AdminNavbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
