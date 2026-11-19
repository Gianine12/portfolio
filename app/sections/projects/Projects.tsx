
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const projects = [
    { id: 1, title: "Projeto 01", url: "#" },
    { id: 2, title: "Projeto 02", url: "#" },
    { id: 3, title: "Projeto 03", url: "#" },
    { id: 4, title: "Projeto 04", url: "#" },
    { id: 5, title: "Projeto 05", url: "#" },
];

export function Projects() {
    const { t } = useTranslation();

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const maxIndex = projects.length - 2;

    useEffect(() => {
        if (isPaused || maxIndex <= 0) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev >= maxIndex ? 0 : prev + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [isPaused, maxIndex]);

    return (
        <section id="projects">
            <div className="m-4 ml-48">
                <div className="border-2 mb-4 border-gold-dark text-gold-light w-42 text-center rounded-xl">
                    <p>{t("projects.greeting")}</p>
                </div>

                <div className="text-4xl font-semibold border-b-2 border-gold-dark w-fit">
                    <p>{t("projects.title")}</p>
                </div>

                {/* Carousel */}
                <div
                    className="mt-8 overflow-hidden"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{
                            width: `${(projects.length / 3) * 100}%`,
                            transform: `translateX(-${currentIndex * (100 / projects.length)}%)`
                        }}
                    >
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="ml-5"
                            >
                                <div className="border-4 border-double border-gold-dark w-160 h-80">
                                    <a
                                        href={project.url}
                                        className="ml-4 text-gold font-bold text-2xl cursor-pointer"
                                    >
                                        {project.title}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
