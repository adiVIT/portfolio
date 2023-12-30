import { Container } from './styles'

import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'

import instagramIcon from '../../assets/instagram.svg'
import leetcode from "../../assets/leetcode.svg";
// import discordIcon from '../../assets/discord.png'

export function Footer() {
  return (
    <Container className="footer">
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/aditya-bajaj-6128811b6/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/adiVIT"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        
        
        <a
          href="https://www.instagram.com/aditya_bajaj_111/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a
          href="https://leetcode.com/adityabajaj22/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={leetcode} alt="leetcode" />
        </a>
     
      </div>
    </Container>
  )
}
