export const getNameLink = (name: string) => {
  return name.toLowerCase().replace(/\s+/g, "_");
};

export const getImageUrl = (path: string, extension: string) => {
  return `${path}.${extension}`;
};

export const getUniqueNameTrannsition = (name: string) => {
  return `${name}-hero-image`;
};
