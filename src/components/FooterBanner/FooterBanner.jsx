import styles from './FooterBanner.module.css'
import bannerImg from '../../assets/images/bannerImg.webp'

function FooterBanner() {
  return (
    <section className={styles.banner}>
      <img src={bannerImg} alt="올웨이즈온 배너" className={styles.image} />
    </section>
  )
}

export default FooterBanner
