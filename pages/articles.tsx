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

        function pad(num: number, size: number) {
          var s = "000000000" + num;
          return s.substr(s.length - size);
        }
        return <li
          key={index}
          data-article-number={pad(index+1, 3)}>
          <h4>{article?.data?.title}</h4>
          <div className="date">{data?.date}</div>
          {data?.metaDesc}
          <Link href={`/article/${article?.slug}`}><a aria-label='Read article' /></Link>
        </li>
      })}
    </ul>
    <style jsx>{`
      .articles {display:flex; flex-flow:column nowrap; align-items:flex-start; list-style:none; margin:0; padding:0}
      .articles h4 {margin:0}
      li {position:relative; border:.1em solid currentColor; padding:1em 2em; border-radius:.3em; overflow:hidden}
      li::before {content:attr(data-article-number); display:inline-block; position:absolute; bottom:-.6em; right:-.1em; font-weight:900; font-size:6em; opacity:.05}
      .date {font-size:smaller}
      .articles :global(a) {position:absolute; inset:0; z-index:1}
      .articles :global(:visited) {color: VisitedText}
      .articles li:hover {background:rgba(80, 80, 80, .3)}
      .articles li:active {background:rgba(80, 80, 80, .1)}
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
