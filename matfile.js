var mat   = require('mat')
var proxy = require('mat-proxy')
var less  = require('mat-less')

mat.env({
  port: 8988
})

// 预编译less
mat.task('less', function () {
  mat.url([/.*\.css/])
    .rewrite([
      [/\.css/g, '.less']
    ])
    .use(less({
      sourceMap: {sourceMapFileInline: true}
    }))
})

mat.task('pushState', function () {
  mat.url([/^((?!\.(css|less|js|html|ico|swf|woff)).)*$/])
    .rewrite([
      [/(\/.*)+/, 'index.html']
    ])
})

mat.task('default', ['less', 'pushState'], function () {
  mat.url([/\.json/])
    .use(proxy({
      proxyPass: '127.0.0.1:7002'
    }))
})