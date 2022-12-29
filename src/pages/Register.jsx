import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: '75%' })}
`
const Title = styled.h1`
  font-weight: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`
const Input = styled.input`
  /* border: none; */
  flex: 1;
  min-width: 40%;
  padding: 10px;
  margin: 10px 0;
`
const Button = styled.button`
  width: 40%;
  border: none;
  background-color: teal;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  margin-bottom: 10px;
`
const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
`

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVERCY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
          <Link>ALREADY HAVE AN ACCOUNT? LOGIN</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}
export default Register
