import React, { FC } from 'react'
import Head from 'next/head'

const Meta: FC<any> = (props) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <title>{props.siteTitle}</title>
    <meta name="Description" content={props.description}></meta>
  </Head>
)

export default Meta
