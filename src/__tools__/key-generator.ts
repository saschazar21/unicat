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
