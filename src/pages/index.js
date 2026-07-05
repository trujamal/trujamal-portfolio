import React, { useRef, useState } from "react"
import { Link } from "gatsby"
import styled, { keyframes } from "styled-components"
import GlassLayout from "../components/GlassLayout"
import SEO from "../components/seo"
import projectsData from "../../json_data/projectsdata.json"

const ink = "#0B0B0D"

const floatIn = keyframes`
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
`

/* ---------- Hero ---------- */

const Hero = styled.header`
  max-width: 1180px;
  margin: 0 auto;
  padding: 150px 22px 34px;
  animation: ${floatIn} 0.7s cubic-bezier(0.2, 0.8, 0.2, 1);
`

const HeroRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 28px;
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

const HeroNav = styled.nav`
  display: flex;
  gap: 26px;
  padding-bottom: 14px;
`

const HeroNavCurrent = styled.a`
  font-size: 17px;
  font-weight: 700;
  color: ${ink};
  text-decoration: none;
  padding-bottom: 6px;
  border-bottom: 2px solid ${ink};
`

const HeroNavAnchor = styled.a`
  font-size: 17px;
  color: #71717a;
  text-decoration: none;
  padding-bottom: 6px;

  &:hover {
    color: ${ink};
  }
`

const HeroNavLink = styled(Link)`
  font-size: 17px;
  color: #71717a;
  text-decoration: none;
  padding-bottom: 6px;

  &:hover {
    color: ${ink};
  }
`

const Intro = styled.p`
  margin: 26px 0 0;
  max-width: 560px;
  font-size: 18px;
  line-height: 1.5;
  color: #4a4a52;
`

/* ---------- Craft grid (flip cards) ---------- */

const CraftSection = styled.section`
  max-width: 1180px;
  margin: 0 auto;
  padding: 20px 22px 40px;
`

const CraftGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const FlipCard = styled.div`
  perspective: 1200px;
`

const FlipInner = styled.div`
  display: grid;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  transform: rotateY(${props => (props.$flipped ? "180deg" : "0deg")});
  height: 100%;
`

const cardFace = `
  grid-area: 1 / 1;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  position: relative;
  background: #fff;
  border-radius: 22px;
  padding: 28px 28px 30px;
  min-height: 290px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 26px 48px -28px rgba(20, 10, 40, 0.28);
`

const CardFront = styled.div`
  ${cardFace}
`

const CardBack = styled.div`
  ${cardFace}
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
`

const CardTitle = styled.h3`
  margin: 0;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: -0.02em;
`

const CardSub = styled.p`
  margin: 9px 0 0;
  font-size: 15px;
  color: #71717a;
`

const CardDetail = styled.p`
  margin: 16px 0 0;
  font-size: 16px;
  line-height: 1.55;
  color: #4a4a52;
  max-width: 300px;
`

const CardArt = styled.div`
  margin-top: 22px;

  svg {
    display: block;
    max-width: 100%;
  }
`

const CardButton = styled.button`
  position: absolute;
  right: 24px;
  bottom: 24px;
  width: 46px;
  height: 46px;
  border: none;
  border-radius: 50%;
  background: ${ink};
  color: #fff;
  font-size: 22px;
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: transform 0.15s, background 0.15s;

  &:hover,
  &:focus-visible {
    background: #2a2a30;
    transform: scale(1.06);
  }
`

