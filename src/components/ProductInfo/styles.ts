import { styled } from '../../../stitches.config';

export const Button = styled('button', {
  background: '#ccc',
  borderRadius: '5px',
  border: '0',
  padding: '10px',
  cursor: 'pointer',
  fontSize: '1.4rem',
  color: '$white',

  '&:hover': {
    opacity: '.5',
    transition: 'opacity 300ms ease-in-out',
  },
});

export const Title = styled('h3', {
  fontSize: 'medium',
  textAlign: 'center',
  fontFamily: '$principal',
  color: '$black',
});

export const ProductInfoContainer = styled('div', {
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const ImageContainer = styled('div', {
  maxWidth: '200px',
  width: '100%',

  img: {
    width: '100%',
    height: '100%',
  },
});
