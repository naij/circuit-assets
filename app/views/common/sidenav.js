KISSY.add('app/views/common/sidenav', function (S, View, Node, MM) {
  var $ = Node.all

  var PATHMAP = {
    '/manage/article/list': [
      '/',
      '/manage/article/add',
      '/manage/article/edit'
    ],
    '/manage/picture/list': [
      '/manage/picture/add'
    ]
  }

  return View.extend({
    locationChange: function (e) {
      this.render()
    },
    render: function () {
      var me = this

      me.setViewPagelet({
      
      }, function () {
        me.updateNav()
      }, function () {
        me.updateNav()
      })
    },
    updateNav: function () {
      var me = this
      var loc = me.location
      var path = loc.pathname
      var params = loc.params
      var $sideNav = $('.side-nav .nav')

      // 重新设置一下path
      S.each(PATHMAP, function (v, k) {
        if (S.inArray(path, v)) {
          path = k
        }
      })

      // 选择导航对应的链接
      $sideNav.all('a').each(function(item, index) {
        if (item.attr('href') == path) {
          item.addClass('active')
        } else {
          item.removeClass('active')
        }
      })
    }
  })
}, {
  requires: [
    'mxext/view',
    'node', 
    'app/models/modelmanager'
  ]
})