import React from 'react';

const About = () => {
  return (
    <>
      <section className="section-sec" id="about">
        <h1>About Me</h1>
      </section>
      <section className="container-about">
        <div>
          <p>Recent computer science graduate with a strong foundation in programming, software
            development, and problem-solving. Eager to apply skills in web development, data analysis, and
            artificial intelligence.
            Passionate about continuous learning and collaborating with diverse teams to create innovative
            technology solutions.
          </p>
        </div>
        <div>
          <img src='/mylogo.png' alt="logo" style={{ width: '350px', height: '350px' }} />
        </div>
        <div>Learn in-demand web development skills, build a strong portfolio, network, secure clients, specialize in a niche, and gradually increase your rates as a freelancer.</div>
      </section>
    </>
  );
};

export default About;