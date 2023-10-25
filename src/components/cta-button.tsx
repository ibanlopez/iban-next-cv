'use client'

import Link from "next/link"
import { MouseEvent, useState } from "react"

type HandleMouseEvent = (e: MouseEvent) => void;

export default function CtaButton({ mx, text, hoverText }: { mx: boolean, text: string, hoverText: string | undefined }) {

    let styles = mx ? "block w-[150px] text-center text-sm text-white mx-auto mb-10 py-2 px-4 rounded-full border-0 font-semibold bg-indigo-600 hover:bg-violet-100 hover:text-indigo-600 transition-all duration-300" : "inline-block w-[150px] text-center text-sm text-white mr-4 mb-6 py-2 px-4 rounded-full border-0 font-semibold bg-indigo-600 hover:bg-violet-100 hover:text-indigo-600 transition-all duration-300 md:mb-0"

    const [textButton, setTextButton] = useState<string>(text)

    const handleMouseEnter: HandleMouseEvent = (e) => {
        e.preventDefault()

        if (e && hoverText) {
            let timer: ReturnType<typeof setTimeout> = setTimeout(() => {
                setTextButton(hoverText)
            }, 100)
        }
    }
    const handleMouseLeave: HandleMouseEvent = (e) => {
        e.preventDefault()

        if (e) {
            let timer: ReturnType<typeof setTimeout> = setTimeout(() => {
                setTextButton(text)
            }, 100)
            
        }
    }

    return (
        <Link 
            className={styles}
            href={'/'}
            title="Contáctame"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {textButton}
        </Link>
    )
}