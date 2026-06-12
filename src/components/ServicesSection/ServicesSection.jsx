import styles from './ServicesSection.module.css'

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="16" rx="6" fill="#2B7FFF" />
      <path d="M4.5 8L6.5 10.5L11.5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const services = [
  {
    title: '맞춤형 웰니스 추천',
    desc: '개인별 신체 특성에 맞는 최적의 프리미엄 건강식품 추천',
  },
  {
    title: '비즈니스 빌드업',
    desc: '건강식품을 통한 맞춤형 사업 및 셀러 성장 가이드',
  },
  {
    title: '글로벌 네트워크 가치 공유',
    desc: '국내외 인프라를 이용한 웰니스 라이프스타일 제안',
  },
]

function ServicesSection() {
  return (
    <section className={styles.services}>
      <div className={styles.header}>
        <CheckIcon />
        <span className={styles.headerLabel}>주요 서비스</span>
      </div>
      <ul className={styles.list}>
        {services.map(({ title, desc }) => (
          <li key={title} className={styles.item}>
            <span className={styles.bullet}>•</span>
            <p className={styles.text}>
              <strong className={styles.serviceTitle}>{title}:</strong>
              <br />
              {desc}
            </p>
          </li>
        ))}
      </ul>
      <div className={styles.cta}>
        <p className={styles.ctaTitle}>당신에게 꼭 맞는 웰니스 솔루션</p>
        <p className={styles.ctaDesc}>전문 디렉터에게 상담해 보세요. 언제든 문의 주세요.</p>
      </div>
    </section>
  )
}

export default ServicesSection
