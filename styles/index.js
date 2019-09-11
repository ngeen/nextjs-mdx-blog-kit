import css from "styled-jsx/css";

// In an attempt to keep all configuration in one place, css variables
// are currently stored in config.yml. Move these variables into a
// variables file in this style/ directory if that is your preference.
import { config } from "../config/config.yml";

// used in pages/about.js, pages/index.js
export const centeredPageStyles = css`
    .centered-container {
        height: 80vh;
        width: 98vw;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
`;

// used in _app.js
export const globalStyles = css.global`
         @font-face {
           font-family: "San Francisco";
           font-display: auto; /* Important for performance */
           src: url("/static/fonts/sanfrancisco.woff") format("woff");
           font-style: normal;
         }

         html {
           scroll-behavior: smooth;
         }

         .search-layout,
         .blog-layout,
         .blog-post-list {
           max-width: 740px;
           padding: 60px 20px 100px 20px;
           position: relative;
         }

         .blog-layout > div {
           display: flex;
           flex-direction: column;
         }

         img {
           max-width: 100%;
         }

         img.img-centered {
           align-self: center;
           margin: 10px 0px;
         }

         code > span {
           font-size: inherit; /* make sure code font size is set in <CodeBlock /> */
           background: inherit !important; /* Fixes code block style bug*/
         }

         .has-same-height .card {
           height: 320px;
           overflow: hidden;
         }

         .card-content h3 {
           text-align: center;
         }

         .table-profile td,
         th {
           border: none !important;
         }

         .table-profile td:first-of-type {
           font-weight: bold;
         }

         .skills-content .media {
           margin: 0 !important;
           padding: 4px !important;
           border: 0 !important;
         }

         .skills-content .progress {
           height: 4px !important;
         }

         .custom-tags {
           text-align: center !important;
           display: block;
         }

         .portfolio-container .card {
           margin-bottom: 2em;
         }

         .section-heading {
           text-align: center;
           margin-top: 1em;
           margin-bottom: 6em;
         }

         .list-icons {
           font-size: 3rem;
         }

         .list-icons .list-inline-item i:hover {
           color: #bd5d38;
         }

         .list-inline {
           list-style-type: none;
           margin-left: 0px !important;
           margin-top: 0px !important;
         }

         .list-inline-item {
           display: inline-block;
           margin-left: 10px;
           margin-top: 0px;
         }
       `;
