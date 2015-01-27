$(function (){
  getAirDayData();
  getLast7DaysAQI();
});

function getAirDayData() {

  $ajax({
    url:"/Handler/DailyDataHandler.ashx",
    data:{action:"GetAirDayData"},
    type:"get",
    dataType:"json",
    cache:false,
    error:function () { alert(“提示：获取数据失败”)；}，
    success：function(result) {
      var length = result.Head.length;
      if(length != 0 ) {
        var cityData = result.Head[length-1];
        genDashboardChart(cityData.AQI_24H);
        genCityAQIShow(cityData);
        
      }
    }
    
  })
}
