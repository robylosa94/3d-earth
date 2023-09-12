import { useRef } from "react"
import s from "./style.module.scss"
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";

export default function Titles({data, setSelectedProject}) {
    return (
        <div className={s.titles}>
            {
                data.map((project, i) => {
                    return <Title key={i} data={{...project, i}} setSelectedProject={setSelectedProject} />
                })
            }
        </div>
    )
}

function Title ({data, setSelectedProject}) {
    const { title, speed, i } = data;
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', `${25 / speed}vw end`]
    })

    const clipProgress = useTransform(scrollYProgress, [0,1], [100, 0]);
    const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

    return (
        <div className={s.title} ref={container} onMouseOver={() => {setSelectedProject(i)}} onMouseLeave={() => {setSelectedProject(null)}}>
            <div>
                <motion.p style={{clipPath: clip}}>{title}</motion.p>
                <p>{title}</p>
            </div>
        </div>
    )
}