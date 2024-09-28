import React from "react";
import { AuthorContainer } from "./styles";

function Author() {
  return (
    <AuthorContainer>
      Created by{" "}
      <a href="https://www.linkedin.com/in/isumitraj/" target="_blank" rel="noopener noreferrer">
        Sumit Raj ©
      </a>
    </AuthorContainer>
  );
}

export default Author;