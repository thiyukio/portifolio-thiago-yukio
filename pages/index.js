import Head from 'next/head'
import Image from 'next/image'

function Home() {
    return(
        <div>
            <Head>
            <title>Thiago Yukio</title>
            </Head>
            <Image
                src='/images/spooktober7.png'
                width={210}
                height={297}
                alt='ghost'
            />

        </div>
    )
}

export default Home