import "./styles.css";

import logoImg from "../../assets/F.svg";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FiLinkedin, FiGithub } from "react-icons/fi";

export function Aside() {
    return (
        <aside>
            <nav>
                <div className="social">
                    <a href="">
                        <AiOutlineWhatsApp size={40} />
                    </a>
                    <a href="https://www.linkedin.com/in/fabioalvesramos/">
                        <FiLinkedin size={40} />
                    </a>
                    <a href="https://github.com/FabioRamos12">
                        <FiGithub size={40} />
                    </a>
                </div>
            </nav>
        </aside>
    );
}
