export = multibase;

declare namespace multibase {
  export function encode(
    nameOrCode: string | number,
    buf: Buffer | string
  ): Buffer;

  export function decode(
    bufOrString: Buffer | string
  ): { base: string; data: Buffer };

  export function isEncoded(bufOrString: Buffer | string): string | false;
}
