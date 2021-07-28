import "./styles.scss";

import logoImg from "../../assets/F.svg";
import { useEffect, useState } from "react";

export function Header() {
    const [navBackground, setNavBackground] = useState("transparent");

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 200;
            if (show) {
                setNavBackground("solid");
            } else {
                setNavBackground("transparent");
            }
        };
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.addEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={navBackground}>
            <nav>
                <a href="/">
                    <img src={logoImg} alt="Logo" />
                </a>
                <ul>
                    <a href="">
                        <li>Home</li>
                    </a>
                    <a href="">
                        <li>Projetos</li>
                    </a>
                    <a href="">
                        <li>Tecnologias</li>
                    </a>
                </ul>
            </nav>
        </header>
    );
}
