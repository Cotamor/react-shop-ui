import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send'
import { mobile } from '../responsive'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  background-color: #fcf5f5;
`

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: 'center' })}
`
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({width: "80vw"})}
`
const Input = styled.input`
  flex: 8;
  border: none;
  outline: none;
`
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  )
}
export default Newsletter
