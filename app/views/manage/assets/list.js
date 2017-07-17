KISSY.add('app/views/manage/assets/list', function (S, View, MM, VOM, Router, Node, Util, Calendar, Moment) {
  var $ = Node.all

  return View.extend({
    init: function (e) {
      var me = this
    },
    locationChange: function (e) {
      this.render()
    },
    render: function () {
      var me = this
      var loc = me.location
      var params = S.clone(loc.params)
      var pageNo = params.pageNo || 1
      var pageSize = params.pageSize || 50

      me.manage(MM.fetchAll([{
        name: "assets_list",
        urlParams: {
          pageNo: pageNo,
          pageSize: pageSize
        }
      }], function (errs, MesModel) {
        var data = MesModel.get('data')

        me.setViewPagelet({
          list: data.list,
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
      var pagination = pagelet.getBrick('J_pagination')
      pagination && pagination.on('gotoPage', function(ev) {
        me.navigate('pageNo=' + ev.index)
      })
    },
    renderer: {
      list: {
        createdAt: function (self) {
          return Moment(this.createdAt).format('YYYY-MM-DD HH:mm:ss')
        },
        type: function(self) {
          if (/daily/.test(this.refName)) {
            return '日常'
          } else {
            return '正式'
          }
        },
        status: function(self) {
          switch(this.status) {
            case 0:
              return '<span class="color-red">发布失败</span>'
              break
            case 1:
              return '<span class="color-yellow">发布中</span>'
              break
            case 2:
              return '<span class="color-green">发布成功</span>'
              break
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
    'brix/gallery/calendar/index',
    'app/libs/moment'
  ]
})