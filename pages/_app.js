import App, { Container } from "next/app";
import Head from "next/head";
import NextSeo from "next-seo";
import Navigation from "../components/Navigation";
import { createSEOConfig } from "../utils/seo";
import getPostData from "../utils/get-post-data";
import BlogEngine from "../utils/blog-engine";
import { renderLayout } from "../utils/render-app-layout";
import Footer from "../components/Footer";
import { checkForSW } from "../utils/check-for-sw";
import { globalStyles } from "../styles";
import { useRouter } from "next/router";

export default class MyApp extends App {
    constructor(props) {
        super(props);
        this.state = { postData: props.postData };
    }

    static async getInitialProps( ctx ) {
        let pageProps = {};
        let router = ctx.router;


        pageProps = await App.getInitialProps(ctx);
        
        const [allData, postData] = await Promise.all([
          BlogEngine(),
          getPostData(router)
        ]).catch(error =>
          console.error("Error in _app.js getInitialProps()", error)
        );

        const propsObj = Object.assign(
          {},
          { ...router, postData, allData, ...pageProps }
        );

        return { ...propsObj };
    }

    async componentDidMount() {
        await checkForSW();
    }

    async componentDidUpdate(prevProps, prevState) {
        const postData = await getPostData(this.props.router);
        if (!prevState.postData || postData.name !== this.state.postData.name) {
            this.setState({ postData });
        }
    }

    render() {
        const { postData } = this.state;
        const seoData = createSEOConfig(postData);
        if (postData) {
            const tagsString = postData.tags.join(", ");
            const footer = !postData.footer;
            return (
              <Container>
                {/* (1) SEO  */}
                <Head>
                  <meta name="keywords" content={tagsString} />
                </Head>
                <NextSeo config={seoData} />

                {/* (2) navigation */}
                <Navigation />

                {/* (3) page body */}
                <div className="content">
                  <React.Fragment>
                    {renderLayout(this.props, this.state)}
                  </React.Fragment>
                </div>

                {/* (4) footer */}
                {footer && <Footer />}

                {/* (5) global and local styles */}
                <style global jsx>
                  {globalStyles}
                </style>
              </Container>
            );
        } else {
            return null;
        }
    }
}
