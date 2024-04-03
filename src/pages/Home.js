import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hey there, Im Tushar Dhalwal</h2>
        <div className="prompt">
          <p>
          Passionate Frontend Developer 
          </p>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS , NPM, MaterialUI, Yarn, TailwindCSS
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C, C++</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
