type HslColor = {
  h: number;
  s: number;
  l: number;
};

type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};
