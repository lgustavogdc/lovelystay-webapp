import * as S from './styles'

export type ButtonStyle = 'primary' | 'secondary'
export type ButtonProps = {
  name?: string
  children: string
  style?: ButtonStyle
  onClick?: () => void
}

const Button = ({ name, children, style = 'primary', onClick }: ButtonProps) => (
  <S.Button name={name} customStyle={style} onClick={() => onClick && onClick()}>
    {children}
  </S.Button>
)

export default Button
