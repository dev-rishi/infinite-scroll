import React from 'react'
import styled, { css } from 'styled-components'

const activeBtnStyles = css`
  border: 1px solid #1c9811;
  color: #1c9811;
  box-shadow: rgb(0 0 0 / 25%) 0px 2px 5px 1px;
  transition: all 0.2s ease-in;
`
const Button = styled.button<{ isActive?: boolean }>`
  outline: none;
  border: 1px solid #a5a5a5;
  border-radius: 20px;
  background: none;
  padding: 8px 20px;
  cursor: pointer;
  font-size: 15px;
  ${(props) => (props.isActive ? activeBtnStyles : '')}
  &:focus,
  &:hover,
  &:active {
    ${activeBtnStyles}
  }
`

const TabButton = ({
  onClick,
  children,
  isActive,
}: {
  onClick: () => any
  isActive?: boolean
  children: any
}) => {
  return (
    <Button onClick={onClick} isActive={isActive}>
      {children}
    </Button>
  )
}

export default TabButton
