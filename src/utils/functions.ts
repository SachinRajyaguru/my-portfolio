export const arrayChunk = <T>(array: T[], size: number): T[][] => {
  if (size <= 0) {
    throw new Error("Size must be a positive number.");
  }

  const chunkedArray: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArray.push(array.slice(i, i + size));
  }
  return chunkedArray;
};
