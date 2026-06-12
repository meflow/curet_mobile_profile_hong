import styles from './IntroSection.module.css'

const bullets = [
  '프리미엄 건강식품 라인업 총괄',
  '개인 맞춤형 웰니스 솔루션 및 비즈니스 시스템 최적화',
]

function IntroSection() {
  return (
    <section className={styles.intro}>
      <h2 className={styles.title}>건강식품사업총괄 홍성표 입니다.</h2>
      <ul className={styles.list}>
        {bullets.map((text) => (
          <li key={text} className={styles.item}>
            <span className={styles.bullet}>•</span>
            <span className={styles.text}>{text}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default IntroSection
