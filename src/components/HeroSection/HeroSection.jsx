import styles from './HeroSection.module.css'
import profileImg from '../../assets/images/profileImg.webp'
import logoImg from '../../assets/images/logoImg.webp'

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <img src={profileImg} alt="홍성표" className={styles.profileImage} />
      </div>
      <img src={logoImg} alt="올웨이즈온 로고" className={styles.logo} />
      <div className={styles.overlay}>
        <div className={styles.info}>
          <h1 className={styles.name}>홍성표</h1>
          <p className={styles.role}>식품사업부 총괄 디렉터</p>
          <p className={styles.company}>올 웨이즈 온</p>
        </div>
        <div className={styles.tag}>건강식품&nbsp;&nbsp;All ways on</div>
      </div>
    </section>
  )
}

export default HeroSection
