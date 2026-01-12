import Navbar from "../../layouts/Navbar/navbar.component";
import React from "react";

//pagewrapper for general screen transitions
import PageWrapper from "../../layouts/PageWrapper/pagewrapper";
const Contact = () => {
  return (
    <PageWrapper>
      <Navbar />
      <main>
        <h1>This is Contact Page</h1>
      </main>
    </ PageWrapper>
  );
};

export default Contact;
