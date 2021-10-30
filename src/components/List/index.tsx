import * as S from './styles'

export type CustomStyle = 'grid' | 'lines'
export type ListProps = {
  nodes: React.ReactElement[]
  customStyle?: CustomStyle
}

const List = ({ nodes, customStyle = 'lines' }: ListProps) => <S.Wrapper customStyle={customStyle}>{nodes}</S.Wrapper>

export default List
