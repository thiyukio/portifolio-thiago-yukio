import Layout from '../components/layout';
import Image from 'next/image';
import spook from '../static/spooktober11.png';

import Head from './head'

function Home() {
    return(
        <>
        <Head/>
        <div> 
        {/* <Image
            src={spook}
        /> */}
        </div>
        </>
    )
}

export default Home