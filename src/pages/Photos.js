import React, { useState } from "react"
import styled from "styled-components"
import GlassLayout from "../components/GlassLayout"
import SEO from "../components/seo"
import Cell from "../components/Cell"
import Portraits from "../../json_data/portraitsdata.json"
import Travel from "../../json_data/traveldata.json"
import Urban from "../../json_data/photosdata.json"

const ink = "#0B0B0D"

const CATEGORIES = {
  Portraits: Portraits.cells,
  Travel: Travel.cells,
  Urban: Urban.cells,
}

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
`

const Intro = styled.p`
  margin: 26px 0 0;
  max-width: 560px;
  font-size: 18px;
  line-height: 1.5;
  color: #4a4a52;
`

const Body = styled.section`
  max-width: 1180px;
  margin: 0 auto;
  padding: 34px 22px 130px;
`

const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
`

const FilterChip = styled.button`
  font-family: inherit;
  font-size: 15px;
  font-weight: 600;
  padding: 10px 18px;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.14s;
  background: ${props => (props.$active ? ink : "#fff")};
  color: ${props => (props.$active ? "#fff" : "#4A4A52")};
  border: 1px solid ${props => (props.$active ? ink : "#E2E2E7")};

  &:hover,
  &:focus-visible {
    border-color: ${ink};
  }
`

const PhotoColumns = styled.div`
  column-count: 3;
  column-gap: 20px;

  @media (max-width: 900px) {
    column-count: 2;
  }

  @media (max-width: 560px) {
    column-count: 1;
  }
`

const PhotosPage = () => {
  const [category, setCategory] = useState("Portraits")

  return (
    <GlassLayout pillHref="/contact" pillLabel="Available for work · say hello">
      <SEO title="Photography" keywords={[`photography`, `jamal rasool`, `trujamal`]} />

      <Hero>
        <Kicker>Play</Kicker>
        <Headline>Photography</Headline>
        <Intro>
          A natural eye for the environment and the people in it. A look into some of the work
          I&#39;ve shot and edited.
        </Intro>
      </Hero>

      <Body>
        <FilterRow role="group" aria-label="Photo categories">
          {Object.keys(CATEGORIES).map(name => (
            <FilterChip
              key={name}
              type="button"
              $active={category === name}
              aria-pressed={category === name}
              onClick={() => setCategory(name)}
            >
              {name}
            </FilterChip>
          ))}
        </FilterRow>
        <PhotoColumns>
          {CATEGORIES[category].map(cell => (
            <Cell key={cell.image} image={cell.image} />
          ))}
        </PhotoColumns>
      </Body>
    </GlassLayout>
  )
}

export default PhotosPage
