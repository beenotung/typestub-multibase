import * as multibase from "typestub-multibase";
import {decode, isEncoded} from "typestub-multibase";

let data = 'the long data';
let code = multibase.encode('base64', data).toString();
let type = isEncoded(code);
let recover = decode(code).toString();
console.log({
  data,
  code,
  type,
  recover,
});
