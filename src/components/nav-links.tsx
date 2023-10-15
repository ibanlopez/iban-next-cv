import Link from "next/link";

export default function NavLinks({
    navlinks
}: {
    navlinks: {
        id: number
        name: string
        href: string
        title: string
    }[]
}) {

    const links = navlinks.map(link => (
        <li key={link.id} className="text-white mb-8 font-light lg:mb-0 lg:font-normal lg:text-sm lg:text-slate-500">
            <Link href={link.href} title={link.title}>
                {link.name}
            </Link>
        </li>
    ))


    return (
        <ul className="grow flex flex-col pt-4 pl-10 pb-0 pr-4 lg:flex-row lg:p-0 lg:grow-0 lg:basis-3/5 lg:justify-between">
            {links}
        </ul>
    )
}