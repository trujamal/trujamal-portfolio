import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"

const ink = "#0B0B0D"

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  html, body { margin: 0; padding: 0; background: #E9E9ED; }
  [id] { scroll-margin-top: 96px; }
  ::selection { background: #111; color: #fff; }
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after { animation: none !important; transition: none !important; }
  }
`

const Page = styled.div`
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: ${ink};
  background: #ededf0;
  -webkit-font-smoothing: antialiased;
`

/* Lilac gradient wash from the design mock */
const Wash = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background: radial-gradient(58% 52% at 100% 2%, rgba(198, 150, 222, 0.62), transparent 60%),
    radial-gradient(52% 42% at 100% 46%, rgba(232, 152, 192, 0.55), transparent 58%),
    radial-gradient(56% 46% at 96% 100%, rgba(150, 182, 228, 0.6), transparent 62%),
    radial-gradient(42% 36% at 0% 100%, rgba(172, 192, 228, 0.4), transparent 62%);
`

const Content = styled.div`
  position: relative;
  z-index: 1;
`

const glassSurface = `
  background: rgba(255, 255, 255, 0.5);
  -webkit-backdrop-filter: blur(20px) saturate(1.5);
  backdrop-filter: blur(20px) saturate(1.5);
  border: 1px solid rgba(255, 255, 255, 0.55);
`

const Nav = styled.nav`
  position: fixed;
  top: 22px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  width: min(1180px, calc(100% - 44px));
  border-radius: 24px;
  padding: 14px 22px;
  ${glassSurface}
  box-shadow: 0 10px 34px rgba(30, 20, 50, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.7);
`

const NavRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`

const Brand = styled(Link)`
  text-decoration: none;
  color: ${ink};
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.02em;

  &:hover {
    opacity: 0.7;
  }
`

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`

const NavLink = styled(Link)`
  font-size: 15px;
  color: #5a5a63;
  text-decoration: none;

  &:hover,
  &:focus-visible {
    color: ${ink};
  }

  @media (max-width: 700px) {
    display: none;
  }
`

const NavCta = styled(Link)`
  font-size: 15px;
  font-weight: 700;
  color: ${ink};
  text-decoration: none;

  &:hover {
    opacity: 0.7;
  }
`

const Pill = styled(Link)`
  position: fixed;
  bottom: 26px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  border-radius: 100px;
  padding: 13px 24px;
  text-decoration: none;
  ${glassSurface}
  box-shadow: 0 12px 34px rgba(30, 20, 50, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.7);

  &:hover {
    transform: translateX(-50%) scale(1.03);
  }
`

const PillInner = styled.span`
  display: flex;
  align-items: center;
  gap: 11px;
  font-size: 15px;
  font-weight: 700;
  color: ${ink};
  white-space: nowrap;
`

const PillDot = styled.span`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #1f8a5b;
  box-shadow: 0 0 0 4px rgba(31, 138, 91, 0.18);
`

const GlassLayout = ({
  children,
  pillHref = "/contact",
  pillLabel = "Available for work · say hello",
}) => (
  <>
    <GlobalStyle />
    <Page>
      <Wash aria-hidden="true" />
      <Nav aria-label="Main">
        <NavRow>
          <Brand to="/">Jamal Rasool</Brand>
          <NavLinks>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/#work">Work</NavLink>
            <NavLink to="/#craft">Craft</NavLink>
            <NavLink to="/Photos">Play</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavCta to="/contact">Say hello →</NavCta>
          </NavLinks>
        </NavRow>
      </Nav>
      <Content>{children}</Content>
      <Pill to={pillHref}>
        <PillInner>
          <PillDot aria-hidden="true" />
          {pillLabel}
        </PillInner>
      </Pill>
    </Page>
  </>
)

GlassLayout.propTypes = {
  children: PropTypes.node.isRequired,
  pillHref: PropTypes.string,
  pillLabel: PropTypes.string,
}

export default GlassLayout
