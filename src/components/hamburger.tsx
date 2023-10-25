'use client'

import { useState } from 'react'
import { Transition } from '@headlessui/react'
import NavLinks from "./nav-links";
import Bars3Icon from '@heroicons/react/24/outline/Bars3Icon'
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon'

const Hamburger = ({
    navlinks
}: { 
    navlinks: {
        id: number
        name: string
        href: string
        title: string
    }[] 
}) => {
    
    const [show, setShow] = useState<boolean>(false)

    const handleClick = (): void => {
        setShow(!show)
    }

    return (
        <>
            <button
                onClick={handleClick}
                className="flex-initial w-auto ml-auto bg-transparent mr-4"
                aria-haspopup="true"
                aria-controls="navList"
                aria-expanded={show}
            >
                <span className="sr-only">Menu web</span>
                {show ? (
                    <XMarkIcon className="w-8 stroke-2 stroke-white" />
                ) : (
                    <Bars3Icon className="w-8 stroke-2 stroke-white" />
                )}
            </button>
            <Transition
                className="flex-initial w-screen max-w-screen h-screen fixed z-50 top-[48px] bg-indigo-600"
                id="navList"
                show={show}
                enter="transition-transform ease-linear duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition-transform ease-linear duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
            >
                <NavLinks navlinks={navlinks} handleClick={handleClick} />
            </Transition>
        </>
    )
}

export default Hamburger