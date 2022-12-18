import { styled } from '../../../stitches.config';

export const ModalContainer = styled('div', {
  background: 'rgba(12, 12, 12, 0.3)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  position: 'fixed',
  top: '0',
  left: '0',
  bottom: '0',
  right: '0',

  zIndex: '999',
});

export const ModalContent = styled('div', {
  padding: '25px',
  background: '$white',
  maxWidth: '600px',
  width: '100%',
  minHeight: '400px',
});
