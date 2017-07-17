KISSY.add('app/views/manage/assets/detail', function (S, View, MM, VOM, Router, Node, Util) {
  var $ = Node.all

  return View.extend({
    render: function () {
      var me = this
      var loc = me.location
      var id = loc.params.id

      me.manage(MM.fetchAll([{
        name: "assets_detail",
        urlParams: {
          id: id
        }
      }], function (errs, MesModel) {
        var data = MesModel.get('data')
      
        me.setViewPagelet({
          info: data.info
        })
      }))
    }
  })
},{
  requires:[
    'mxext/view',
    'app/models/modelmanager',
    'magix/vom',
    'magix/router',
    'node',
    'app/util/util'
  ]
})