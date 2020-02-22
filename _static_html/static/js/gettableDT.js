/*jslint browser: true*/
/*global $*/


$(document).ready(function () {
  $.get('/tabledata', function (data) {
    $('#exam').DataTable({
      data: data.data,
      'paging':false,
      bInfo:false,
      searching : false, //去掉搜索框方法一：百度上的方法，但是我用这没管用
      sDom : '"top"i',   //去掉搜索框方法二：这种方法可以，动态获取数据时会引起错误
      bFilter: false,    //去掉搜索框方法三：这种方法可以
      bLengthChange: false,   //去掉每页显示多少条数据方法
           
      columns: [
        {"data": "A", "title": "番号付け"},
        {"data": "B", "title": "ホルダー名"},
        {"data": "C", "title": "取引先"},
        {"data": "D", "title": "原価"},
        {"data": "E", "title": "入場時間"},
      ]
    });
  });
});