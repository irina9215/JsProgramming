$(function (){
  getAirDayData();
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
        
        var data = NewData(result.Head[0].Rec_Time.split(' ')[0]);
        date = date.getFullYear() + '月' + (date.getMonth() + 1) + '月' + date.getDate() + '日';
        
         $('#lblDate1').html(date);
         $('#lblDate2').html('（' + date + '）');
      }
      
      genAreaAQIShow(result.Head);
      
    }
    
  });
}
