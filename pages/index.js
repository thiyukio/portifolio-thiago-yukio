import Head from 'next/head'
import Header from '../components/Header'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'

function Home() {
    return(
        <div>
            <Head>
            <title>Thiago Yukio</title>
            </Head>
            <Header/>
            <Gallery/>
            <Footer/>

        </div>
    )
}

export default Home