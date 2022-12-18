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

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
});

export const Visor = styled('div', {
  fontSize: '1.7rem',
});
