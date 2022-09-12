import {
  GetStaticPaths,
  GetStaticProps,
} from 'next'
import { Layout } from '../../components'
import {
  fetchAllMarkdownArticles,
  fetchArticleMarkdown,
} from '../../utils/articles'
import Markdown from 'react-markdown'

interface Props {
  article: any,
}

const Article = ({
  article,
}: Props) => {
  const articleData = JSON.parse(article)
  const { content, data, excerpt } = articleData
  const {
    title,
    metaTitle,
    date,
  } = data

  return <Layout
    title={metaTitle}
    mainClassName="article">
      <h1>{title}</h1>
      <p>{new Date(date).toDateString()}</p>
    <Markdown>
      {content}
    </Markdown>
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
  // ensure the slug is a single string, not an array of strings
  const slug = Array.isArray(params?.slug)
    ? params?.slug[0]
    : params?.slug
  const article = slug && fetchArticleMarkdown(slug)

  return {
    props: {
      article: JSON.stringify(article) ?? {}
    }
  }
}

export default Article
