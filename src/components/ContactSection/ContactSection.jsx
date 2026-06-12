import styles from './ContactSection.module.css'

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 4L10 8L6 12" stroke="#90A1B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ContactRow({ label, value, href }) {
  return (
    <a className={styles.row} href={href} target="_blank" rel="noopener noreferrer">
      <span className={styles.label}>{label}</span>
      <div className={styles.valueWrapper}>
        <span className={styles.value}>{value}</span>
        <span className={styles.arrowBtn} aria-hidden="true">
          <ArrowIcon />
        </span>
      </div>
    </a>
  )
}

const NAVER_MAP_URL =
  'https://map.naver.com/p/search/' + encodeURIComponent('서울특별시 서초구 서운로 13')

function ContactSection() {
  return (
    <section className={styles.contact}>
      <ContactRow label="휴대전화" value="010-8383-0718" href="tel:010-8383-0718" />
      <ContactRow label="이메일" value="nmnlabs@naver.com" href="mailto:nmnlabs@naver.com" />
      <ContactRow label="주소" value="서울특별시 서초구 서운로 13 지하1층" href={NAVER_MAP_URL} />
    </section>
  )
}

export default ContactSection
