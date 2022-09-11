import fs from 'fs'
import {
  GetStaticPaths,
  GetStaticProps,
} from 'next'
import { Layout } from '../../components'
import { fetchAllMarkdownArticles, fetchArticleMarkdown } from '../../utils/articles'
import Markdown from 'react-markdown'
interface Props {
  slug: string,
  markdown: any,
}

const Article = ({
  slug,
  markdown,
}: Props) => {
  return <Layout
    title="article">
    I am article: {slug}
    <Markdown
      children={JSON.parse(markdown).content} />
  </Layout>
}

/**
 * Get all markdown articles to generate static article paths. 
 * 
 * @returns the static paths for all articles
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const files = fetchAllMarkdownArticles()
  const paths = files.map(file => ({
    params: {
      slug: file.replace('.md', ''), // remove file extension
    }
  }))

  return {
    paths: paths,
    fallback: false
  }
}

// get posts at build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = Array.isArray(params?.slug)
    ? params?.slug[0]
    : params?.slug
  const markdown = slug && fetchArticleMarkdown(slug)

  return {
    props: {
      slug: slug ?? null,
      markdown: JSON.stringify(markdown)
    }
  }
}

export default Article
