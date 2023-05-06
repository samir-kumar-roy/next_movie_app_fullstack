import React from 'react'
import styles from '@/app/styles/common.module.css'

const Loading = () => {
    return (
        <div className={styles.loading_section}>
            <div className={styles.loading}></div>
        </div>
    )
}

export default Loading