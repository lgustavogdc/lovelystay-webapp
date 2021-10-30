import * as S from './styles'

export type AvatarStyle = 'small' | 'large'
export type AvatarProps = {
  image: string
  alt: string
  customStyle?: AvatarStyle
}

const Avatar = ({ image, alt, customStyle = 'small' }: AvatarProps) => (
  <S.Avatar src={image} alt={alt} customStyle={customStyle} />
)

export default Avatar
