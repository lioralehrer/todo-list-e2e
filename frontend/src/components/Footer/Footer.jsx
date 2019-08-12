import React from "react";
import "./Footer.css"
class Footer extends React.Component {
    render() {
        return (
            <div className="mini-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="copyright-text">
                                <p>© 2019
              <a href="https://www.appleseeds.org.il/bootcamp"> Appleseedes Bootcamp </a>Keren & Liora Todo-List-App
              <a href="https://github.com/lioralehrer/todo-list"> Visit us in GitHub </a>
                                </p>
                            </div>

                            <div className="go_top">
                                <span className="icon-arrow-up"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;