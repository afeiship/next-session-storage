# next-session-storage
> SessionStorage based on next.

## installation
```bash
npm install -S @feizheng/next-session-storage
```

## apis
| api | params | description   |
|-----|--------|---------------|
| get | -      | desc balabala |

## usage
```js
import NxSessionStorage from '@feizheng/next-session-storage';

const _session = new nx.SessionStorage('ts');
_session.set('myseesion1','svalue1');

console.log(_session.gets());
```
