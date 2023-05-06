import React from 'react';
import styles from '@/app/styles/common.module.css';
import Image from 'next/image';

const Page = async ({ params }) => {
    const id = params.id;
    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '291360a50cmshf3410b5e8489b62p1b932cjsne95aea38493a',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };
    const response = await fetch(url, options);
    const data = await response.json();
    const main_data = data[0].details;
    console.log(main_data);
    return (
        <div className={styles.movie_details}>
            <div>
                <Image src={main_data.backgroundImage.url} width={320} height={280} alt={main_data.title} />
            </div>
            <div>
                <h2>{main_data.title}</h2>
                <p>{`Synopsis: ${main_data.synopsis}`}</p>
                <p>Casts: {main_data.cast.map((elem) => {
                    return <span className={styles.cast_name}>{`${elem.name}, `}</span>;
                })}</p>
            </div>
        </div>
    )
}

export default Page;