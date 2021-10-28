export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    smallRadius: '0.4rem',
    radius: '0.8rem'
  },
  font: {
    family: "'Open Sans', 'Roboto', 'Helvetica Neue', sans-serif",
    light: 300,
    regular: 400,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    sizes: {
      xxxsmall: '1.2rem',
      xxsmall: '1.4rem',
      xsmall: '1.6rem',
      small: '1.8rem',
      medium: '2.0rem',
      large: '2.4rem',
      xlarge: '2.8rem',
      xxlarge: '3.2rem',
      xxxlarge: '3.6rem',
      huge: '4.0rem',
      xhuge: '5.6rem'
    }
  },
  colors: {
    primaryLightest: '#F4F5E9',
    primaryLight: '#E1E974',
    primaryMedium: '#D3DE37',
    primaryDark: '#B4B629',
    primaryDarkest: '#A39F22',
    secondaryLightest: '#fafafa',
    secondaryLight: '#CCC8C8',
    secondaryMedium: '#848080',
    secondaryDark: '#4F4C4C',
    secondaryDarkest: '#2D2A2A',
    supportColors01: '#23757f',
    supportColors02: '#E5E5E5',
    infoLightest: '#f2f5c3',
    infoLight: '#747fc3',
    infoMedium: '#5663b7',
    infoDark: '#3241A1',
    infoDarkest: '#212E89',
    successLightest: '#6cc77e',
    successLight: '#12af46',
    successMedium: '#00A03E',
    successDark: '#007d27',
    successDarkest: '#005e11',
    errorLightest: '#ee6f68',
    errorLight: '#fb3c1e',
    errorMedium: '#ed3020',
    errorDark: '#ce1a12',
    errorDarkest: '#C00000',
    warningLightest: '#f2ee94',
    warningLight: '#eae345',
    warningMedium: '#e7de1a',
    warningDark: '#e7b500',
    warningDarkest: '#e47400',
    neutralLightest: '#F5F5F5',
    neutralLight: '#E9E9E9',
    neutralMedium: '#D9D9D9',
    neutralDark: '#9D9D9D',
    neutralDarkest: '#555555',
    white: '#FFFFFF',
    black: '#000000',
    body: '#FFF',
    text: '#3d3d3d',
    green: '#004751',
    sidebar: '#192d35',
    golden: '#DDB37B',
    textBody: '#3d3d3d',
    background: '#F2F3F5',
    borderInput: '#e8e8e8'
  },
  spacings: {
    xxxsmall: '0.5rem',
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    slow: '0.7s ease-in-out',
    default: '0.4s ease-in-out',
    fast: '0.1s ease-in-out'
  },
  assets: {
    colors: {
      textLight: '#AEAAAA',
      boxShadow01: '#0000001f',
      boxShadow02: '#00000014'
    }
  }
} as const
