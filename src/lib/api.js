import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

let currentDirectory = ''

export function getPostSlugs() {
    return fs.readdirSync(currentDirectory)
}

export function getPostBySlug(slug, fields) {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(currentDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const items = {}

    fields.forEach(field => {
        if (field === 'slug') items[field] = realSlug
        if (field === 'content') items[field] = content
        if (typeof data[field] !== 'undefined') items[field] = data[field]
    });

    return items
}

export function getFolderContent(dirName, fields) {
    currentDirectory = join(process.cwd(), `_contents/${dirName}`)
    const slugs = getPostSlugs()
    const posts = slugs
        .map((slug) => getPostBySlug(slug, fields))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

    return posts
}
