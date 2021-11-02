import * as S from './styles'

export type ButtonStyle = 'primary' | 'secondary' | 'small'
export type ButtonProps = {
  name?: string
  children: React.ReactNode
  customStyle?: ButtonStyle
  onClick?: () => void
  disabled?: boolean
}

const Button = ({ name, children, customStyle = 'primary', onClick, disabled = false }: ButtonProps) => (
  <S.Button name={name} customStyle={customStyle} onClick={() => onClick && onClick()} disabled={disabled}>
    {children}
  </S.Button>
)

export default Button
