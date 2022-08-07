import React from "react";

const Footer = () => (
  <footer className="page-footer font-small blue mt-5 pt-5 bg-info0">
    <div className="container-fluid text-center text-md-left text-secondary">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase text-primary ">e-commerce</h5>
          <p>Ponte en contacto y déjame saber como puedo ayudarle.</p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Contact</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#" title="Linkedin">
                <box-icon
                  type="logo"
                  name="linkedin-square"
                  className="bx-lg text-danger"
                  animation="tada-hover"
                  color="gray"
                ></box-icon>
              </a>
            </li>
            <li>
              <a href="#" title="Github">
                <box-icon
                  type="logo"
                  name="github"
                  className="bx-lg text-danger"
                  animation="tada-hover"
                  color="gray"
                ></box-icon>
              </a>
            </li>
            <li>
              <a href="#" title="Send mail">
                <box-icon
                  name="mail-send"
                  color="gray"
                  className="bx-lg text-danger"
                  animation="tada-hover"
                ></box-icon>
              </a>
            </li>
            <li>
              <a href="#" title="Phone">
                <box-icon
                  type="solid"
                  name="phone"
                  className="bx-lg text-danger"
                  animation="tada-hover"
                  color="gray"
                ></box-icon>
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">e-commerce</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#/">Home</a>
            </li>
            <li>
              <a href="#/login">Login</a>
            </li>
            <li>
              <a href="#/">Category</a>
            </li>
            <li>
              <a href="#/logout">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center text-secondary py-3">
      © 2022 Copyright:
      <a href="#" className="text-info mx-2">
        Adrian M. Guzmán López
      </a>
    </div>
  </footer>
);

export default Footer;
