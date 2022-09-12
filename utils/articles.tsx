import fs from 'fs'
import matter from 'gray-matter'

/**
 * Get a list of all .md files in the /articles directory.
 * @returns an array of article files
 */
export const fetchAllMarkdownArticles = () => {
  const files = fs.readdirSync('articles')
  return files
}

/**
 * 
 * @param article the article's slug
 * @returns the markdown data from matter()
 */
export const fetchArticleMarkdown = (article: string) => {
  if (!article) return null

  // build file path
  const fileName = fs.readFileSync(`articles/${article}.md`, 'utf-8')

  // generate markdown from file contents
  const markdown = matter(fileName, { excerpt: true })
  return {
    ...markdown,
    slug: article, // also provide the file name
  }
}
