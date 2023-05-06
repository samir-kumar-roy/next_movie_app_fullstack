import React from 'react'
import styles from '@/app/styles/common.module.css';
import Link from 'next/link';
import Image from 'next/image';


const MovieCard = (currElem) => {
    const { id, type, title, synopsis } = currElem.jawSummary;
    return (
        <div className={styles.card} key={id}>
            <Image src={currElem.jawSummary.backgroundImage.url} width={250} height={240} alt={title} />
            <h2>{title}</h2>
            <p>{synopsis}</p>
            <Link href={`/movie/${id}`}>
                <button>Read More</button>
            </Link>
        </div>
    )
}
export default MovieCard;