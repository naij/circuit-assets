KISSY.add('app/views/default', function (S, View, VOM, UA, Node, R, Util) {
  var $ = Node.all
  return View.extend({
    init: function () {
      var me = this
      me.observeLocation({
        pathname: true
      })
    },
    render: function () {
      var me = this
      me.setViewPagelet({
      }, function () {
        me.mountMainFrame()
      })
    },
    mountMainFrame: function () {
      var me = this
      var loc = me.location
      var pathname = loc.pathname
      var vframe = VOM.get('magix_vf_main')
      if (pathname == '/') {
        var viewPath = 'app/views/manage/article/list'
      } else {
        var viewPath = 'app/views' + pathname
      }
      
      vframe.mountView(viewPath)
    },
    locationChange: function (e) {
      this.mountMainFrame()
      Util.hideDialog()
      Util.hideToolTip()
    }
  })
}, {
  requires: [
    'mxext/view',
    'magix/vom',
    'ua',
    'node',
    'magix/router',
    'app/util/util'
  ]
})