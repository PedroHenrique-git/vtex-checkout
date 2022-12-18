import React, { createContext, useContext, useEffect, useState } from 'react';

type Hash = '#/cart' | '#/payment' | '#/email' | '#/shipping';

interface WindowData {
  vtexjs: Vtexjs | null;
  orderForm: OrderForm | null;
  ajaxOptionsLastRequest: AjaxOptions | null;
  hash: Hash;
}

type IWindowContext = WindowData;

const WindowContext = createContext<IWindowContext>({
  vtexjs: null,
  hash: window.location.hash as Hash,
  ajaxOptionsLastRequest: null,
  orderForm: null,
});

export const useWindowContext = () => {
  const windowContext = useContext(WindowContext);

  if (windowContext === undefined) {
    throw new Error('WindowContext must be used within WindowProvider');
  }

  return windowContext;
};

export function WindowProvider({ children }: { children: React.ReactNode }) {
  const [windowData, setWindowData] = useState<WindowData>({
    vtexjs: null,
    orderForm: null,
    ajaxOptionsLastRequest: null,
    hash: window.location.hash as Hash,
  });

  useEffect(() => {
    const updateVtexJs = () => {
      setWindowData((prev) => ({
        ...prev,
        vtexjs: window.vtexjs,
      }));
    };

    const updateHash = () => {
      setWindowData((prev) => ({
        ...prev,
        hash: window.location.hash as Hash,
      }));
    };

    const cbOrderFormUpdated = (
      _: JQuery.TriggeredEvent,
      orderForm: OrderForm,
    ) => {
      setWindowData((prev) => ({
        ...prev,
        orderForm: orderForm,
      }));
    };

    const cbCheckoutRequestBegin = (
      _: JQuery.TriggeredEvent,
      ajaxOptions: AjaxOptions,
    ) => {
      setWindowData((prev) => ({
        ...prev,
        ajaxOptionsLastRequest: ajaxOptions,
      }));
    };

    const cbCheckoutRequestEnd = (
      _: JQuery.TriggeredEvent,
      orderForm: OrderForm,
    ) => {
      setWindowData((prev) => ({
        ...prev,
        orderForm: orderForm,
      }));
    };

    window.addEventListener('load', updateVtexJs);
    window.addEventListener('hashchange', updateHash);

    // VTEX EVENTS
    $(window).on('orderFormUpdated.vtex', cbOrderFormUpdated);
    $(window).on('checkoutRequestEnd.vtex', cbCheckoutRequestEnd);
    $(window).on('checkoutRequestBegin.vtex', cbCheckoutRequestBegin);

    return () => {
      window.removeEventListener('load', updateVtexJs);
      window.removeEventListener('hashchange', updateHash);

      // VTEX EVENTS
      $(window).off('orderFormUpdated.vtex');
      $(window).off('checkoutRequestEnd.vtex');
      $(window).off('checkoutRequestBegin.vtex');
    };
  }, []);

  return (
    <WindowContext.Provider value={windowData}>
      {children}
    </WindowContext.Provider>
  );
}
