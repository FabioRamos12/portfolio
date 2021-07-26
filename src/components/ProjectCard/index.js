import "./styles.scss";

import letmeaskImg from "../../assets/letmeask.png";

export function ProjectCard() {
    return (
        <div className="cardContainer">
            <div className="projectImage">
                <img src={letmeaskImg} alt="letmeask" />
            </div>

            <div className="projectDescription"></div>
        </div>
    );
}
