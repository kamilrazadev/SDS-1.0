import React from "react";
import Container from "react-bootstrap/esm/Container";

const Footer = () => {
  return (
    <div className="px-4 text-bg-light mt-auto">
      <Container className="d-flex justify-content-between align-items-center py-4">
        <p className="m-0">
          &copy; 2023 Developed by M.Kamil Raza. All rights reserved.
        </p>
        <p className="m-0 text-secondary">Thanks for visiting</p>
      </Container>
    </div>
  );
};

export default Footer;
