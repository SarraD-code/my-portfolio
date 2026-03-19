"use client";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ResumePage() {
  const router = useRouter();
  useEffect(() => {
    // redirect(process.env.NEXT_PUBLIC_RESUME_LINK || "/");
    router.push(process.env.NEXT_PUBLIC_RESUME_LINK || "/"); 
  }, []);
  return <div>Redirecting to the resume...</div>;
}
