import React from "react";
import Navbar from "../../layouts/Navbar/navbar.component";
//Pagewrapper for general screen transitions
import PageWrapper from "../../layouts/PageWrapper/pagewrapper";
const About = () => {
  return (
        <PageWrapper>
          <Navbar />
        <main>
          <h1>This is About Page</h1>
        </main>
    </ PageWrapper>
  );
};

export default About;