/* Line-art from the design mock */
const art = {
  productDesign: (
    <svg width="118" height="118" viewBox="0 0 118 118" fill="none" aria-hidden="true">
      <circle cx="59" cy="59" r="52" stroke={ink} strokeWidth="1.4" />
      <circle cx="59" cy="59" r="38" stroke={ink} strokeWidth="1.4" />
      <circle cx="59" cy="59" r="24" stroke={ink} strokeWidth="1.4" />
      <circle cx="59" cy="59" r="10" stroke={ink} strokeWidth="1.4" />
      <circle cx="59" cy="59" r="3" fill={ink} />
    </svg>
  ),
  ios: (
    <svg width="118" height="112" viewBox="0 0 130 112" fill="none" aria-hidden="true">
      <circle cx="52" cy="42" r="30" stroke={ink} strokeWidth="1.4" />
      <circle cx="78" cy="42" r="30" stroke={ink} strokeWidth="1.4" />
      <circle cx="65" cy="70" r="30" stroke={ink} strokeWidth="1.4" />
    </svg>
  ),
  web: (
    <svg width="150" height="112" viewBox="0 0 150 112" fill="none" aria-hidden="true">
      <g stroke={ink} strokeWidth="1.3">
        <line x1="24" y1="30" x2="60" y2="20" />
        <line x1="60" y1="20" x2="104" y2="34" />
        <line x1="104" y1="34" x2="130" y2="20" />
        <line x1="24" y1="30" x2="40" y2="64" />
        <line x1="40" y1="64" x2="60" y2="20" />
        <line x1="40" y1="64" x2="82" y2="76" />
        <line x1="82" y1="76" x2="104" y2="34" />
        <line x1="82" y1="76" x2="118" y2="88" />
        <line x1="118" y1="88" x2="130" y2="20" />
        <line x1="40" y1="64" x2="66" y2="96" />
      </g>
      <g fill="#fff" stroke={ink} strokeWidth="1.3">
        <circle cx="24" cy="30" r="4.5" />
        <circle cx="60" cy="20" r="4.5" />
        <circle cx="104" cy="34" r="4.5" />
        <circle cx="130" cy="20" r="4.5" />
        <circle cx="40" cy="64" r="4.5" />
        <circle cx="82" cy="76" r="4.5" />
        <circle cx="118" cy="88" r="4.5" />
        <circle cx="66" cy="96" r="4.5" />
      </g>
    </svg>
  ),
  brand: (
    <svg width="130" height="112" viewBox="0 0 140 112" fill="none" aria-hidden="true">
      <g stroke={ink} strokeWidth="1.3" fill="none">
        <rect x="24" y="24" width="64" height="64" />
        <rect x="24" y="24" width="64" height="64" transform="rotate(22 56 56)" />
        <rect x="24" y="24" width="64" height="64" transform="rotate(45 56 56)" />
      </g>
    </svg>
  ),
  music: (
    <svg width="118" height="112" viewBox="0 0 118 112" fill="none" aria-hidden="true">
      <g fill={ink}>
        <circle cx="59" cy="12" r="2.2" />
        <circle cx="59" cy="106" r="2.2" />
        <circle cx="12" cy="59" r="2.2" />
        <circle cx="106" cy="59" r="2.2" />
        <circle cx="26" cy="26" r="2.2" />
        <circle cx="92" cy="26" r="2.2" />
        <circle cx="26" cy="92" r="2.2" />
        <circle cx="92" cy="92" r="2.2" />
        <circle cx="59" cy="26" r="2" />
        <circle cx="59" cy="92" r="2" />
        <circle cx="26" cy="59" r="2" />
        <circle cx="92" cy="59" r="2" />
        <circle cx="41" cy="34" r="1.8" />
        <circle cx="77" cy="34" r="1.8" />
        <circle cx="41" cy="84" r="1.8" />
        <circle cx="77" cy="84" r="1.8" />
        <circle cx="34" cy="41" r="1.8" />
        <circle cx="84" cy="41" r="1.8" />
        <circle cx="34" cy="77" r="1.8" />
        <circle cx="84" cy="77" r="1.8" />
      </g>
      <circle cx="59" cy="59" r="8" fill="#fff" stroke={ink} strokeWidth="1.4" />
    </svg>
  ),
  photography: (
    <svg width="118" height="112" viewBox="0 0 118 112" fill="none" aria-hidden="true">
      <g stroke={ink} strokeWidth="1.4" fill="none">
        <ellipse cx="59" cy="34" rx="46" ry="10" />
        <ellipse cx="59" cy="50" rx="46" ry="10" />
        <ellipse cx="59" cy="66" rx="46" ry="10" />
        <ellipse cx="59" cy="82" rx="46" ry="10" />
      </g>
    </svg>
  ),
}

const crafts = [
  {
    title: "Product Design",
    sub: "Interfaces for mobile & web.",
    art: art.productDesign,
    detail:
      "Design systems, user interfaces, prototypes and motion. I lead product design from research through polished, shippable screens.",
  },
  {
    title: "iOS Development",
    sub: "Native Swift & SwiftUI.",
    art: art.ios,
    detail:
      "Native apps in Swift and SwiftUI. Shipping to the App Store since 2015, the discipline that keeps everything else honest.",
  },
  {
    title: "Web Development",
    sub: "Full-stack, front to back.",
    art: art.web,
    detail:
      "Responsive interfaces and the services behind them, from static marketing sites to full product platforms.",
  },
  {
    title: "Brand Identity",
    sub: "Marks, systems, voice.",
    art: art.brand,
    detail:
      "I establish the artistic tone of a product with identity systems built on simple geometric shapes, tailored for modern businesses.",
  },
  {
    title: "Music & Mixing",
    sub: "Producing after hours.",
    art: art.music,
    detail: "Edits, remixes and full mixes, produced after hours and released on SoundCloud.",
  },
  {
    title: "Photography",
    sub: "Light, street & product.",
    art: art.photography,
    detail:
      "The way I learned composition, contrast and patience. It shows up in everything I design.",
  },
]

