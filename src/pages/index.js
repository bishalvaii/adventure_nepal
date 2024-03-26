"use client"
import Image from "next/image";
import styles from "../app/page.module.css"
import SignupPage from "@/components/SignUpPage";
import LoginPage from "@/components/LoginPage";
import Dashboard from "./dashboard";


export default function HomePage() {
  return (
   <div>
     <Dashboard />
   </div>
     
  );
}
