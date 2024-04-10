"use client"
import styles from "./page.module.css";
import About from "@/components/about/about";
import { useEffect, useRef, useState } from "react";
import Start from "@/components/start/start";

export default function Home() {
    return (
        <> 
            <Start/>   
            <About />        
        </>
  );
}
