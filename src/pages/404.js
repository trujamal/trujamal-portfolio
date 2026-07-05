import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import GlassLayout from "../components/GlassLayout"
import SEO from "../components/seo"

const ink = "#0B0B0D"

/* The original silly gif, self-hosted since the redesign */
const Hero = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(rgba(11, 11, 13, 0.35), rgba(11, 11, 13, 0.35)),
    url("/images/404-error.gif");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

const HeroInner = styled.div`
  max-width: 1180px;
  width: 100%;
  margin: 0 auto;
  padding: 170px 22px 130px;
`

const Kicker = styled.p`
  margin: 0 0 18px;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #e6edf1;
`

const Headline = styled.h1`
  margin: 0;
  font-size: clamp(72px, 14vw, 160px);
  line-height: 0.92;
  letter-spacing: -0.045em;
  font-weight: 700;
  color: #e6edf1;
`

const Intro = styled.p`
  margin: 26px 0 0;
  max-width: 480px;
  font-size: 18px;
  line-height: 1.5;
  color: #e6edf1;
`

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 34px;
  width: fit-content;
  background: #fff;
  color: ${ink};
  text-decoration: none;
  font-size: 17px;
  font-weight: 700;
  padding: 15px 28px;
  border-radius: 100px;
  transition: transform 0.15s;

  &:hover,
  &:focus-visible {
    transform: scale(1.02);
  }
`

const NotFoundPage = () => (
  <GlassLayout pillHref="/#work" pillLabel="Available for work · view portfolio">
    <SEO title="How did you get here?" />
    <Hero>
      <HeroInner>
        <Kicker>404</Kicker>
        <Headline>No es bueno.</Headline>
        <Intro>
          You came here, looking for something, and all you get is this silly gif. Not good. Not
          good, at all.
        </Intro>
        <BackButton to="/">Back to square one →</BackButton>
      </HeroInner>
    </Hero>
  </GlassLayout>
)

export default NotFoundPage
