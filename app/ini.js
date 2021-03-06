KISSY.add('app/ini', function (S, Magix) {
  var Routes = {
    'app/views/default': [
      {path: '/', isLogin: true},
      {path: '/manage/login'},
      {path: '/manage/article/list', isLogin: true},
      {path: '/manage/article/add', isLogin: true},
      {path: '/manage/article/edit', isLogin: true},
      {path: '/manage/article/recyclebin', isLogin: true},
      {path: '/manage/assets/list', isLogin: true},
      {path: '/manage/assets/detail', isLogin: true},
      {path: '/manage/picture/list', isLogin: true},
      {path: '/manage/spider/list', isLogin: true},
      {path: '/manage/tool/list', isLogin: true}
    ]
  }
  return {
    defaultView: 'app/views/default',
    notFoundView: 'app/views/common/404',
    routes: function (pathname) {
      if (!S.isEmptyObject(Routes)) {
        var s
        S.each(Routes, function(v, k) {
          S.each(v, function(item) {
            if (item.path == pathname) {
              if (item.isLogin) {
                Magix.checkToLogin()
              }

              s = k
              return false
            }
          })
          if (s) return false
        })
        if (s) return s
        return this.notFoundView
      }
      return this.defaultView
    }
  }
}, {
  requires: [
    'magix/magix'
  ]
})