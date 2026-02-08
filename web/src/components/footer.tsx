import { IconLinkedin } from '@/assets/icons/icon-linkedin'

export function Footer() {
  return (
    <footer className="footer">
      <span>
        Desenvolvido por •{'Matheus Carmello'}•{' '} 
        <a
          href="https://www.linkedin.com/in/joaocarmello/"
          target="_blank"
          rel="noreferrer"
        >
          <IconLinkedin size={12} color="#2C46B1" />
        </a>
      </span>
    </footer>
  )
}
