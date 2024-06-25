import { useMemo } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

// OPTIONAL
// Provide a consistent wrapper with it's own props
const ImageWrappingElement = styled.div`
  ${(props) => (props.width ? `width: ${props.width}` : '')}
  ${(props) => (props.width ? `height: ${props.width}` : '')}
    ${(props) => (props.position ? `object-position: ${props.position}` : '')}
    ${(props) => (props.fit ? `object-fit: ${props.fit}` : '')}
`

const ImageWrapper = ({
  src,
  alt,
  width,
  height,
  position,
  fit,
  quality,
  variant,
}) => {
  // Build an image element in the react scope
  // useMemo to prevent regeneration
  const ImageElement = useMemo(() => {
    if (!src) {
      return null
    }

    return (
      <Image
        src={src}
        quality={quality || 75}
        alt={alt || ''}
        width={width || '100%'}
        height={height || 0}
      />
    )
  }, [src, width, alt, height, quality])

  // Allow only returning the image
  if (variant && variant === 'onlyImage') {
    return ImageElement
  }

  // Return the image element with a wrapping div
  // This will be good for cards
  return (
    <ImageWrappingElement
      width={width}
      height={height}
      position={position}
      fit={fit}
    >
      {ImageElement}
    </ImageWrappingElement>
  )
}

export default ImageWrapper
