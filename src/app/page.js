import React from "react"
import dynamic from "next/dynamic"
import s from "./page.module.scss"
import SmoothScroll from "@/components/SmoothScroll";
import Projects from "@/components/Projects";

const Earth = dynamic(() => import('@/components/Earth'), {
  ssr: false,
  loading: () => <img src="/assets/placeholder.png" />
});

export default function Home() {
  return(
    <SmoothScroll>
      <div className={s.spacer}>
        <span>Scroll</span>
      </div>
      <main className={s.main}>
        <Earth />
        <Projects />
      </main>
      <div className={s.spacer}></div>
    </SmoothScroll>
  )
}