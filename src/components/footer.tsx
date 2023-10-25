import Link from "next/link";

export default function Footer() {
    return (
        <footer className="text-neutral-700 pt-10 pb-4 px-4">
            <p className="text-center text-xs font-semibold">&copy; 2023 Todos los derechos reservados. <Link href="/" className="text-indigo-600 underline">Ibán López</Link></p>
        </footer>
    )
}