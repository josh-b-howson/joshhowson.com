import type { GetStaticProps } from 'next'
import { Layout } from '../components'
import React from 'react'
import {
  fetchAllMarkdownArticles,
  fetchArticleMarkdown,
} from '../utils/articles'
import Link from 'next/link'

interface Props {
  articles: string[],
}

/**
 * Articles browse page.
 */
const Articles = ({
  articles,
}: Props) => {
  const articlesData = articles.map(article => JSON.parse(article))
  return <Layout
    title="Articles">
    <ul
      className='articles'>
      {articlesData.map((article, index) => {
        const { data } = article
        return <li
          key={index}>
          <Link href={`/article/${article?.slug}`}>{article?.data?.title}</Link>
          <br />
          {data?.date}
          <br />
          {data?.metaDesc}
        </li>
      })}
    </ul>
    <style jsx>{`
      .articles :global(:visited) {
        color: VisitedText;
      }
    `}</style>
  </Layout>
}

/** 
 * @returns an array of all articles and their contents & metadata.
 */
export const getStaticProps: GetStaticProps = async () => {
  // first get a list of all articles .md files
  const articleFiles = fetchAllMarkdownArticles().map(file =>
    file.replace('.md', '')
  )

  // then build an array of article markdown contents
  const articles = articleFiles.map(file => {
    return JSON.stringify(fetchArticleMarkdown(file))
  })
  return {
    props: {
      articles: articles ?? [],
    }
  }
}

export default Articles
