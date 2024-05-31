import "./index.css";

function Introduction() {
  return (
    <div className="introduction">
      <Image />
      <div className="about">
        <p>
          <strong>About Me</strong><br />
          Hello! I am Vanshika, a B.Tech Computer Science and Engineering student<br></br> with a passion for technology and innovation.<br></br> My journey in the tech world is driven by an insatiable curiosity<br></br> and a desire to explore and learn new technologies.
        </p>
        <p>
          I specialize in:
          <ul>
            <li><strong>Flutter:</strong> Crafting beautiful, natively compiled applications for mobile, web, and desktop.</li>
            <li><strong>Firebase:</strong> Utilizing this powerful platform to build and manage scalable apps.</li>
            <li><strong>React:</strong> Creating dynamic and responsive user interfaces for web applications.</li>
          </ul>
        </p>
        <p>
          I am always eager to dive into the latest tech trends and  am constantly seeking new opportunities to grow and make an impact.
        </p>
        <p>
          Lets connect and explore the limitless possibilities of technology together!
        </p>
      </div>
    </div>
  );
}

function Image() {
  return <div className="intro-image"></div>;
}

export default Introduction;
