import "./styles.scss";

import { Header } from "../../components/Header";
import { Aside } from "../../components/Aside";
import { ProjectCard } from "../../components/ProjectCard";
import { AiOutlineDownload } from "react-icons/ai";

import resumePDF from "../../assets/Curriculo - Fabio Alves Ramos.pdf";

export function Home() {
    return (
        <>
            <Header />
            <Aside />

            <main>
                <div className="pageLanding">
                    <div>
                        <div class="content">
                            <div class="content__container">
                                <p class="content__container__text">Fabio</p>

                                <ul class="content__container__list">
                                    <li class="content__container__list__item">
                                        Alves
                                    </li>
                                    <li class="content__container__list__item">
                                        Ramos
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <h2>Desenvolvedor Front-End</h2>
                        <a href={resumePDF} download>
                            <AiOutlineDownload size={30} />
                            Currículo
                        </a>
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
