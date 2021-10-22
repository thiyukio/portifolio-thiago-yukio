import Link from 'next/link'
import styles from './Header.module.css'
import { faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Header(){
    return(
        <div className={styles.header}>
            <div className={styles.logo}>
                <span>Thiago</span> Yukio
            </div>
            <ul className={styles.list}>
                <li>
                    <Link href='./'>
                        <a>
                            Home
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='./'>
                        <a>
                            Sobre
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='./'>
                        <a>
                            Contato
                        </a>
                    </Link>
                </li>
            </ul>
            <div className={styles.social}>
            <a href='https://www.linkedin.com/in/thiago-yukio-nagatomo/'  target="_blank">
                <FontAwesomeIcon icon={faLinkedin}/>
            </a>
            <a href='https://www.twitter.com/yukionag'  target="_blank">
                <FontAwesomeIcon icon={faTwitter}/>
            </a>
            <a href='https://www.instagram.com/thiyukio' target="_blank">
                <FontAwesomeIcon icon={faInstagram}/>
            </a>
            </div>


        </div>
    )
}

export default Header