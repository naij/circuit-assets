KISSY.add('app/views/manage/spider/list', function (S, View, MM, VOM, Router, Node, Util, Moment) {
  var $ = Node.all

  return View.extend({
    locationChange: function (e) {
      this.render()
    },
    render: function () {
      var me = this
      var loc = me.location
      var params = loc.params
      var pageNo = params.pageNo || 1
      var pageSize = params.pageSize || 50

      me.manage(MM.fetchAll([{
        name: "spider_record_list",
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
    },
    renderer: {
      list: {
        createdAt: function (self) {
          return Moment(this.createdAt).format('YYYY-MM-DD HH:mm:ss')
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