KISSY.add('app/views/manage/article/recyclebin', function (S, View, MM, VOM, Router, Node, Util, Moment) {
  var $ = Node.all

  return View.extend({
    locationChange: function (e) {
      this.render()
    },
    render: function () {
      var me = this

      me.manage(MM.fetchAll([{
        name: 'article_removed_list'
      }], function (errs, MesModel) {
        var data = MesModel.get('data')

        me.setViewPagelet({
          list: data
        })
      }))
    },
    'del<click>': function (e) {
      e.halt()
      var me = this
      var top = $('#' + e.currentId).parent('tr').offset().top
      var dialogConfig = Util.getDefaultDialogConfig({
        width: 400, 
        top: top
      })
      var viewName = 'app/views/common/confirm'
      var viewOptions = {
        confirmFn: function(){
          me.manage(MM.fetchAll([{
            name: 'article_remove_complete',
            postParams: {
              id: e.params.id
            }
          }], function(MesModel) {
            Util.hideDialog()
            me.render()
          }))
        },
        cancelFn: function(){
          Util.hideDialog()
        },
        confirmTitle: '彻底删除文章',
        confirmContent: '此过程不可逆，请谨慎操作！'
      }
      Util.showDialog(dialogConfig, viewName, viewOptions)
    },
    renderer: {
      list: {
        updatedAt: function (self) {
          return Moment(this.updatedAt).format('YYYY-MM-DD HH:mm:ss')
        }
      }
    }
  })
},{
  requires:[
    'mxext/view',
    'app/models/modelmanager',
    'magix/vom',
    'magix/router',
    'node',
    'app/util/util',
    'app/libs/moment'
  ]
})