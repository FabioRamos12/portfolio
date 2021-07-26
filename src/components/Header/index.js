import "./styles.scss";

import logoImg from "../../assets/F.svg";
import { useEffect, useState } from "react";

export function Header() {
    const [navBackground, setNavBackground] = useState("transparent");

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 300;
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
                <img src={logoImg} alt="Logo" />
                <ul>
                    <li>Home</li>
                    <li>Projetos</li>
                    <li>Tecnologias</li>
                </ul>
            </nav>
        </header>
    );
}
