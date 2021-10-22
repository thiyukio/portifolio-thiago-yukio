import styles from './Gallery.module.css'
import Image from 'next/image'
import Pieces from './Pieces'


export default function Gallery() {
    const pieces = Pieces.map((item) =>
    <Image
    src={item.img}
    width={item.width}
    height={297*2}
    alt={item.title}
    />
    );

    return(
        <div className={styles.container}>
        {/* <Image
        src={Pieces.img}
        width={210}
        height={297}
        alt='ghost'
        /> */}
        {pieces}
        </div>
        
    )
}