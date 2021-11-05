import * as S from './styles'

export type InputProps = {
  name?: string
  placeholder?: string
  value?: string
  error?: string
  onChange?: (value: string) => void
}

const Input = ({ name, placeholder, value, error, onChange }: InputProps) => {
  return (
    <S.InputWrapper>
      <S.Input
        hasError={!!error}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(event) => {
          onChange && onChange(event.target.value)
        }}
      />
      <S.ErrorWrapper hasError={!!error}>{error && error}</S.ErrorWrapper>
    </S.InputWrapper>
  )
}

export default Input
