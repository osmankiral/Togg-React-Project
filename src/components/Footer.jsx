import React from 'react'
import styles from './Footer.module.css'
import Logo from '../images/logodark.png'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.container}>
            <img style={{height:"80px", width:"150px"}} src={Logo} alt="/" />
            <button>Buy A Car</button>
        </div>
    </div>
  )
}

export default Footer