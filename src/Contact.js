import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return(
    <Wrapper>
      <h2 className="common-heading">Contact Page</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14058.225864432403!2d77.84852668716447!3d28.25113892284889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ca93b6baa34d1%3A0x1e329858f2851a12!2sKhurja%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1674107784043!5m2!1sen!2sin" 
      width="100%" 
      height="400" 
      style={{border:0}}
      allowFullScreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade">
      </iframe>

      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/mrgvbajy" method="POST" className="contact-inputs">
              <input type="text" name="username" required autoComplete="off" placeholder="username" ></input>
              <input type="email" name="mail" required autoComplete="off" placeholder="write your e-mail" ></input>
              <textarea name="message" cols="15" rows="15" placeholder="Enter your message" required autoComplete="off"></textarea>
              <input type= "submit" value="submit" ></input>
          </form>
        </div>
      </div>
    </Wrapper>
  ) 
};

export default Contact;
