'use client'

import { useState } from 'react'
import { Transition } from '@headlessui/react'
import Bars3Icon from '@heroicons/react/24/outline/Bars3Icon'
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon'

const Hamburger = ({ children }: { children: React.ReactNode }) => {
    const [show, setShow] = useState(false)

    const handleClick = () => {
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
                <span className="sr-only">Menu</span>
                {show ? (
                    <XMarkIcon className="w-8 stroke-2 stroke-white" />
                ) : (
                    <Bars3Icon className="w-8 stroke-2 stroke-white" />
                )}
            </button>
            <Transition
                className="flex-initial w-screen max-w-screen h-screen fixed top-[48px] bg-indigo-500"
                id="navList"
                show={show}
                enter="transition-transform ease-linear duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition-transform ease-linear duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
            >
                {children}
            </Transition>
        </>
    )
}

export default Hamburger