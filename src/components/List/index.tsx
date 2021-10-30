import * as S from './styles'

export type CustomStyle = 'grid' | 'lines'
export type ListProps = {
  nodes: React.ReactElement[]
  style?: CustomStyle
}

const List = ({ nodes, style = 'lines' }: ListProps) => <S.Wrapper customStyle={style}>{nodes}</S.Wrapper>

export default List
