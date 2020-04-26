import * as React from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import glob from 'glob'
import { useRouter } from 'next/router'

import Layout from '../../components/Layout'
import ExampleRouter from '../../examples/ExampleRouter'
import { Box } from '@rsbear/canvas'
import styled from 'styled-components'

const CodeWrapper = styled.div`
  pre {
    padding: 20px;
    border: solid 1px rgba(160, 160, 160, 0.4);
    border-radius: 8px;
    border-width: 2px;
  }
`

export default function BlogTemplate({ frontmatter, markdownBody }) {
  const router = useRouter()
  if (!frontmatter) return <></>

  return (
    <Layout siteTitle={frontmatter.title}>
      <Box my={4}>
        <ExampleRouter route={router.asPath} />
      </Box>
      <CodeWrapper>
        <ReactMarkdown source={markdownBody} />
      </CodeWrapper>
    </Layout>
  )
}

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params
  const content = await import(`../../markdowns/${slug}.md`)
  const data = matter(content.default)

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
}

export async function getStaticPaths() {
  //get all .md files in the markdowns dir
  const markdowns = glob.sync('src/markdowns/**/*.md')

  //remove path and extension to leave filename only
  const markdownSlugs = markdowns.map((file) =>
    file.split('/')[2].replace(/ /g, '-').slice(0, -3).trim()
  )

  // create paths with `slug` param
  const paths = markdownSlugs.map((slug) => `/${slug}`)
  return {
    paths,
    fallback: true,
  }
}
