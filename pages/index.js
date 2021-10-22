import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {
    return(
        <div>
            <Head>
            <title>Thiago Yukio</title>
            </Head>
            <Header/>
            <Image
                src='/images/spooktober7.png'
                width={210}
                height={297}
                alt='ghost'
            />
            <Footer/>

        </div>
    )
}

export default Home