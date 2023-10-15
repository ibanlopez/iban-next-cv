export default function SectionHeading({ heading }: { heading: string }) {
    return (
        <div className="bg-indigo-500 w-full h-full p-6 bg-header-bg bg-no-repeat bg-center bg-cover lg:py-10 lg:px-12">
            <div className="text-white text-center">
                <h1 className="text-4xl lg:text-5xl font-bold">{heading}</h1>
            </div>
        </div>
    )
}