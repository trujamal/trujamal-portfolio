import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import GlassLayout from "../components/GlassLayout"
import SEO from "../components/seo"

const ink = "#0B0B0D"

const TOPICS = ["Product", "Brand", "iOS App", "Website", "Something else"]

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

const Intro = styled.p`
  margin: 26px 0 0;
  max-width: 540px;
  font-size: 18px;
  line-height: 1.5;
  color: #4a4a52;
`

const Body = styled.section`
  max-width: 1180px;
  margin: 0 auto;
  padding: 44px 22px 130px;
`

const BodyGrid = styled.div`
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 28px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

/* ---------- Left: details ---------- */

const DetailColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`

const cardShadow = `box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 26px 48px -30px rgba(20, 10, 40, 0.28);`

const EmailCard = styled.a`
  display: block;
  background: #fff;
  border-radius: 20px;
  padding: 26px 28px;
  text-decoration: none;
  color: ${ink};
  ${cardShadow}
  transition: transform 0.15s;

  &:hover,
  &:focus-visible {
    transform: translateY(-2px);
  }
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
  font-size: ${props => (props.$large ? "22px" : "18px")};
  font-weight: 700;
  letter-spacing: -0.02em;
`

const FactRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
`

const FactCard = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 24px 26px;
  ${cardShadow}
`

const ElsewhereCard = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 24px 28px;
  ${cardShadow}
`

const ElsewhereList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 14px;
`

const ElsewhereLink = styled.a`
  display: flex;
  justify-content: space-between;
  padding: 11px 0;
  border-bottom: 1px solid rgba(11, 11, 13, 0.09);
  text-decoration: none;
  color: ${ink};
  font-size: 16px;
  font-weight: 600;

  &:last-child {
    border-bottom: none;
  }

  &:hover,
  &:focus-visible {
    opacity: 0.6;
  }

  span:last-child {
    color: #71717a;
  }
`

/* ---------- Right: form ---------- */

const FormCard = styled.div`
  position: relative;
  background: #fff;
  border-radius: 26px;
  padding: clamp(28px, 3.4vw, 44px);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 34px 60px -34px rgba(20, 10, 40, 0.35);
`

const FormTitle = styled.h2`
  margin: 0 0 26px;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: -0.02em;
`

const FieldGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`

const FieldLabel = styled.label`
  display: block;
  margin-top: ${props => (props.$spaced ? "22px" : "0")};
`

const FieldName = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #6a6a72;
  margin-bottom: 8px;
`

const fieldStyles = `
  width: 100%;
  font-family: inherit;
  font-size: 16px;
  color: ${ink};
  padding: 14px 16px;
  border: 1px solid #e2e2e7;
  border-radius: 13px;
  background: #fafafb;
  transition: border-color 0.15s;

  &::placeholder {
    color: #b4b4bc;
  }

  &:focus {
    outline: none;
    border-color: ${ink};
  }
`

const Input = styled.input`
  ${fieldStyles}
`

const Textarea = styled.textarea`
  ${fieldStyles}
  resize: vertical;
`

const ChipsBlock = styled.div`
  margin-top: 22px;
`

const ChipsLabel = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #6a6a72;
  margin-bottom: 11px;
`

const ChipsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

const Chip = styled.button`
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

const SubmitRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 26px;
`

const SubmitNote = styled.span`
  font-size: 14px;
  color: #71717a;
`

const ErrorNote = styled.span`
  font-size: 14px;
  color: #b3261e;
`

const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: ${ink};
  color: #fff;
  border: none;
  font-family: inherit;
  font-size: 17px;
  font-weight: 700;
  padding: 15px 28px;
  border-radius: 100px;
  cursor: pointer;
  transition: transform 0.15s, background 0.15s;

  &:hover,
  &:focus-visible {
    background: #2a2a30;
    transform: scale(1.02);
  }

  &:disabled {
    opacity: 0.6;
    cursor: default;
    transform: none;
  }
`

/* ---------- Success state ---------- */

const Success = styled.div`
  min-height: 360px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 18px;
`

const SuccessBadge = styled.div`
  display: grid;
  place-items: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${ink};
  color: #fff;
  font-size: 26px;
`

const SuccessTitle = styled.h2`
  margin: 0;
  font-size: 34px;
  font-weight: 700;
  letter-spacing: -0.03em;
`

const SuccessText = styled.p`
  margin: 0;
  max-width: 420px;
  font-size: 17px;
  line-height: 1.5;
  color: #4a4a52;
`

const SuccessActions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 6px;
`

const SuccessPrimary = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: ${ink};
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  padding: 13px 24px;
  border-radius: 100px;
`

const SuccessSecondary = styled.button`
  background: transparent;
  border: 1px solid #e2e2e7;
  color: ${ink};
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  padding: 13px 22px;
  border-radius: 100px;
  cursor: pointer;

  &:hover,
  &:focus-visible {
    border-color: ${ink};
  }
`

const Footnote = styled.p`
  margin: 40px 4px 0;
  font-size: 14px;
  color: #71717a;
`

const encode = data =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")

