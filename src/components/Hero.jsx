import bgimage from '../assets/men-and-women-shop.webp'

const Hero = () => {
    return (
        <section className="relative px-auto pt-64 h-screen overflow-hidden">
            <img
                alt="Hero Section Image"
                className="w-full h-full object-cover md:h-auto absolute inset-0 -z-2 brightness-90"
                src={bgimage}
                style={{ filter: 'blur(0px) brightness(0.9)' }}
            />

            <div className="flex flex-col justify-end text-white">
                <h1
                    className="text-5xl md:text-[64px]/18 font-bold tracking-tighter"
                    style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}
                >
                    Big Deals. <br />
                    Bigger Savings.
                </h1>

                <p
                    className="text-base/7 max-w-md mt-4"
                    style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}
                >
                    Discover premium products at unbeatable prices curated for quality,
                    comfort and style.
                </p>

                <div className="flex items-center gap-2 font-medium mt-4">
                    <a
                        href="#"
                        className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors"
                        style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}
                    >
                        Get Started
                    </a>

                    <a
                        href="#"
                        className="px-6 py-3 border border-white/30 bg-white/3 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-colors"
                        style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}
                    >
                        See Demo
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero