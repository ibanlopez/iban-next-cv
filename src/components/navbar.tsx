import { promises as fs } from 'fs'
import MediaRendering from "./media-rendering";
import Logo from "./logo";
import Hamburger from "./hamburger";
import NavLinks from './nav-links';

export default async function Navbar() {

    const fileNavigationData = await fs.readFile(process.cwd() + '/src/lib/data/navigation.json', 'utf-8');
    const data: Navigation = JSON.parse(fileNavigationData)

    return (
        <nav className="relative w-full bg-transparent py-2 flex flex-row items-center lg:justify-between lg:px-4 lg:py-6 lg:max-w-5xl lg:mx-auto">
            <Logo {...data.logo} />
            <MediaRendering minWidth={null} maxWidth="1023px">
                <Hamburger navlinks={data.navlinks} />
            </MediaRendering>
            <MediaRendering minWidth="1024px" maxWidth={null}>
                <NavLinks navlinks={data.navlinks} />
            </MediaRendering>
        </nav>
    )
}