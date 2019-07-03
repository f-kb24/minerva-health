import React from "react"
import styled, { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`
  body{
    background-color: #e1e5ea;
  }
  @keyframes toTop {
    0%{
      opacity: 0;
      transform: translateY(5rem)
    }
    100%{
      opacity: 1;
      transform: translateY(0rem)
    }
  }
`

const Background = styled.img`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  @media (max-width: 1200px) {
    margin-top: 4rem;
  }
  @media (max-width: 1000px) {
    margin-top: 13rem;
  }
`
const Container = styled.div`
  position: relative;
`
const Title = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 7rem;
  padding-left: 5rem;
  max-width: 45%;
  min-width: 480px;

  @media (max-width: 1600px) {
    padding-top: 5rem;
  }
  @media (max-width: 1400px) {
    padding-top: 1.5rem;
    padding-left: 3rem;
  }
  @media (max-width: 1000px) {
    margin: 0 auto;
    align-items: center;
    text-align: center;
    padding-left: 0rem;
  }
`

const TitleTitle = styled.div`
  min-width: 480px;
  display: flex;
  margin-bottom: 0.4rem;
  text-decoration: underline;
  animation-name: toTop;
  animation-duration: 700ms;
  animation-timing-function: ease-out;
  /* justify-content: center; */
  @media (max-width: 1600px) {
    margin-bottom: 0.3rem;
  }
`
const Left = styled.h1`
  padding: 0;
  margin: 0;
  font-family: "Montserrat", sans-serif;
  font-size: 3.5rem;
  color: #21262e;
  @media (max-width: 1400px) {
    font-size: 2.8rem;
  }
`

const Right = styled(Left)`
  color: #606e85;
  @media (max-width: 1400px) {
    font-size: 2.8rem;
  }
`

const Text = styled.div`
  font-size: 1.3rem;
  font-family: "Roboto", sans-serif;
  line-height: 1.7rem;
  letter-spacing: 0.5px;
  animation-name: toTop;

  animation-duration: 700ms;
  animation-timing-function: ease-out;
  animation-delay: 300ms;
  animation-fill-mode: forwards;
  opacity: 0;

  @media (max-width: 1600px) {
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
  @media (max-width: 1200px) {
    font-size: 1rem;
    line-height: 1.4rem;
  }
`

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 1rem;
  padding-right: 6rem;
  @media (max-width: 1400px) {
    padding-right: 3rem;
  }
  @media (max-width: 1000px) {
    justify-content: center;
    padding-right: 0rem;
  }
`

const LearnButton = styled.button`
  padding: 0.5rem 0rem;
  border: 3px solid #21262e;
  border-radius: 4px;
  background-color: #e1e5ea;
  color: #21262e;
  margin-top: 1rem;
  font-family: "Roboto", sans-serif;
  font-size: 1.3rem;
  width: 11rem;
  transition-duration: 150ms;
  animation-name: toTop;
  transition-timing-function: ease-in;
  animation-duration: 700ms;
  animation-timing-function: ease-out;
  animation-delay: 300ms;
  animation-fill-mode: forwards;
  opacity: 0;
  outline: none;
  cursor: pointer;
  &:hover {
    color: #e1e5ea;
    background-color: #21262e;
  }

  @media (max-width: 1600px) {
    font-size: 1.1rem;
    width: 10rem;
  }
`

const HeaderLink = styled.a`
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  padding: 0.3rem 0rem 0.3rem 2rem;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  &:visited,
  &:active,
  &:link {
    color: #21262e;
  }
  @media (max-width: 1400px) {
    font-size: 1rem;
    padding-left: 1.5rem;
  }
  @media (max-width: 1000px) {
    padding-top: 0rem;
  }
`

const Links = styled.div`
  height: 100vh;
`

const Card = styled.div`
  height: 28rem;
  width: 30%;
  background-color: #21262e;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  @media (max-width: 1600px) {
    height: 25rem;
  }
  @media (max-width: 1200px) {
    height: 23rem;
    width: 32%;
  }
  @media (max-width: 1000px) {
    width: 50%;
    margin-bottom: 1rem;
  }
`

const CardText = styled.div`
  color: #e1e5ea;
  font-family: "Roboto", sans-serif;
  font-size: 1.1rem;
  padding: 1rem 3rem;
  line-height: 1.6rem;
  @media (max-width: 1200px) {
    font-size: 1rem;
  }
  @media (max-width: 1100px) {
    padding: 1rem;
    text-align: justify;
  }
`

const CardButton = styled.button`
  width: 15rem;
  outline: none;
  border: 3px solid #e1e5ea;
  border-radius: 4px;
  background-color: #e1e5ea;
  color: #21262e;
  font-family: "Roboto", sans-serif;
  padding: 0.5rem 0.8rem;
  font-size: 1.2rem;
  transition-duration: 150ms;
  transition-timing-function: ease-in;
  cursor: pointer;
  &:hover {
    background-color: #21262e;
    color: #e1e5ea;
  }
  @media (max-width: 1300px) {
    width: 11rem;
    padding: 0.3rem 0.6rem;
    font-size: 1.1rem;
  }
`

const CardImg = styled.img`
  width: 100%;
  margin-bottom: 0rem;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`
const BottomCardContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-bottom: 1rem;
  align-items: center;
`

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  margin-top: 43rem;

  @media (max-width: 1700px) {
    margin-top: 35rem;
  }
  @media (max-width: 1500px) {
    margin-top: 30rem;
  }
  @media (max-width: 1300px) {
    margin-top: 25rem;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

const IndexPage = () => (
  <>
    <Container>
      <Global />

      <Header>
        <HeaderLink>Why Minerva</HeaderLink>
        <HeaderLink>Doctors & Locations</HeaderLink>
        <HeaderLink>Health & Wellness</HeaderLink>
        <HeaderLink>Careers</HeaderLink>
      </Header>
      <Title>
        <TitleTitle>
          <Left>MINERVA</Left>
          <Right>HEALTH</Right>
        </TitleTitle>
        <Text>
          We operate the backbone of the healthcare supply chain. We drive the
          future of local care delivery. We guide medical innovations to market.
          This is what it means to create healthier futures.
        </Text>
        <LearnButton>Learn More</LearnButton>
      </Title>
      <Background src="https://res.cloudinary.com/dg8szh4ec/image/upload/v1562061170/test2.svg"></Background>
    </Container>
    <Links>
      <CardContainer>
        <Card>
          <CardImg src="https://res.cloudinary.com/dg8szh4ec/image/upload/w_400/c_crop,w_400,h_200/q_auto/v1562101917/pexels-photo-668298.jpg" />
          <BottomCardContainer>
            <CardText>
              Our partners and clients have specific and complicated use cases,
              find out how we solve these problems.
            </CardText>
            <CardButton>Learn More</CardButton>
          </BottomCardContainer>
        </Card>

        <Card>
          <CardImg src="https://res.cloudinary.com/dg8szh4ec/image/upload/w_400/c_crop,w_400,h_200/q_auto/v1562101917/doctor-medical-medicine-health-42273.jpg" />
        </Card>
        <Card>
          <CardImg src="https://res.cloudinary.com/dg8szh4ec/image/upload/w_400/c_crop,w_400,h_200/v1562101917/pexels-photo-1170979.jpg" />
        </Card>
      </CardContainer>
    </Links>
  </>
)

export default IndexPage
