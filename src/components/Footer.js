import React from "react";
function Footer() {
  return (
    <footer className="page-footer">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} All rights reserved
          <a className="grey-text text-lighten-4 right" href="#!">
            S.E
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
