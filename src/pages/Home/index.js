import "./styles.css";

import { Aside } from "../../components/Aside";
import { ProjectCard } from "../../components/ProjectCard";
import { AiOutlineDownload } from "react-icons/ai";

export function Home() {
    return (
        <>
            <Aside />

            <main>
                <div className="pageLanding">
                    <div>
                        <h1>Fabio Alves Ramos</h1>
                        <h2>Desenvolvedor Front-End</h2>
                        <button>
                            <AiOutlineDownload size={18} />
                            Currículo
                        </button>
                    </div>
                </div>

                <div className="projectsContainer">
                    <h2 className="projectsHeading">Projetos</h2>

                    <div className="projects">
                        <ProjectCard />
                    </div>
                </div>

                <footer></footer>
            </main>
        </>
    );
}