const ContactPage = () => {
  const [topic, setTopic] = useState("Product")
  const [status, setStatus] = useState("idle") // idle | sending | sent | error

  const handleSubmit = async e => {
    e.preventDefault()
    const form = e.target
    setStatus("sending")
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          name: form.elements.namedItem("name").value,
          email: form.elements.namedItem("email").value,
          topic,
          message: form.elements.namedItem("message").value,
        }),
      })
      if (!response.ok) throw new Error(`Form endpoint returned ${response.status}`)
      setStatus("sent")
    } catch (err) {
      setStatus("error")
    }
  }

  return (
    <GlassLayout pillHref="/#work" pillLabel="Available for work · view portfolio">
      <SEO title="Contact" keywords={[`contact`, `jamal rasool`, `trujamal`]} />

      <Hero>
        <Kicker>Contact</Kicker>
        <Headline>
          Say <span>hello.</span>
        </Headline>
        <Intro>
          Have a product to build, a brand to shape, or just want to trade ideas? Tell me what
          you&#39;re working on. I read every message and reply within a day.
        </Intro>
      </Hero>

      <Body>
        <BodyGrid>
          <DetailColumn>
            <EmailCard href="mailto:me@trujamal.com?subject=Hi%20Jamal!">
              <CardLabel>Email</CardLabel>
              <CardValue $large>me@trujamal.com</CardValue>
            </EmailCard>

            <FactRow>
              <FactCard>
                <CardLabel>Based</CardLabel>
                <CardValue>Remote · CST</CardValue>
              </FactCard>
              <FactCard>
                <CardLabel>Reply</CardLabel>
                <CardValue>Within 24h</CardValue>
              </FactCard>
            </FactRow>

            <ElsewhereCard>
              <CardLabel>Elsewhere</CardLabel>
              <ElsewhereList>
                <ElsewhereLink href="https://github.com/trujamal" target="_blank" rel="noopener noreferrer">
                  <span>GitHub</span>
                  <span>↗</span>
                </ElsewhereLink>
                <ElsewhereLink href="https://soundcloud.com/trujamal" target="_blank" rel="noopener noreferrer">
                  <span>SoundCloud</span>
                  <span>↗</span>
                </ElsewhereLink>
                <ElsewhereLink href="https://www.instagram.com/trujamal/" target="_blank" rel="noopener noreferrer">
                  <span>Instagram</span>
                  <span>↗</span>
                </ElsewhereLink>
              </ElsewhereList>
            </ElsewhereCard>
          </DetailColumn>

          <FormCard>
            {status !== "sent" ? (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="topic" value={topic} />
                <p hidden aria-hidden="true">
                  <label>
                    Don&#39;t fill this out: <input name="bot-field" />
                  </label>
                </p>

                <FormTitle>Start a conversation</FormTitle>

                <FieldGrid>
                  <FieldLabel>
                    <FieldName>Your name</FieldName>
                    <Input type="text" name="name" autoComplete="name" required placeholder="Jane Doe" />
                  </FieldLabel>
                  <FieldLabel>
                    <FieldName>Email</FieldName>
                    <Input type="email" name="email" autoComplete="email" required placeholder="jane@studio.com" />
                  </FieldLabel>
                </FieldGrid>

                <ChipsBlock>
                  <ChipsLabel id="topic-label">What&#39;s it about?</ChipsLabel>
                  <ChipsRow role="group" aria-labelledby="topic-label">
                    {TOPICS.map(label => (
                      <Chip
                        key={label}
                        type="button"
                        $active={topic === label}
                        aria-pressed={topic === label}
                        onClick={() => setTopic(label)}
                      >
                        {label}
                      </Chip>
                    ))}
                  </ChipsRow>
                </ChipsBlock>

                <FieldLabel $spaced>
                  <FieldName>Message</FieldName>
                  <Textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="A sentence or two about the project, timeline and budget…"
                  />
                </FieldLabel>

                <SubmitRow>
                  {status === "error" ? (
                    <ErrorNote>Something went wrong. Email me instead at me@trujamal.com.</ErrorNote>
                  ) : (
                    <SubmitNote>No spam. Just a real reply.</SubmitNote>
                  )}
                  <SubmitButton type="submit" disabled={status === "sending"}>
                    {status === "sending" ? "Sending…" : "Send message →"}
                  </SubmitButton>
                </SubmitRow>
              </form>
            ) : (
              <Success>
                <SuccessBadge aria-hidden="true">✓</SuccessBadge>
                <SuccessTitle>Message on its way.</SuccessTitle>
                <SuccessText>
                  Thanks for reaching out. I&#39;ll get back to you within a day. In the meantime,
                  take a look at recent work.
                </SuccessText>
                <SuccessActions>
                  <SuccessPrimary to="/#work">View work →</SuccessPrimary>
                  <SuccessSecondary type="button" onClick={() => setStatus("idle")}>
                    Send another
                  </SuccessSecondary>
                </SuccessActions>
              </Success>
            )}
          </FormCard>
        </BodyGrid>

        <Footnote>© {new Date().getFullYear()} Jamal Rasool</Footnote>
      </Body>
    </GlassLayout>
  )
}

export default ContactPage
