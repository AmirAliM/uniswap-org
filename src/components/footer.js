import { Link } from 'gatsby'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.textColor};
  position: relative;
  padding: 0 3rem 2rem 3rem;
  font-family: 'GT Haptik Regular';

  @media (max-width: 1155px) {
    display: block;
  }

  @media (max-width: 960px) {
    padding: 1rem;
  }
`

const StyledFooterLinkSection = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 0;
`

const StyledFooterLink = styled(Link)`
  margin-right: 12px;
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          commit
          repository
          menulinks {
            name
            sublinks {
              description
              name
              link
            }
          }
          title
        }
      }
    }
  `)

  return (
    <StyledFooter>
      <p>© 2021 Uniswap</p>
      <StyledFooterLinkSection>
        <StyledFooterLink to="/about">About</StyledFooterLink>
        <StyledFooterLink to="/disclaimer" style={{ marginRight: '12px' }}>
          Disclaimer
        </StyledFooterLink>
        <StyledFooterLink to="/trademarks">Trademarks</StyledFooterLink>
        <StyledFooterLink to="/about#brand">Brand</StyledFooterLink>
      </StyledFooterLinkSection>
    </StyledFooter>
  )
}
export default Footer
