import Link from "next/link";

export default function Footer() {
    return (
        <footer className="text-neutral-500 pt-10 pb-4 px-4">
            <p className="text-center text-xs">&copy; 2023 Todos los derechos reservados. <Link href="/" className="text-indigo-600">Ibán López</Link></p>
        </footer>
    )
}