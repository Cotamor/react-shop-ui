import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import { mobile } from '../responsive'

const Container = styled.div``

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  ${mobile({ flexDirection: 'column', padding: '10px' })}
`
/////
const ImgContainer = styled.div`
  flex: 1;
  /* background-color: pink; */
`
const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
  ${mobile({ height: '40vh' })}
`
/////
const InfoContainer = styled.div`
  flex: 1;
  /* background-color: lightgreen; */
  padding: 0 50px;
  ${mobile({ padding: '10px' })}
`
const Title = styled.h1`
  font-weight: 200;
`
const Desc = styled.div`
  margin: 20px 0;
`
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  ${mobile({ width: '100%' })}
`
const Filter = styled.div`
  display: flex;
  align-items: center;
`
const FilterTitle = styled.div`
  font-size: 20px;
  font-weight: 200;
`
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`
const FilterSizeOption = styled.option``
/////
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: pink; */
  ${mobile({ width: '100%' })}
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`

const Amount = styled.div`
  width: 30px;
  height: 30px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-radius: 10px;
  border: 1px solid teal;
  margin: 0 5px;
`

const Button = styled.div`
  cursor: pointer;
  padding: 10px 20px;
  background-color: white;
  border: 2px solid teal;
  font-weight: 500;
  border-radius: 8px;

  &:hover {
    background-color: #f8f4f4;
  }
`

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Demin Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis velit
            dolorum vel, molestiae nostrum sapiente. Praesentium repellendus
            quam adipisci aut sequi temporibus explicabo odio? Veniam quibusdam
            obcaecati eum porro ut.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon />
              <Amount>1</Amount>
              <AddIcon />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  )
}
export default Product
