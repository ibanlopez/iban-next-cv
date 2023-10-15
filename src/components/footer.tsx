import Link from "next/link";

export default function Footer() {
    return (
        <footer className="text-stone-400 pt-10 pb-4 px-4">
            <p className="text-center text-xs">&copy; 2023 Todos los derechos reservados. <Link href="#" className="text-indigo-500">Ibán López</Link></p>
        </footer>
    )
}