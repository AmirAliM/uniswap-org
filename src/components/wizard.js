import React, { useState } from 'react'
// import Img from 'gatsby-image'
// import { Link } from 'gatsby'
import InlineCard from './inlineCard'
import { Code, TrendingUp, Repeat, Circle } from 'react-feather'

import styled from 'styled-components'

const links = [
  {
    name: 'Developers',
    sublinks: [
      {
        title: 'Implement a token swap',
        link: '/docs/v2/core-concepts',
        description: 'A step by step guide to swapping tokens in your smart contracts.',
        tag: 'tutorial'
      },
      {
        title: 'Uniswap SDK',
        link: '/docs/v2/core-concepts',
        description: 'Check out the full SDK for all of Uniswaps capabilities.',
        tag: 'reference'
      },
      {
        title: 'Introduction to Flash Swaps',
        link: '/docs/v2/core-concepts',
        description: 'A high level technical overview of the Uniswap protocol',
        tag: 'guide'
      },
      {
        title: 'Introduction to Oracles',
        link: '/docs/v2/core-concepts',
        description: 'A high level technical overview of the Uniswap protocol'
      }
    ]
  },
  {
    name: 'Traders',
    sublinks: [
      {
        title: 'Anatomy of a Uniswap Trade',
        link: '/docs/v2/core-concepts',
        description: 'A high level technical overview of the Uniswap protocol.',
        tag: 'guide'
      },
      {
        title: 'Using the interface',
        link: '/docs/v2/core-concepts',
        description: 'A high level technical overview of the Uniswap protocol.',
        tag: 'tutorial'
      }
    ]
  },
  {
    name: 'Liquidity',
    sublinks: [
      {
        title: 'Anatomy of a Uniswap Pool',
        link: '/docs/v2/core-concepts',
        description: 'A high level technical overview of the Uniswap protocol.'
      },
      {
        title: 'Pooling liquidity on the interface',
        link: '/docs/v2/core-concepts',
        description: 'A high level technical overview of the Uniswap protocol.'
      },
      {
        title: 'Understanding Liquidity Returns',
        link: '/docs/v2/core-concepts',
        description: 'A high level technical overview of the Uniswap protocol.'
      }
    ]
  },
  {
    name: 'Tokens',
    sublinks: [
      {
        title: 'Core Concepts',
        link: '/docs/v2/core-concepts',
        description: 'A high level technical overview of the Uniswap protocol.'
      },
      {
        title: 'Creating a pool for your token',
        link: '/docs/v2/core-concepts',
        description: 'A high level technical overview of the Uniswap protocol.'
      },
      {
        title: 'Introduction to Token lists',
        link: '/docs/v2/core-concepts',
        description: 'A high level technical overview of the Uniswap protocol.'
      }
    ]
  }
]

const StyledWizard = styled.div`
  color: ${({ theme, outlined }) => (outlined ? theme.colors.link : theme.textColor)};
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.grey2};
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  @media (max-width: 960px) {
    width: 100%;
    max-width: 450px;
    margin: 1rem 0;
    height: ${({ small }) => !small && '200px'};
    /* height: 200px; */
  }
`

const Nav = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0;
  padding: 0;
  padding: 1.5rem 1.5rem 0 1.5rem;
`

const NavTabs = styled.li`
  list-style: none;
  margin: 0;
  padding: 0.25rem 0.75rem;
  margin-right: 0.5rem;
  font-weight: 500;
  background-color: ${({ theme, isActive }) => (isActive ? theme.colors.pink1 : '')};
  color: ${({ theme, isActive }) => (isActive ? theme.invertedTextColor : theme.colors.pink1)};
  border-radius: 12px;
  display: flex;
  align-items: center;
  will-change: transform;
  cursor: pointer;
  :hover {
    transform: scale(1.03);
  }
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: no-wrap;
  padding: 1.5rem;
  overflow-x: scroll;
  overflow-y: visible;
  *::-webkit-scrollbar {
    display: none;
  }
`

const Wizard = () => {
  const [currentCategory, setCurrentCategory] = useState('Developers')

  return (
    <StyledWizard>
      <Nav>
        <NavTabs onClick={() => setCurrentCategory('Developers')} isActive={currentCategory === 'Developers'}>
          <Code size="16" style={{ marginRight: '8px' }} />
          Developers
        </NavTabs>
        <NavTabs onClick={() => setCurrentCategory('Traders')} isActive={currentCategory === 'Traders'}>
          <TrendingUp size="16" style={{ marginRight: '8px' }} />
          Traders
        </NavTabs>
        <NavTabs onClick={() => setCurrentCategory('Liquidity')} isActive={currentCategory === 'Liquidity'}>
          <Repeat size="16" style={{ marginRight: '8px' }} />
          Liquidity Providers
        </NavTabs>
        <NavTabs onClick={() => setCurrentCategory('Tokens')} isActive={currentCategory === 'Tokens'}>
          <Circle size="16" style={{ marginRight: '8px' }} />
          Token Projects
        </NavTabs>
      </Nav>
      <CardWrapper>
        {links
          .filter(category => {
            return category.name === currentCategory
          })
          .map(category => {
            return category.sublinks.map((sublink, i) => {
              // console.log(sublink.title, i)
              return (
                <InlineCard
                  key={i}
                  title={sublink.title}
                  desc={sublink.description}
                  to={sublink.link}
                  tag={sublink.tag}
                />
              )
            })
          })}
      </CardWrapper>
    </StyledWizard>
  )
}

export default Wizard