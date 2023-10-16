'use client'

import Link from "next/link";
import { FC } from "react";

interface NavLinksProps {
    handleClick?: () => {} | null | undefined;
    navlinks: {
        id: number;
        name: string;
        href: string;
        title: string;
    }[];
 }

const NavLinks: FC<NavLinksProps> = ({ navlinks, handleClick}) => {

    const links = navlinks.map(link => {
        if (handleClick) {
            return (
                <li 
                    key={link.id} 
                    className="text-white mb-8 font-light lg:mb-0 lg:font-normal lg:text-base lg:text-neutral-600"
                    onClick={() => handleClick()}
                >
                    <Link href={link.href} title={link.title}>
                        {link.name}
                    </Link>
                </li>
            )
        } else {
            return (
                <li 
                    key={link.id} 
                    className="text-white mb-8 font-light lg:mb-0 lg:font-normal lg:text-base lg:text-neutral-600"
                >
                    <Link href={link.href} title={link.title}>
                        {link.name}
                    </Link>
                </li>
            )
        }
        
    })


    return (
        <ul className="grow flex flex-col pt-4 pl-10 pb-0 pr-4 lg:flex-row lg:p-0 lg:grow-0 lg:basis-3/5 lg:justify-between">
            {links}
        </ul>
    )
}

export default NavLinks