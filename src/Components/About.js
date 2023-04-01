import me from "./Max.jpg"

export default function About() {
    return (
        <div className="about-page">
            <div className="project-info">
                <h1>The Weather App</h1>
                <p>
                    This is my updated weather app that I created using React. 
                </p>
            </div>

            <div className="about-card">
                <div className="about-me">
                    <h1>Hello! My name is Max and my favorite weather is ...</h1>
                    <h4>
                        <a href="https://github.com/maxwattan"> -Github- </a>
                        
                        <a href="https://www.linkedin.com/in/maxwattana/"> -LinkedIn- </a>
                    </h4>
                    <img src={me} alt="Max-img" width={420}></img>
                    <p>
                    I am a Full Stack Web Developer. I am passionate to help others connect with communities to improve themselves and the world.  
                    </p>

                </div>

            </div>

        </div>
    ) 
}