import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Head from 'next/head';

const config: DocsThemeConfig = {
    logo: <span style={{ fontSize: "24px" }}><strong>HeyTürkiye'nin</strong> Ders notları</span>,
    project: {
        link: 'https://github.com/kisisel58/notlarim.heyturkiye.konudisi.fg-w.ga/',
    },
    chat: {
        link: 'https://discord.gg/feedback',
    },
    docsRepositoryBase: 'https://github.com/kisisel58/notlarim.heyturkiye.konudisi.fg-w.ga/',
    useNextSeoProps() {
        return {
            titleTemplate: '%s - Notlarım,
            openGraph: {
                type: 'website',
                locale: 'en_IE',
                url: 'https://notlarim.heyturkiye.konudisi.fg-w.ga',
                site_name: 'Notlarım',
        }
        }
    },
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700" />
                <style>{`
                    body {
                        margin: 0;
                        padding: 0;
                        font-family: "Poppins", sans-serif;
                    }

                `}</style>
            </Head>
        </>
    ),
    footer: {
        component: <></>
    },
    i18n: [
        { locale: 'tr', text: 'Türkçe' }
    ]
}

export default config;
