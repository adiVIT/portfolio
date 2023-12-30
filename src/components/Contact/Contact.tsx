import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact me</h2>
        
      
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:adityabajaj2222@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:adityabajaj2222@gmail.com">adityabajaj2222@gmail.com</a>
        </div>
        <div>
        <a href="tel:+917651820026"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919630576848">(+91) 7651820026</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}