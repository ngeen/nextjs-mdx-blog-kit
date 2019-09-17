import React from "react";

export const meta = {
  title: "Error",
  tags: ["javascript", "python"],
  layout: "page",
  publishDate: "2011-01-01",
  modifiedDate: false,
    seoDescription: "This page lists all posts with a given tag.",
  footer: true
};

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

    render() {
      return (
        <section className="hero is-medium is-info is-bold is-fullheight is-fullheight-with-navbar">
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="shadow">404</div>
              <div className="description">
                The page you have sought can not be reached at the moment.
                Please try again later.
              </div>
              <div className="emoji">😀 😁 😂 🤣 😃 😄 😅 😆 😉</div>
            </div>
          </div>
          <style jsx>{`
            .shadow {
              color: #e0dfdc;
              font-size: 17vw;
              letter-spacing: 0.2em;
              text-shadow: 0 -1px 0 #fff, 0 1px 0 #2e2e2e, 0 2px 0 #2c2c2c,
                0 3px 0 #2a2a2a, 0 4px 0 #282828, 0 5px 0 #262626,
                0 6px 0 #242424, 0 7px 0 #222, 0 8px 0 #202020, 0 9px 0 #1e1e1e,
                0 10px 0 #1c1c1c, 0 11px 0 #1a1a1a, 0 12px 0 #181818,
                0 13px 0 #161616, 0 14px 0 #141414, 0 15px 0 #121212,
                0 22px 30px rgba(0, 0, 0, 0.9);
            }

            .description {
              font-size: 2vw;
            }

            .emoji {
              font-size: 4vw;
            }
          `}</style>
        </section>
      );
  }
}

export default Error;
