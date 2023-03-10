import Head from 'next/head'
import { getAllPosts } from '../lib/api';

export default function Home({ allPosts }) {
  
  const heroPost = allPosts[0]
  
  console.log(heroPost);

  return (
    <>
      <Head>
        <title>Benjamin Danneville</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex items-center justify-center w-screen h-screen bg-gray-900'>
        <div className="flex items-center w-1/3">
          <article className='text-white pr-8'>
            <h1 className='text-2xl font-medium underline'>{heroPost.title}</h1>
            <h2 className='text-1xl font-light'>{heroPost.excerpt}</h2>
          </article>
          <aside>
            <div className="w-40 h-40 rounded-full bg-gray-800"></div>
          </aside>
        </div>
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
