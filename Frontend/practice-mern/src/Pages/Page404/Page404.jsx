import React from "react";
import "./Page404.css";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div id="error-page">
      <div class="content">
        <h2 class="header" data-text="404">
          404
        </h2>
        <h4 data-text="Opps! Page not found">Opps! Page not found</h4>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <div class="btns">
          <Link to="/">return home</Link>
        </div>
      </div>
    </div>
  );
};

export default Page404;
