export default async function Nav() {
    return (
        <div className="container flex items-center">
            <div className="text-2xl font-bold before:content-['~/'] shell-prefix">kwerie</div>
            <div className="ml-auto flex items-center gap-4">
                <a href="#work" className="text-md">
                    Work
                </a>
                <a href="#projects" className="text-md">
                    Projects
                </a>
                <a href="#contact" className="text-md">
                    Contact
                </a>
            </div>
        </div>
    )
}
