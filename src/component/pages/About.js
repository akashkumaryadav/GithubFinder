import React from "react";

const About = () => {
  return (
    <div className="container mt-5 pt-5">
      <h1> Github Finder</h1>
      <p>
        Hello EveryOne ,this is an react app to search profile on github
        <br />
        application uses a github endpoint api's to fetch detail like repos,
        <br />
        followers,gist,images etc;
        <br />
        <strong>Version=0.0.1v</strong>
      </p>
      <h5>
        Developed By Udaky <sup>&copy;2020</sup>
      </h5>
      <h6>Email:akash.kumar.yadav.cse@gmail.com</h6>
      <h6>
        {" "}
        <a
          href="https://github.com/akashkumaryadav/GithubFinder"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Contribute on github <i className="fab fa-github-alt"></i>
        </a>
      </h6>
    </div>
  );
};

export default About;
