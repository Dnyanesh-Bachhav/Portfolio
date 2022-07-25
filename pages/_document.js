import Document,{Html,Head,Main,NextScript} from 'next/document';
import Script from 'next/script';
class MyDocument extends Document{

    static async getInitialProps(ctx)
    {
        const initiaProps = await Document.getInitialProps(ctx);
        return {...initiaProps};
    }
    render(){
        return(
            <Html>
                <Head>
                <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"/>
                <script src="../js/demo.js"></script>
            
                </Head>
                    <body>
                        <Main />
                        <NextScript />
                        <Script src='../js/demo.js' ></Script>
                    </body>
            </Html>
        );
    }
}
export default MyDocument;