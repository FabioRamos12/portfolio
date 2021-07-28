import "./styles.scss";

import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { DiReact } from "react-icons/di";

export function ProjectCard(props) {
    return (
        <div className="cardContainer">
            <div className="projectImage">
                <img src={props.projectImg} alt="letmeask" />
                <div className="projectTitle">
                    <h2>{props.projectTitle}</h2>
                </div>
            </div>

            <div className="projectDescription"></div>
        </div>
    );
}
