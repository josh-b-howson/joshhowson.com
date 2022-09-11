import fs from 'fs'

/**
 * Get a list of all .md files in the /articles directory.
 * @returns an array of article files
 */
export const fetchAllMarkdownArticles = () => {
  const files: string[] = fs.readdirSync('articles')
  return files
}
