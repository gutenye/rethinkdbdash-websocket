'use strict';

import rethinkdbdash from 'rethinkdbdash';
import {configureTcpPolyfill} from './TcpPolyfill';
import objectAssign from 'object-assign';

export default function main(options) {
  let opt = objectAssign({
    path: '/',
    secure: false,
    wsProtocols: ["binary"]
  }, options);
  configureTcpPolyfill(opt);
  return rethinkdbdash(opt);
}
