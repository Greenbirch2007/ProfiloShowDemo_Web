


// getJSON(url,作用的返回内容)  # 接口单项请求请求成功
$.getJSON('http://127.0.0.1:5000/jstock',function (content) {
    D_T = content.data;

     var chart = Highcharts.chart('container', {
       title: {

           text: '私のポートフォリオ収益率 '
       },
       subtitle: {
           text: '更新:2020.2.22'
       },
       labelFormatter:{
        layout:"horizontal"
       },
         xAxis: {
  
            labels: {
                overflow: 'justify'
            },
            
        },

        chart: {
            type:'spline'
            },
       yAxis: {
           name:null,
           opposite:true,
   

       },
       legend: {
           layout: 'vertical',
           align: 'right',
           verticalAlign: 'middle'
       },
       credits: {
        enabled:false
    },
    color : 'red' ,
    plotOptions: {
        // 允许数据列点击标记， 默认false
        allowPointSelect : false ,
 

        line:{
            // 数据列的颜色
        }
        

        },
       series: [{
           name:"R(%)",
           data:D_T,
           //　数据量太大这种方法就失效了！
       }],
       responsive: {
           rules: [{
               condition: {
                   maxWidth: 500
               },
               chartOptions: {
                   legend: {
                       layout: 'horizontal',
                       align: 'center',
                       verticalAlign: 'bottom'
                   }
               }
           }]
       }
});})



