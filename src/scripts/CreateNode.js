export const createNode = (elem, innerHTML, ...classes) => {
    const node = document.createElement(elem);
    node.classList.add(...classes);
    node.innerHTML = innerHTML;
    return node;
  };  