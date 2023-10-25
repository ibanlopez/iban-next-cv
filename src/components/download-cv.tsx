export default function DownloadCv({ mx }: { mx: boolean}) {

    let styles = mx ? "block w-[150px] text-center text-sm text-white mx-auto mb-10 py-2 px-4 rounded-full border-0 font-semibold bg-indigo-600 hover:bg-violet-100 hover:text-indigo-600 transition-all duration-300" : "inline-block w-[150px] text-center text-sm text-white mr-4 mb-6 py-2 px-4 rounded-full border-0 font-semibold bg-indigo-600 hover:bg-violet-100 hover:text-indigo-600 transition-all duration-300 md:mb-0"

    return (
        <a 
            className={styles}
            href={'/files/cv-iban-lopez.pdf'}
            title="Descargar CV"
        >
            Descargar CV
        </a>
    )
}