import "./styles.css";

import logoImg from "../../assets/F.svg";
import {
    AiFillGithub,
    AiFillLinkedin,
    AiOutlineWhatsApp,
} from "react-icons/ai";

export function Aside() {
    return (
        <aside>
            <nav>
                <div className="logo">
                    <img src={logoImg} alt="" />
                </div>

                {/* <ul className="navigation">
                    <li>Home</li>
                    <li>Projetos</li>
                </ul> */}

                <div className="social">
                    <a href="">
                        <AiOutlineWhatsApp size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/fabioalvesramos/">
                        <AiFillLinkedin size={24} />
                    </a>
                    <a href="https://github.com/FabioRamos12">
                        <AiFillGithub size={24} />
                    </a>
                </div>
            </nav>
        </aside>
    );
}