/* ---------- Selected work ---------- */

const WorkSection = styled.section`
  max-width: 1180px;
  margin: 0 auto;
  padding: 56px 22px 40px;
`

const WorkHead = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 8px;
`

const WorkTitle = styled.h2`
  margin: 0;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #71717a;
`

const WorkYears = styled.span`
  font-size: 15px;
  color: #71717a;
`

const WorkRow = styled.a`
  display: grid;
  grid-template-columns: 1.4fr 1fr auto;
  align-items: center;
  gap: 20px;
  padding: 22px 6px;
  border-top: 1px solid rgba(11, 11, 13, 0.12);
  text-decoration: none;
  color: ${ink};
  transition: background 0.15s;

  &:hover,
  &:focus-visible {
    background: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr auto;
  }
`

const WorkName = styled.span`
  font-size: clamp(22px, 2.4vw, 30px);
  font-weight: 700;
  letter-spacing: -0.02em;
`

const WorkTag = styled.span`
  font-size: 15px;
  color: #71717a;

  @media (max-width: 640px) {
    display: none;
  }
`

const WorkYear = styled.span`
  font-size: 15px;
  color: #71717a;
  font-variant-numeric: tabular-nums;
  justify-self: end;
`

const WorkEnd = styled.div`
  border-top: 1px solid rgba(11, 11, 13, 0.12);
`

/* Newest first; a year like "2015-2019" sorts by its latest year */
const latestYear = cell => {
  const years = String(cell.year).match(/\d{4}/g) || ["0"]
  return Math.max(...years.map(Number))
}

const sortedProjects = [...projectsData.cells].sort((a, b) => latestYear(b) - latestYear(a))

/* ---------- About ---------- */

const AboutSection = styled.section`
  max-width: 1180px;
  margin: 0 auto;
  padding: 60px 22px 30px;
`

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`

const AboutLede = styled.p`
  margin: 0;
  font-size: clamp(26px, 3vw, 40px);
  line-height: 1.22;
  letter-spacing: -0.02em;
  font-weight: 500;

  span {
    color: #b6b6be;
  }
`

const AboutBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-size: 17px;
  line-height: 1.55;
  color: #4a4a52;

  p {
    margin: 0;
  }

  strong {
    color: ${ink};
    font-weight: 700;
  }
`

const AboutMore = styled(Link)`
  font-size: 17px;
  font-weight: 700;
  color: ${ink};
  text-decoration: none;

  &:hover {
    opacity: 0.7;
  }
`

/* ---------- Contact CTA ---------- */

const Footer = styled.footer`
  max-width: 1180px;
  margin: 0 auto;
  padding: 70px 22px 130px;
`

const CtaCard = styled.div`
  background: ${ink};
  border-radius: 28px;
  padding: clamp(36px, 5vw, 66px);
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 34px;
`

const CtaHeadline = styled.h2`
  margin: 0;
  font-size: clamp(40px, 6.5vw, 88px);
  line-height: 0.95;
  letter-spacing: -0.04em;
  font-weight: 700;

  span {
    color: #6e6e76;
  }
`

const CtaRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 22px;
`

const CtaButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: #fff;
  color: ${ink};
  text-decoration: none;
  font-size: 18px;
  font-weight: 700;
  padding: 16px 26px;
  border-radius: 100px;
  transition: transform 0.15s;

  &:hover,
  &:focus-visible {
    transform: scale(1.03);
  }
`

const Socials = styled.div`
  display: flex;
  gap: 26px;
`

const SocialLink = styled.a`
  color: #b6b6be;
  text-decoration: none;
  font-size: 16px;

  &:hover,
  &:focus-visible {
    color: #fff;
  }
`

const Copyright = styled.p`
  margin: 24px 4px 0;
  font-size: 14px;
  color: #71717a;
