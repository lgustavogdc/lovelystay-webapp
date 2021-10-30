import { useState } from 'react'
import * as S from './styles'

export type InputProps = {
  name?: string
  placeholder?: string
  initialValue?: string
  error?: string
  onChange?: (value: string) => void
}

const Input = ({ name, placeholder, initialValue, error, onChange }: InputProps) => {
  const [value, setValue] = useState(initialValue)

  return (
    <S.InputWrapper hasError={!!error}>
      <S.Input
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(event) => {
          setValue(event.target.value)
          onChange && onChange(event.target.value)
        }}
      />
      {error && <S.ErrorWrapper>{error}</S.ErrorWrapper>}
    </S.InputWrapper>
  )
}

export default Input
