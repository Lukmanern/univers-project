import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <div className={styles.grid}>
          <a href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app' className={styles.card} target='_blank' rel='noopener noreferrer'>
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Find in-depth information about Next.js features and&nbsp;API.</p>
          </a>

          <a href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app' className={styles.card} target='_blank' rel='noopener noreferrer'>
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
          </a>

          <a
            href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Discover and deploy boilerplate example Next.js&nbsp;projects.</p>
          </a>

          <a href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app' className={styles.card} target='_blank' rel='noopener noreferrer'>
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Instantly deploy your Next.js site to a shareable URL with&nbsp;Vercel.</p>
          </a>
        </div>

        <div className={styles.description}>
          <p>
            <code className={(styles.code, styles.justify)}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, laudantium animi? Laudantium quam, magnam ipsam obcaecati vel natus provident quaerat eaque. Deserunt quis provident dolores libero
              aliquid, tempore id illum earum delectus! Deleniti numquam fugit eveniet sequi quas quod voluptatum et, quos dicta. Ipsam perspiciatis in maxime. Repellendus, mollitia laudantium, quam vitae
              debitis suscipit quod earum quasi ullam tempora adipisci officia unde voluptas voluptate magnam dolor accusamus nemo minima assumenda amet libero totam laboriosam. Ab eligendi officiis voluptates
              delectus eaque iste, eveniet iure qui minus sed officia totam expedita molestias libero dicta ut aliquid voluptatem. Iusto deserunt provident earum animi?
            </code>
          </p>
        </div>
      </main>
    </>
  );
}
