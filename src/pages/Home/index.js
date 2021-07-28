import "./styles.scss";

import { Header } from "../../components/Header";
import { Aside } from "../../components/Aside";
import { ProjectCard } from "../../components/ProjectCard";
import { AiOutlineDownload } from "react-icons/ai";

import resumePDF from "../../assets/Curriculo - Fabio Alves Ramos.pdf";
import letmeaskImg from "../../assets/letmeask.png";
import podcastrImg from "../../assets/podcastr.png";

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
                        <ProjectCard
                            projectImg={letmeaskImg}
                            projectTitle="Letmeask"
                        />
                        <ProjectCard
                            projectImg={podcastrImg}
                            projectTitle="Podcastr"
                        />
                    </div>
                </div>

                <div className="technologies">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        width="4rem"
                        height="4rem"
                        viewBox="0 0 32 32"
                    >
                        <path
                            fill="#e44f26"
                            d="M5.902 27.201L3.655 2h24.69l-2.25 25.197L15.985 30L5.902 27.201z"
                        ></path>
                        <path
                            fill="#f1662a"
                            d="M16 27.858l8.17-2.265l1.922-21.532H16v23.797z"
                        ></path>
                        <path
                            fill="#ebebeb"
                            d="M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83l.759 8.517H16v-3.091z"
                        ></path>
                        <path
                            fill="#ebebeb"
                            d="M16 21.434l-.014.004l-3.442-.929l-.22-2.465H9.221l.433 4.852l6.332 1.758l.014-.004v-3.216z"
                        ></path>
                        <path
                            fill="#fff"
                            d="M15.989 13.407v3.091h3.806l-.358 4.009l-3.448.93v3.216l6.337-1.757l.046-.522l.726-8.137l.076-.83H15.989z"
                        ></path>
                        <path
                            fill="#fff"
                            d="M15.989 7.151V10.242h7.466l.062-.694l.141-1.567l.074-.83h-7.743z"
                        ></path>
                    </svg>
                </div>

                <footer></footer>
            </main>
        </>
    );
}
