import React from 'react';
import Link from 'next/link';
import MovieCard from '../components/MovieCard';
import styles from '@/app/styles/common.module.css'
import { resolve } from 'styled-jsx/css';

const Movie = async () => {
  // const url = process.env.URL;
  await new Promise(resolve => setTimeout(resolve, 500))

  const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '291360a50cmshf3410b5e8489b62p1b932cjsne95aea38493a',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };
  const response = await fetch(url, options);
  const data = await response.json();
  const main_data = data.titles;

  return (
    <>
      <section className={styles.moviesection}>
        <div className={styles.container}>
          <h1>Movies and Seriese</h1>
          <div className={styles.card_section}>
            {
              main_data.map((currElem) => {
                return <MovieCard key={currElem.id} {...currElem} />
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Movie;