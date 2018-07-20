# TypeStub for (js-)multibase
source: https://github.com/multiformats/js-multibase

## TL;DL
add types to npm package multibase and allow client to import only once directly

## Example
```typescript
import * as Horizon from "@horizon/client/dist/horizon";
import * as typeStubHorizon from "../lib/typeStub-horizon-client/index";

let hz:typeStubHorizon.Horizon = Horizon();
hz.onReady(()=>console.log('ready'));
hz.connect();
```
