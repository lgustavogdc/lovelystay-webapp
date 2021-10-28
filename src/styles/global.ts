import { createGlobalStyle, keyframes } from 'styled-components'

const drawerTransition = keyframes`
  from{
    transform: translate3d(100%, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`

export default createGlobalStyle`
  :root {
    --green: #004751;
    --green-dark: #062F36;
    --golden: #DDB37B;
    --text-body: #3d3d3d;
    --white: #ffffff;
    --black: #000000;
    --background: #F2F3F5;
    --border-input: #e8e8e8;
    --light-grey: #A1A1A5;

    --indication-gray: #f5f5f5;
    --text-indication: #062F36;
    --attention-indication: #c53030;
  }

  @font-face {
    font-family: Visby CF;
    font-style: normal;
    font-display: swap;
    font-weight: 400;
    src: url("/assets/fonts/VisbyCF-Regular.otf") format("opentype");
  }

  @font-face {
    font-family: Visby CF;
    font-style: normal;
    font-display: swap;
    font-weight: 500;
    src: url("/assets/fonts/VisbyCF-Medium.otf") format("opentype");
  }

  @font-face {
    font-family: Visby CF;
    font-style: normal;
    font-display: swap;
    font-weight: 600;
    src: url("/assets/fonts/VisbyCF-DemiBold.otf") format("opentype");
  }

  @font-face {
    font-family: Visby CF;
    font-style: normal;
    font-display: swap;
    font-weight: 700;
    src: url("/assets/fonts/VisbyCF-Bold.otf") format("opentype");
  }

  @font-face {
    font-family: VisbyCF;
    font-style: normal;
    font-display: swap;
    font-weight: 400;
    src: url("/assets/fonts/VisbyCF-Regular.otf") format("opentype");
  }

  @font-face {
    font-family: VisbyCF;
    font-style: normal;
    font-display: swap;
    font-weight: 500;
    src: url("/assets/fonts/VisbyCF-Medium.otf") format("opentype");
  }

  @font-face {
    font-family: VisbyCF;
    font-style: normal;
    font-display: swap;
    font-weight: 600;
    src: url("/assets/fonts/VisbyCF-DemiBold.otf") format("opentype");
  }

  @font-face {
    font-family: VisbyCF;
    font-style: normal;
    font-display: swap;
    font-weight: 700;
    src: url("/assets/fonts/VisbyCF-Bold.otf") format("opentype");
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    ::-webkit-scrollbar {
      width: 0.5rem;
      height: 0.5rem;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #c5c5c5;
      border-radius: 4px;
    }
    ::-webkit-scrollbar-track {
      background-color: #f2f3f5;
    }
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px  #fff inset;
    box-shadow: 0 0 0px 1000px  #fff inset;
  }

  .tox-statusbar {
    display: none !important;
  }

  .tox .tox-editor-header {
    z-index: 0;
  }

  .sun-editor, .se-container {
    border: 0;
    border-radius: 8px;
  }

  .sun-editor-common {
    border: 0;
    border-radius: 0 0 8px 8px;
  }

  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.textBody};
    -webkit-font-smoothing: antialiased;
    height: 100%;
  }

  body, input, textarea, button{
    font-family: 'Roboto Slab', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }

  html {
    @media (max-width: 1080px){
      font-size: 93.75%;
    }

    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }

  button {
    cursor: pointer;
  }

  table {
    table-layout: fixed;
  }


  .react-drawer-content {
    width: 100%;
    background: white;
    transition: bottom 0.3s ease-out;
    position: relative;
    border-radius: 0.24rem;
    overflow-y: auto;
  }

  .react-drawer-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: flex-end;
  }

  .drawer-content {
    animation: ${drawerTransition} ease 400ms;
  }

  .react-drawer-responsive-overlay {
    background: rgba(0, 71, 81, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: flex-end;
    z-index: 123;
  }

  .react-datepicker-popper {
    z-index: 3;
    position: fixed !important;
    top: unset !important;
    left: unset !important;
    transform: translate3d(-240px, 25px, 0px) !important;
  }
`
