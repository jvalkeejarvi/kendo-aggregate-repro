export const data = [
  { a: 1, b: 2, c: { d: 3 } },
  { a: 1, b: 2, c: { d: 3 } },
  { a: 1, b: 2, c: { d: 3 } },
  { a: 1, b: 2, c: { d: 3 } },
];


export const dataWithMissingParent = [
  { a: 1, b: 2, c: { d: 3 } },
  { a: 1, b: 2, c: { d: 3 } },
  { a: 1, b: 2 },
  { a: 1, b: 2, c: { d: 3 } },
];

export const dataWithMissingChild = [
  { a: 1, b: 2, c: { d: 3 } },
  { a: 1, b: 2, c: { } },
  { a: 1, b: 2, c: { d: 3 } },
  { a: 1, b: 2, c: { d: 3 } },
];
