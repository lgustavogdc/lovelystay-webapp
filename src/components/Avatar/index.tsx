import * as S from './styles'

export type AvatarStyle = 'small' | 'large'
export type AvatarProps = {
  image: string
  alt: string
  style?: AvatarStyle
}

const Avatar = ({ image, alt, style = 'small' }: AvatarProps) => <S.Avatar src={image} alt={alt} customStyle={style} />

export default Avatar
