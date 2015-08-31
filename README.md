Forked from [rethinkdb-websocket-client](https://github.com/mikemintz/rethinkdb-websocket-client), uses [rethinkdbdash](https://www.npmjs.com/package/rethinkdbdash) instead of [rethinkdb](https://www.npmjs.com/package/rethinkdb).

Usage
-----

Setup a simple server that proxy websockets to RethinkDB

```
$ websockify localhost:8015 localhost:28015
```

Use it with webpack

```
var r = require('rethinkdbdash')({
  port: 8015
})
r.table('users').count().run().then(function(user) {
  console.log('user')
})
```
