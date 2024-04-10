"use client"
import styles from "./page.module.css";
import About from "@/components/about/about";
import { useEffect, useRef, useState } from "react";
import Start from "@/components/start/start";

export default function Home() {
    const articleRefs = useRef([]);

    useEffect(() => {
        document.addEventListener("DOMContentLoaded", function() {
            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  entry.target.classList.add('article-visible');
                } else {
                  entry.target.classList.remove('article-visible');
                }
              });
            }, {
              rootMargin: '0px',
              threshold: 0.1
            });
          
            document.querySelectorAll('article').forEach(article => {
              observer.observe(article);
            });
          });
    }, []);

    const setRef = (ref:never) => {
        if (ref) {
            articleRefs.current.push(ref);
        }
    };

    return (
        <>  
            <article >
                <Start/>
            </article>
            <article >
                <Start/>
            </article>
            <article >
                <About/>
            </article>
            <article >
                <About/>
            </article>
        </>
  );
}
