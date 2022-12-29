import { Add, Remove } from '@mui/icons-material'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive'

const Container = styled.div``
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: '10px' })}
`
const Title = styled.h1`
  text-align: center;
  font-weight: 300;
`
/////
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  ${mobile({ gap: '10px' })}
`
const TopButton = styled.div`
  border: 1px solid gray;
  padding: 10px 20px;
  cursor: pointer;
  border: ${(props) => props.type === 'filled' && 'none'};
  background-color: ${(props) =>
    props.type === 'filled' ? 'black' : 'transparent'};
  color: ${(props) => props.type === 'filled' && 'white'};
  ${mobile({ padding: '10px', textAlign: 'center' })}
`
const TopTexts = styled.div`
  display: flex;
  text-decoration: underline;
  gap: 20px;
  ${mobile({ display: 'none' })}
`
const TopText = styled.div`
  cursor: pointer;
`

////
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`
//// Product Info
const Info = styled.div`
  flex: 3;
  width: 100%;
  height: 100%;
  /* background-color: pink; */
`
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  ${mobile({ flexDirection: 'column' })}
`
//
const ProductDetail = styled.div`
  flex: 3;
  /* background-color: yellow; */
  display: flex;
  align-items: center;
  gap: 20px;
`
const Image = styled.img`
  width: 200px;
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const ProductName = styled.div``
const ProductId = styled.div``
const ProductColor = styled.div`
  width: 25px;
  height: 25px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`
const ProductSize = styled.div``

//
const PriceDetail = styled.div`
  flex: 2;
  /* background-color: gray; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
`
const ProductAmount = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 20px;
`
const ProductPrice = styled.div`
  font-size: 28px;
  font-weight: 300;
`

//// Product Summery
const Summery = styled.div`
  flex: 1;
  padding: 20px;
  height: 50vh;
  border-radius: 10px;
  border: 0.5px solid lightgray;
`

const SummeryTitle = styled.h1`
  font-weight: 200;
  margin-bottom: 10px;
`
const SummeryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && '500'};
  font-size: ${(props) => props.type === 'total' && '24px'};
  margin-bottom: 10px;
`
const SummeryItemText = styled.span``
const SummeryItemPrice = styled.span``
const Button = styled.button`
  width: 100%;
  padding: 10px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
`
const Hr = styled.hr``

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Details>
                  <ProductName>
                    <b>Product:</b> Haruru T-SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>123456834
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Remove />
                  <ProductAmount>1</ProductAmount>
                  <Add />
                </ProductAmountContainer>
                <ProductPrice>$ 20</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> Haruru T-SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>123456834
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Remove />
                  <ProductAmount>1</ProductAmount>
                  <Add />
                </ProductAmountContainer>
                <ProductPrice>$ 20</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summery>
            <SummeryTitle>ORDER SUMMERY</SummeryTitle>
            <SummeryItem>
              <SummeryItemText>Subtotal</SummeryItemText>
              <SummeryItemPrice>$ 80.0</SummeryItemPrice>
            </SummeryItem>
            <SummeryItem>
              <SummeryItemText>Estimated Shipping</SummeryItemText>
              <SummeryItemPrice>$ 5.90</SummeryItemPrice>
            </SummeryItem>
            <SummeryItem>
              <SummeryItemText>Shipping Discount</SummeryItemText>
              <SummeryItemPrice>-$ 5.90</SummeryItemPrice>
            </SummeryItem>
            <SummeryItem type="total">
              <SummeryItemText>Total</SummeryItemText>
              <SummeryItemPrice>$ 80.0</SummeryItemPrice>
            </SummeryItem>
            <Button type="filled">CHECKOUT NOW</Button>
          </Summery>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}
export default Cart
