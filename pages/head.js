import Layout from '../components/layout';
import Link from 'next/link'

function Head() {
    return(
        <Layout>
        <body>
        <nav>
        <Link href='./'>
            <a >thiago yukio</a>
            </Link>
            <Link href='./gallery'>
            <a >galeria</a>
            </Link>
            <a>contato</a>
        </nav>
      
        </body>
        </Layout>
    )
}

export default Head