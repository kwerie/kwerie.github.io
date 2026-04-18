import { Nav } from "./components/Nav";
import { Socials } from "./components/Socials/Socials";

export default function Home() {
    return (
        <div className="font-mono relative container">
            <Nav />

            <div className="hidden md:inline-block sticky top-30 -translate-x-10 translate-y-1/2">
                <Socials className="flex-col" />
            </div>
        </div>
    );
}
