import React from "react"
import s from "./style.module.scss"

export default function Descriptions({data, selectedProject}) {
    const crop = (string, maxLength) => {
        return string.substring(0, maxLength);
    }

    return (
        <div className={s.descriptions}>
            {
                data.map((project, i) => {
                    const {title, description } = project
                    return(
                        <div key={i} className={s.description} style={{ clipPath: selectedProject == i ? "inset(0 0 0)" : "inset(50% 0 50%)" }}>
                            <p>{crop(title, 8)}</p>
                            <p>{description}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}