export = multibase;

declare namespace multibase {
  export type name =
    'base1'
    | 'base2'
    | 'base8'
    | 'base10'
    | 'base16'
    | 'base32'
    | 'base32pad'
    | 'base32hex'
    | 'base32hexpad'
    | 'base32z'
    | 'base58flickr'
    | 'base58btc'
    | 'base64'
    | 'base64pad'
    | 'base64url'
    | 'base64urlpad'
    ;
  export type code =
    '1'
    | '0'
    | '7'
    | '9'
    | 'f'
    | 'b'
    | 'c'
    | 'v'
    | 't'
    | 'h'
    | 'Z'
    | 'z'
    | 'm'
    | 'M'
    | 'u'
    | 'U'
    ;

  export function encode(
    nameOrCode: name | code,
    buf: Buffer | string
  ): Buffer;

  export function decode(bufOrString: Buffer | string): Buffer;

  export function isEncoded(bufOrString: Buffer | string): string | false;
}
