import Image from "next/image";
import Navbar from "./(routes)/_components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function HomePage() {
    return (
        <div className="">
            <nav className="flex flex-col">
                <Navbar/>
            </nav>
            <header className="flex max-md:flex-col xl:flex-row gap-20 py-16 px-20 ">
                <div className="w-full">
                    <h1 className="font-bold text-6xl tracking-tighter text-slate-800">
                        Learning Today,<br/>
                        Leading Tommorow
                    </h1>
                    <p className="text-zinc-600 mt-8">
                        Experience an innovative education platform where students can access a diverse range of video courses tailored to their learning needs. 
                        With seamless navigation and intuitive design, our platform offers a dynamic learning environment.
                    </p>
                    <Button
                        variant="success"
                        className="mt-6"
                    >
                        <Link
                            href="/dashboard"
                        >
                            Start Learning
                        </Link>
                    </Button>
                </div>
                <Image
                    src="/hero.jpg"
                    alt="Hero"
                    className="w-full"
                    height={250}
                    width={300}
                />
            </header>
        </div>
    );
}

export default HomePage;