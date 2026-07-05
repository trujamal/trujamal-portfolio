import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import GlassLayout from "../components/GlassLayout"
import SEO from "../components/seo"

const ink = "#0B0B0D"

const Hero = styled.header`
  max-width: 1180px;
  margin: 0 auto;
  padding: 150px 22px 20px;
`

const Kicker = styled.p`
  margin: 0 0 18px;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #71717a;
`

const Headline = styled.h1`
  margin: 0;
  font-size: clamp(56px, 10vw, 128px);
  line-height: 0.92;
  letter-spacing: -0.045em;
  font-weight: 700;
  color: ${ink};

  span {
    color: #b6b6be;
  }
`

const Body = styled.section`
  max-width: 1180px;
  margin: 0 auto;
  padding: 44px 22px 130px;
`

const BodyGrid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 28px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const cardShadow = `box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 26px 48px -30px rgba(20, 10, 40, 0.28);`

const StoryCard = styled.div`
  background: #fff;
  border-radius: 26px;
  padding: clamp(28px, 3.4vw, 44px);
  ${cardShadow}
`

const StoryTitle = styled.h2`
  margin: 0 0 20px;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: -0.02em;
`

const StoryText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-size: 17px;
  line-height: 1.6;
  color: #4a4a52;

  p {
    margin: 0;
  }

  strong {
    color: ${ink};
    font-weight: 700;
  }
`

const SideColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`

const FactCard = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 24px 26px;
  ${cardShadow}
`

const CardLabel = styled.span`
  display: block;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #71717a;
`

const CardValue = styled.span`
  display: block;
  margin-top: 8px;
  font-size: 18px;
  font-weight: 700;
`

const CtaCard = styled.div`
  background: ${ink};
  border-radius: 20px;
  padding: 26px 28px;
  color: #fff;
`

const CtaText = styled.p`
  margin: 0 0 18px;
  font-size: 17px;
  line-height: 1.5;
  color: #b6b6be;
`

const CtaButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #fff;
  color: ${ink};
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  padding: 13px 24px;
  border-radius: 100px;
  transition: transform 0.15s;

  &:hover,
  &:focus-visible {
    transform: scale(1.03);
  }
`

const AboutPage = () => (
  <GlassLayout pillHref="/contact" pillLabel="Available for work · say hello">
    <SEO title="About" keywords={[`about`, `jamal rasool`, `trujamal`]} />

    <Hero>
      <Kicker>About</Kicker>
      <Headline>
        Hey, I&#39;m <span>Jamal.</span>
      </Headline>
    </Hero>

    <Body>
      <BodyGrid>
        <StoryCard>
          <StoryTitle>The story so far</StoryTitle>
          <StoryText>
            <p>
              Originally from Japan, I&#39;ve traveled the globe exploring different cultures and
              meeting diverse groups of people. That shaped how I work: curious first, opinionated
              second.
            </p>
            <p>
              I love nurturing great ideas into beautiful, functional and profitable digital
              products. For over a decade I&#39;ve worked with agencies, start-ups and companies
              across the globe on everything from mobile UI/UX for restaurant reservation systems
              to App Store featured apps. Today most of my energy goes into{" "}
              <strong>Minuteboo</strong>, the studio I founded, where we design and build products
              for clients end-to-end.
            </p>
            <p>
              Alongside design and code, I spend my time traveling, shooting portraits and
              landscapes, and producing EDM edits and mixes.
            </p>
          </StoryText>
        </StoryCard>

        <SideColumn>
          <FactCard>
            <CardLabel>Currently</CardLabel>
            <CardValue>Founder, Minuteboo</CardValue>
          </FactCard>
          <FactCard>
            <CardLabel>Focus</CardLabel>
            <CardValue>Product design · iOS · Web · Brand</CardValue>
          </FactCard>
          <FactCard>
            <CardLabel>Based</CardLabel>
            <CardValue>Remote · CST</CardValue>
          </FactCard>
          <CtaCard>
            <CtaText>Want the full picture? Browse the work or just say hi.</CtaText>
            <CtaButton to="/contact">Say hello →</CtaButton>
          </CtaCard>
        </SideColumn>
      </BodyGrid>
    </Body>
  </GlassLayout>
)

export default AboutPage
