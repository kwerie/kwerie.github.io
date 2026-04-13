import Nav from "./components/Nav";
import { ThemeToggle } from "./components/ThemeToggle";

export default function Home() {
    return (
        <div className="font-mono">
            <Nav />
            <ThemeToggle />
        </div>
    );
}
