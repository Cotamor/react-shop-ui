import styled from 'styled-components'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined'
import { useState } from 'react'
import { sliderItems } from '../data'
import { mobile } from '../responsive'

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 90px);

  overflow: hidden;
  position: relative;
  ${mobile({display: 'none'})}
`
const Arrow = styled.div`
  position: absolute;
  inset-block: 0;
  margin: auto;
  background-color: pink;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff7f7;
  opacity: 0.5;
  cursor: pointer;
  z-index: 5;
`

const Wrapper = styled.div`
  width: 300vw;
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`
const Slide = styled.div`
  width: 100vw;
  height: 100%;

  display: flex;
  background-color: #${(props) => props.bg};
`

const ImageContainer = styled.div`
  flex: 1.3;
`
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5vh;
`
const Title = styled.h1`
  font-size: 70px;
`

const Desc = styled.p`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1)

  const handleClick = (direction) => {
    if (direction === 'left') {
      console.log('left')
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    } else {
      console.log('right')
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
    console.log(slideIndex)
  }

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowBackOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <ArrowForwardOutlinedIcon />
      </Arrow>
    </Container>
  )
}
export default Slider
