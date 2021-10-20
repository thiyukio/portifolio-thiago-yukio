import Layout from '../components/layout';
import Image from 'next/image';
import spook from '../static/spooktober11.png';

function Home() {
    return(
        <Layout>
        <body>
        <nav>
            <a href='./'>thiago yukio</a>
            <a>galeria</a>
            <a>contato</a>
        </nav>
        <div> 
        <Image
            src={spook}
        />
        </div>
        </body>
        </Layout>
    )
}

export default Home