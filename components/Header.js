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
            <Link href='https://www.instagram.com/thiyukio' >
                <FontAwesomeIcon icon={faInstagram}/>
            </Link>
            <Link href='https://www.twitter.com/yukionag' >
                <FontAwesomeIcon icon={faTwitter}/>
            </Link>
            <Link href='https://www.linkedin.com/in/thiago-yukio-nagatomo/' >
                <FontAwesomeIcon icon={faLinkedin}/>
            </Link>
            </div>


        </div>
    )
}

export default Header