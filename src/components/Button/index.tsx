import * as S from './styles'

export type ButtonStyle = 'primary' | 'secondary'
export type ButtonProps = {
  name?: string
  children: string
  customStyle?: ButtonStyle
  onClick?: () => void
}

const Button = ({ name, children, customStyle = 'primary', onClick }: ButtonProps) => (
  <S.Button name={name} customStyle={customStyle} onClick={() => onClick && onClick()}>
    {children}
  </S.Button>
)

export default Button
