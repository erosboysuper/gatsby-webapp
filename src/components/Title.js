import React from "react"
import styled from "styled-components"

const Title = ({ title, subtitle, className, inverse }) => {
  return (
    <div className={`${className} ${inverse === 'true' ? 'title-inverse' : ''}`}>
      <h4>
        <span className="title">{title}</span>
        <span className="subtitle">{subtitle}</span>
      </h4>
    </div>
  )
}

export default styled(Title)`
  font-size: 3rem;
  margin-bottom: 2rem;
  text-align: center;

  .title {
    color: var(--mainBlack);
  }

  .subtitle {
    color: var(--primaryColor);
  }

  span {
    display: block;
  }

  &.title-inverse .title {
    color: var(--mainWhite);
  }
  &.title-inverse .subtitle {
    color: var(--mainWhite);
  }

  @media (min-width: 576px) {
    span {
      display: inline-block;
      margin: 0 0.35rem;
    }
  }
`
