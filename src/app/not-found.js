import Link from 'next/link';
import React from 'react'

const NotFound = () => {
    return (
        <div>
            <h1>404</h1>
            <h2>This page or url not found, Sorry!</h2>
            <Link href={'/'}>
                <button>Go To Home Page</button>
            </Link>
        </div>
    )
}

export default NotFound;