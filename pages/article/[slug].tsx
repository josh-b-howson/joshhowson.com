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
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface Props {
  article: any,
}

/**
 * Read article page.
 */
const Article = ({
  article,
}: Props) => {
  const articleData = JSON.parse(article)
  const { content, data } = articleData
  const {
    title,
    metaTitle,
    date,
  } = data

  const [codepenEmbedded, setCodepenEmbedded] = useState(false)

  useEffect(() => {
    if (codepenEmbedded) return

    const codepenElement: any = document.evaluate("//p[contains(., 'CODEPEN_EMBED')]", document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)
    let index = 0
    let result = codepenElement?.snapshotItem(index)
    while (result) {
      console.log(result)
      const textContent = result.textContent
      const id = textContent?.slice(textContent.lastIndexOf(':') + 1, textContent.lastIndexOf(']'))
      result.innerHTML = `
      <iframe height="100%" style="width: 100%;" scrolling="no" src="https://codepen.io/josh-howson/embed/${id}?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
      See <a href="https://codepen.io/josh-howson/pen/${id}">the Pen</a> by Josh Howson (<a href="https://codepen.io/josh-howson">@josh-howson</a>)
      on <a href="https://codepen.io">CodePen</a>.
      </iframe>
      `
      result.classList.add('codepen')
      result = codepenElement?.snapshotItem(++index)
    }
    setCodepenEmbedded(true)
  }, []);

  return <Layout
    title={metaTitle}
    mainClassName="article">
    <h1>{title}</h1>
    <div
      className="date">
      {date}
    </div>
    <Markdown>
      {content}
    </Markdown>
    <p>
      &lt;&nbsp;<Link href="/articles"><a>Back to articles</a></Link>
    </p>
    <style jsx>{`
      .date {font-size: smaller}
    `}</style>
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
