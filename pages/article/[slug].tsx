import fs from 'fs'
import {
  GetStaticPaths,
  GetStaticProps,
} from 'next'
import { Layout } from '../../components'
import { fetchAllMarkdownArticles } from '../../utils/articles'

interface Props {
  slug?: string,
}

const Article = ({
  slug,
}: Props) => {
  return <Layout
    title="article">
    I am article: {slug}
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
  return {
    props: {
      slug: params?.slug ?? null,
    }
  }
}

export default Article
