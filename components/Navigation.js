import React, { Component } from "react";
import { initGA, logPageView } from "../utils/analytics";

export default class Navigation extends Component {
                 state = { navOpen: false };

                 handleToggleNavigation = () => {
                   this.setState({
                     navOpen: !this.state.navOpen
                   });
                 };

                 componentDidMount() {
                   if (!window.GA_INITIALIZED) {
                     initGA();
                     window.GA_INITIALIZED = true;
                   }
                   logPageView();
                 }

                 render() {
                   // there is a click handler on div.backdrop to close the
                   // nav if the user clicks outside of the navigation component
                   return (
                     <nav className="navbar is-medium is-info is-bold is-fixed-top">
                       <div className="navbar-brand">
                         <div
                           className="navbar-burger burger"
                           onClick={this.handleToggleNavigation}
                         >
                           <span></span>
                           <span></span>
                           <span></span>
                         </div>
                       </div>

                       <div
                         id="navbarExampleTransparentExample"
                         className={`navbar-menu ${
                           this.state.navOpen ? "is-active" : ""
                         }`}
                       >
                         <div className="navbar-end">
                           <a className="navbar-item" href="/">
                             <span className="icon">
                               <i className="fas fa-info"></i>
                             </span>
                             <span>About</span>
                           </a>
                           <a className="navbar-item" href="/resume">
                             <span className="icon">
                               <i className="fas fa-file-alt"></i>
                             </span>
                             <span>Resume</span>
                           </a>
                           <a className="navbar-item" href="/blog">
                             <span className="icon">
                               <i className="fas fa-th-list"></i>
                             </span>
                             <span>Blog</span>
                           </a>
                           <a
                             className="navbar-item"
                             href="mailto:info@oenginoz.com"
                           >
                             <span className="icon">
                               <i className="fas fa-envelope"></i>
                             </span>
                             <span>Contact</span>
                           </a>
                         </div>
                       </div>
                     </nav>
                   );
                 }
               }
