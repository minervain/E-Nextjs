import React from 'react'
import Link from 'next/link'
import styles from './nav.module.css'

const Nav = () => {
  return (
    <div className='cc'>
        <Link href="/" >
          <div className={styles.link}>Anasayfa</div>
        </Link>

        <Link href="/about">
        Hakkımda</Link>
    </div>  
  )
}

export default Nav