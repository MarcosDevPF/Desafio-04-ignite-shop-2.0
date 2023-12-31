import { styled } from "..";

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  alignItems: 'stretch',
  gap: '4rem',

  maxWidth: 1180,
  margin: '0 auto',
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: '36rem',
  height: '41rem',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  }
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray5',
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$green1',
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray4',
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$green2',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    fontWeight: 'bold',
    fontSize: '$md',
    transition: '0.2s background-color',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:(:disabled):hover': {
      backgroundColor: '$green1'
    }
  }
})