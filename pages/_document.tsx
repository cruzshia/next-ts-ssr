import Document, {
  DocumentComponentContext,
  Head,
  Main,
  NextScript
} from 'next/document'

import React from 'react'
import { ServerStyleSheets } from '@material-ui/styles'
import i18next from 'i18next'

interface Props {
  i18n: i18next.i18n
}

class MyDocument extends Document<DocumentComponentContext & Props> {
  static async getInitialProps(ctx: any) {
    // const initialProps = await Document.getInitialProps(ctx)

    const sheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) => (props: any) =>
          sheets.collect(<App {...props} />)
      })

    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      i18n: (ctx.req && ctx.req.i18n) || { t: () => {} },
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [
        <React.Fragment key='styles'>
          {initialProps.styles}
          {sheets.getStyleElement()}
        </React.Fragment>
      ]
    }
  }

  render() {
    const { i18n } = this.props
    return (
      <html lang={i18n.language}>
        <title>{i18n.t('title')}</title>
        <Head>
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, user-scalable=no'
          />
          <link rel='preconnect' href='https://fonts.googleapis.com/' />

          <noscript>
            <img
              height='1'
              width='1'
              src='https://www.facebook.com/tr?id=439945563214829&ev=PageView&noscript=1'
            />
          </noscript>
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
          />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/icon?family=Material+Icons'
          />
          {/* <link
            rel="shortcut icon"
            href="/static/images/fav.ico"
            type="image/x-icon"
          /> */}
          {/* <!-- Twitter Card data --> */}
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content={`@${i18n.t('meta_title')}`} />
          <meta name='twitter:creator' content={i18n.t('meta_title')} />
          {/* <!-- Twitter summary card with large image must be at least 280x150px --> */}
          <meta
            name='twitter:image:src'
            content='/static/images/og-image.jpg'
          />
          {/* <!-- Open Graph data --> */}
          {/* <meta property="og:url" content={url} /> */}
          <meta
            property='og:image'
            content='https://machix.com/static/images/og-image.jpg'
          />
          <meta property='og:type' content='website' />
          <meta name='twitter:title' content={`@${i18n.t('meta_title')}`} />
          <meta property='og:title' content={`@${i18n.t('meta_title')}`} />
          <meta property='og:site_name' content={`@${i18n.t('meta_title')}`} />
          <meta
            name='twitter:description'
            key='twitter:description'
            content={`@${i18n.t('meta_desc')}`}
          />
          <meta
            property='og:description'
            key='og:description'
            content={`@${i18n.t('meta_desc')}`}
          />
          <meta name='Description' content={`@${i18n.t('meta_desc')}`} />
        </Head>
        <body lang={i18n.language}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
