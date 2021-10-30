import * as S from './styles'

export type ButtonStyle = 'primary' | 'secondary'
export type ButtonProps = {
  name?: string
  label: string
  style?: ButtonStyle
  onClick?: () => void
}

const Button = ({ name, label, style = 'primary', onClick }: ButtonProps) => (
  <S.Button name={name} customStyle={style} onClick={() => onClick && onClick()}>
    {label}
  </S.Button>
)

export default Button
