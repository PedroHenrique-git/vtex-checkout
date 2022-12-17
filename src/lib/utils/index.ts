export function waitForEl(selector: string): Promise<Element> {
  return new Promise((resolve) => {
    const cb = () => {
      const element = document.querySelector(selector);

      if (element) {
        resolve(element);
      } else {
        setTimeout(() => {
          cb();
        }, 100);
      }
    };

    cb();
  });
}
