export const containerId = 'custom-checkout';

export const createRootElement = () => {
  let root = document.getElementById(containerId);

  if (root) return root;

  root = document.createElement('div');
  root.id = containerId;

  document.body.appendChild(root);

  return root;
};

export const createPortalContainer = (identifier: string) => {
  let container = document.querySelector(identifier);

  if (container) {
    return container;
  }

  const isClass = identifier.includes('.');
  const isId = identifier.includes('#');

  container = document.createElement('div');

  if (isClass) {
    container.classList.add(identifier.replace('.', ''));
  }

  if (isId) {
    container.id = identifier.replace('#', '');
  }

  document.getElementById(containerId)?.appendChild(container);

  return container;
};
