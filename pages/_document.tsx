import Document, { Head, Main, NextScript } from 'next/document';


export default class VictorProcureDocument extends Document {
    render(): JSX.Element {
        return (
            <html>
                <Head>
                    <title>Victor Procure</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                <style jsx global>{`
                @import url(https://fonts.googleapis.com/css?family=Molengo);

                *, *:before, *:after {
                    box-sizing: border-box;
                }

                html,
                body,
                div,
                span,
                applet,
                object,
                iframe,
                h1,
                h2,
                h3,
                h4,
                h5,
                h6,
                p,
                blockquote,
                pre,
                a,
                abbr,
                acronym,
                address,
                big,
                cite,
                code,
                del,
                dfn,
                em,
                img,
                ins,
                kbd,
                q,
                s,
                samp,
                small,
                strike,
                strong,
                sub,
                sup,
                tt,
                var,
                b,
                u,
                i,
                center,
                dl,
                dt,
                dd,
                ol,
                ul,
                li,
                fieldset,
                form,
                label,
                legend,
                table,
                caption,
                tbody,
                tfoot,
                thead,
                tr,
                th,
                td,
                article,
                aside,
                canvas,
                details,
                embed,
                figure,
                figcaption,
                footer,
                header,
                hgroup,
                menu,
                nav,
                output,
                ruby,
                section,
                summary,
                time,
                mark,
                audio,
                video {
                    margin: 0;
                    padding:0;
                    border:0;
                    font-size: 100%;
                    font:inherit;
                    vertical-align: baseline;
                }

                @media screen and (max-width: 1680px),
                body,
                input,
                select,
                textarea {
                    font-size: 14pt;
                }

                body,
                input,
                select,
                textarea {
                    font-family: Molengo, Helvetica, sans-serif;
                    font-size: 17pt;
                    font-weight: 300;
                    line-height: 1.65;
                }

                body {
                    color: rgba(255,255,255, 0.65);
                    background: linear-gradient(45deg, #4fafd1 15%, #7ddcff 85%);
                }
                `}
                </style>
            </html>
        );
    }
}
