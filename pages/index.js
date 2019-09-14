import { Component } from "react";

export const meta = {
  title: "Software & IT Consultancy",
  // The tags are used for SEO in the header property: `<meta name="keywords" content={stringOfAllPostTags} />`
  tags: ["Engin ÖZ", "Ömer Engin ÖZ", "Software", "IT Consultancy", "Software Consultancy"],
  layout: "page",
  publishDate: "2011-01-01",
  modifiedDate: false, // "If used it must be in 'YYYY-MM-DD format' like publishDate"
  seoDescription: "Ömer Engin ÖZ Software & IT consultancy service. He serves you quality software services.",
  exclude: false,
  hideProgressBar: false,
  footer: true //In normal conditions it is false, but the other documents are false too so this is true it is cross logic
};

export default class Index extends Component {
  render() {
    return (
      <section className="hero is-medium is-info is-bold is-fullheight is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-7">
                <figure className="image is-128x128">
                  <img
                    className="is-rounded"
                    src="/static/images/profile.jpg"
                  />
                </figure>
                <div className="title is-1">
                  Ömer Engin <strong>ÖZ</strong>
                </div>
                <div className="subtitle is-2">Software & IT Consultant</div>
                <div>
                  He is experienced to write, set up and manage High Available
                  systems. He likes to play with technologic tools, (not just
                  software) also Arduino, Raspberry PI, esp 8266 etc. He likes
                  best practices at all things. Technology is easy-peasy for
                  him. Do not separate him from technology. Please approach him
                  friendly.
                </div>
                <br />
                <ul>
                  <li>
                    <a href="/feed.json" target="_blank">
                      <span className="fa-stack fa-2x">
                        <i className="fas fa-circle fa-stack-2x st-rss"></i>
                        <i className="fas fa-rss fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/ngeeen" target="_blank">
                      <span className="fa-stack fa-2x">
                        <i className="fas fa-circle fa-stack-2x st-twitter"></i>
                        <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/enginoz/"
                      target="_blank"
                    >
                      <span className="fa-stack fa-2x">
                        <i className="fas fa-circle fa-stack-2x st-linkedin"></i>
                        <i className="fab fa-linkedin fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/ngeen" target="_blank">
                      <span className="fa-stack fa-2x">
                        <i className="fas fa-circle fa-stack-2x st-github"></i>
                        <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@oenginoz.com" target="_blank">
                      <span className="fa-stack fa-2x">
                        <i className="fas fa-circle fa-stack-2x st-envelope"></i>
                        <i className="fas fa-envelope fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          ul {
            padding: 0;
            list-style: none;
            margin-top: 10px;
          }

          li {
            vertical-align: top;
            display: inline;
            height: 100px;
          }

          .fa-circle {
            color: #c1c9db;
          }

          a:hover .st-envelope {
            color: #ff0000;
          }

          a:hover .st-twitter {
            color: #33ccff;
          }

          a:hover .st-linkedin {
            color: #007bb7;
          }

          a:hover .st-github {
            color: #000000;
          }

          a:hover .st-rss {
            color: #e37900;
          }

          .is-rounded {
            border: 0.5rem solid rgba(255, 255, 255, 0.2);
          }
        `}</style>
      </section>
    );
  }
}
