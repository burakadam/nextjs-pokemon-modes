/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/Home.module.css';

export async function getStaticProps() {
  const resp = await fetch(
    'https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json'
  );

  return {
    props: {
      pokemons: await resp.json(),
    },
  };
}

export default function Home({ pokemons }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon List</title>
      </Head>
      <div className={styles.grid}>
        {pokemons.map((pokemon) => (
          <div className={styles.card} key={pokemon.id}>
            <Link href={`/pokemon/${pokemon.id}`}>
              <img
                src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
                alt={pokemon.name}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