`

const CraftCard = ({ craft }) => {
  const [flipped, setFlipped] = useState(false)
  const frontButton = useRef(null)
  const backButton = useRef(null)

  // Keep focus out of the aria-hidden face after a flip
  const flip = to => {
    setFlipped(to)
    const target = to ? backButton.current : frontButton.current
    if (target) target.focus()
  }

  return (
    <FlipCard>
      <FlipInner $flipped={flipped}>
        <CardFront aria-hidden={flipped}>
          <CardTitle>{craft.title}</CardTitle>
          <CardSub>{craft.sub}</CardSub>
          <CardArt>{craft.art}</CardArt>
          <CardButton
            ref={frontButton}
            type="button"
            aria-expanded={flipped}
            aria-label={`About ${craft.title}`}
            onClick={() => flip(true)}
            tabIndex={flipped ? -1 : 0}
          >
            +
          </CardButton>
        </CardFront>
        <CardBack aria-hidden={!flipped}>
          <CardTitle>{craft.title}</CardTitle>
          <CardDetail>{craft.detail}</CardDetail>
          <CardButton
            ref={backButton}
            type="button"
            aria-label={`Close ${craft.title} details`}
            onClick={() => flip(false)}
            tabIndex={flipped ? 0 : -1}
          >
            ×
          </CardButton>
        </CardBack>
      </FlipInner>
    </FlipCard>
  )
}

const IndexPage = () => (
  <GlassLayout pillHref="/contact" pillLabel="Available for work · say hello">
    <SEO title="Home" keywords={[`jamal rasool`, `trujamal`, `designer`, `developer`, `portfolio`]} />

    <Hero>
      <HeroRow>
        <Headline>
          Design <span>Build</span> <span>Ship</span>
        </Headline>
        <HeroNav aria-label="Sections">
          <HeroNavCurrent href="#work">Portfolio</HeroNavCurrent>
          <HeroNavAnchor href="#craft">Craft</HeroNavAnchor>
          <HeroNavLink to="/Photos">Play</HeroNavLink>
        </HeroNav>
      </HeroRow>
      <Intro>
        Multidisciplinary designer &amp; full-stack developer. I take products from first sketch to
        shipped: interface, brand, and the code underneath. Founder of Minuteboo.
      </Intro>
    </Hero>

    <CraftSection id="craft">
      <CraftGrid>
        {crafts.map(craft => (
          <CraftCard key={craft.title} craft={craft} />
        ))}
      </CraftGrid>
    </CraftSection>

    <WorkSection id="work">
      <WorkHead>
        <WorkTitle>Selected Work</WorkTitle>
        <WorkYears>2015 — 2026</WorkYears>
      </WorkHead>
      {sortedProjects.map(cell => (
        <WorkRow key={cell.project} href={cell.link} target="_blank" rel="noopener noreferrer">
          <WorkName>{cell.project}</WorkName>
          <WorkTag>{cell.tag}</WorkTag>
          <WorkYear>{cell.year}</WorkYear>
        </WorkRow>
      ))}
      <WorkEnd />
    </WorkSection>

    <AboutSection id="about">
      <AboutGrid>
        <AboutLede>
          I&#39;ve spent a decade at the seam between <span>design and engineering</span>, where the
          interesting problems live.
        </AboutLede>
        <AboutBody>
          <p>
            Based between studio and screen, I build products end-to-end: research and interface,
            brand and motion, and the front-to-back code that ships them. Founder of{" "}
            <strong>Minuteboo</strong>.
          </p>
          <p>
            When I&#39;m not shipping, I&#39;m producing music or out with a camera. Those inputs
            keep the work from getting stale.
          </p>
          <AboutMore to="/about">More about me →</AboutMore>
        </AboutBody>
      </AboutGrid>
    </AboutSection>

    <Footer id="contact">
      <CtaCard>
        <CtaHeadline>
          Let&#39;s make something
          <br />
          <span>people remember.</span>
        </CtaHeadline>
        <CtaRow>
          <CtaButton to="/contact">Say hello →</CtaButton>
          <Socials>
            <SocialLink href="https://github.com/trujamal" target="_blank" rel="noopener noreferrer">
              GitHub
            </SocialLink>
            <SocialLink href="https://soundcloud.com/trujamal" target="_blank" rel="noopener noreferrer">
              SoundCloud
            </SocialLink>
            <SocialLink href="https://www.instagram.com/trujamal/" target="_blank" rel="noopener noreferrer">
              Instagram
            </SocialLink>
          </Socials>
        </CtaRow>
      </CtaCard>
      <Copyright>© {new Date().getFullYear()} Jamal Rasool</Copyright>
    </Footer>
  </GlassLayout>
)

export default IndexPage
