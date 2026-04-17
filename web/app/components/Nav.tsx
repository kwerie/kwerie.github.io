export default async function Nav() {
    return (
        <div className="container flex items-center py-4 border-b dark:border-zinc-700">
            <div className="text-3xl dark:text-zinc-50 font-bold before:content-['~/'] shell-prefix select-none">kwerie</div>
            <div className="ml-auto flex items-center gap-4 text-2xl">
                <a href="#work">
                    Work
                </a>
                <a href="#projects">
                    Projects
                </a>
                <a href="#contact">
                    Contact
                </a>
            </div>
        </div>
    )
}
