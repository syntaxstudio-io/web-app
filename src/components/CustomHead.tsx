import NextHead from 'next/head'
import React from 'react'
import { Head } from '../types/main'

const CustomHead: React.FC<Head> = ({ title, description, url, ogImage }: Head): JSX.Element => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title}</title>
    <meta name="description" content={description} />

    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />

    <meta name="twitter:site" content={url} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={ogImage} />

    <meta property="og:image" content={ogImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </NextHead>
)

export default CustomHead
