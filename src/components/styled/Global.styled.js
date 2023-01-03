import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -ms-overflow-style: none;
    scrollbar-width: none;
    font-family: ${props => props.theme.fonts.join(',')};

    &::-webkit-scrollbar {
      display: none;
    }
  }

  svg{
    width: 24px;
    height: 24px;
    fill: ${({ theme }) => theme.colors.neutral.one};
  }

  .input-error{
    border-bottom: solid 2px ${({ theme }) => theme.colors.primary.four} !important;
  }
`

export default Global;