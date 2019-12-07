import { useEffect, useState } from 'react';

export default class KeyGenerator {
  private _iteration: number;
  private _prefix: string;

  constructor(prefix: string, iteration?: number) {
    this._prefix = `${prefix}-${Math.round(Math.random() * 100000).toString()}`;
    this._iteration = iteration || 0;
  }

  public next(): string {
    const num = `00${this._iteration}`;
    this._iteration = this._iteration + 1;

    return `${this._prefix}-${num}`;
  }
}

export const useKeyGenerator = (
  prefix: string,
  amount = 1,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  watch?: any
): string[] => {
  const keygen = new KeyGenerator(prefix);

  const [keys, setKeys] = useState(
    new Array(amount).fill(amount).map(() => keygen.next())
  );

  useEffect(() => {
    setKeys(keys => keys.map(() => keygen.next()));
  }, [watch]);

  return keys;
};
