"use client"

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function SmoothScroll({children}) {
    useEffect(() => {
        window.scrollTo(0,0)

        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return children
}