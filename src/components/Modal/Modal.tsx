import React from 'react';
import * as S from './styles';

interface Props {
  open: boolean;
  children: React.ReactNode;
}

export function Modal({ children, open }: Props) {
  if (!open) return null;

  return (
    <S.ModalContainer>
      <S.ModalContent>{children}</S.ModalContent>
    </S.ModalContainer>
  );
}
