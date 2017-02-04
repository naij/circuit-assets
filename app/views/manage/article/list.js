KISSY.add('app/views/manage/article/list', function (S, View, MM, VOM, Router, Node, Util, Moment) {
  var $ = Node.all

  return View.extend({
    locationChange: function (e) {
      this.render()
    },
    render: function () {
      var me = this
      var loc = me.location
      var params = loc.params
      var typeId = params.typeId || 'f2e'
      var pageNo = params.pageNo || 1
      var pageSize = params.pageSize || 50
      var typeList = [
        {
          typeId: 'f2e',
          typeName: 'f2e'
        },
        {
          typeId: 'discovery',
          typeName: 'discovery'
        },
        {
          typeId: 'life',
          typeName: 'life'
        }
      ]

      S.each(typeList, function (item) {
        if (item.typeId == typeId) {
          item.selected = true
          return false
        }
      })

      me.manage(MM.fetchAll([{
        name: 'article_actived_list',
        urlParams: {
          type: typeId,
          pageNo: pageNo,
          pageSize: pageSize
        }
      }], function (errs, MesModel) {
        var data = MesModel.get('data')

        me.setViewPagelet({
          list: data.list,
          typeList: typeList,
          pageNo: pageNo,
          pageSize: pageSize,
          totalCount: data.totalCount
        }, function () {
          me.components()
        })
      }))
    },
    components: function () {
      var me = this
      var pagelet = me.getManaged('pagelet')
      var typeDropdown = pagelet.getBrick('J_type_dropdown')
      typeDropdown.on('selected', function (ev) {
        me.navigate('typeId=' + ev.value)
      })

      var pagination = pagelet.getBrick('J_pagination')
      pagination && pagination.on('gotoPage', function(ev) {
        me.navigate('pageNo=' + ev.index)
      })
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
            name: 'article_remove',
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
        confirmTitle: '删除文章',
        confirmContent: '您确定要删除这篇文章？'
      }
      Util.showDialog(dialogConfig, viewName, viewOptions)
    },
    renderer: {
      list: {
        updatedAt: function (self) {
          return Moment(this.updatedAt).format('YYYY-MM-DD HH:mm:ss')
        },
        status: function(self) {
          switch (this.status) {
            case 0:
              return '<span class="color-orange">草稿</span>'
            case 1:
              return '<span class="color-green">正式</span>'
            case 2:
              return '<span class="color-red">已删除</span>'
          }
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