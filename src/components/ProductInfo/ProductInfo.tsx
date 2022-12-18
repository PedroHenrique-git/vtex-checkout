import React, { useEffect, useState } from 'react';
import { CreatePortal } from '../../lib/CreatePortal/CreatePortal';
import { useWindowContext } from '../../lib/DOMProvider/WindowProvider';
import { Modal } from '../Modal/Modal';
import * as S from './styles';

function ProductInfoButton({ item }: { item: Item }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <S.Button onClick={() => setOpen(true)}>show product info</S.Button>
      <Modal open={open}>
        <S.ProductInfoContainer>
          <S.Button onClick={() => setOpen(false)}>close</S.Button>
          <S.Title>{item.name}</S.Title>
          <S.ImageContainer>
            <img src={item.imageUrl} alt={item.name} />
          </S.ImageContainer>
        </S.ProductInfoContainer>
      </Modal>
    </>
  );
}

export function ProductInfo() {
  const { vtexjs } = useWindowContext();
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    vtexjs?.checkout.getOrderForm().then((orderForm) => {
      setItems(orderForm.items);
    });
  }, [vtexjs]);

  return (
    <>
      {items.map((item) => {
        return (
          <CreatePortal
            portalIdentifier={`tr[data-sku='${item.id}']`}
            key={item.id}
          >
            <ProductInfoButton item={item} />
          </CreatePortal>
        );
      })}
    </>
  );
}
