import styles from './WellnessSection.module.css'

const paragraphs = [
  "올웨이즈온은 'High Performance'라는 가치 아래 고객님의 건강한 일상을 지키기 위해 탄생했습니다.",
  '충분한 임상경험과 글로벌 실무 노하우를 기반으로, 고객님과 파트너분들의 고민은 \'진심으로\' 이해합니다.',
  '어떤 변화 앞에서도 흔들림 없는 든든한 웰니스 파트너가 되어 지속 가능한 성장을 약속드립니다.',
]

function WellnessSection() {
  return (
    <section className={styles.wellness}>
      <h2 className={styles.title}>
        올웨이즈온 웰니스,<br />당신의 건강한 삶을 든든하게 지킵니다.
      </h2>
      <div className={styles.paragraphs}>
        {paragraphs.map((text, i) => (
          <p key={i} className={styles.paragraph}>{text}</p>
        ))}
      </div>
    </section>
  )
}

export default WellnessSection
