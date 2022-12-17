import { debounce } from 'lodash';
import { useEffect } from 'react';

export function useMutationObserver(
  target: Element | Document | HTMLElement,
  cb: (_mutations: MutationRecord[], _observer: MutationObserver) => void,
  mutationOptions: MutationObserverInit = {
    childList: true,
    subtree: true,
    attributes: true,
  },
  debounceTime = 0,
) {
  useEffect(() => {
    const mutation = new MutationObserver(
      debounceTime > 0 ? debounce(cb, debounceTime) : cb,
    );

    mutation.observe(target, mutationOptions);

    return () => {
      mutation.disconnect();
    };
  }, [cb, target, debounceTime, mutationOptions]);
}
