var dataP = d3.csv("wc_standings.csv");

dataP.then(function(data)
{
  console.log("data",data);
  drawChart(data); 
},
function(err)
{
  console.log(err);
});

var drawChart = function(Data)
{
  var width = 400;
  var height = 200;
  var barWidth = width/data.length;
  var svg = d3.select("svg")
              .attr("height", height)
              .attr("width", width);
  svg.selectAll("rect")
     .data(data)
     .enter()
     .append("rect")
     .attr("x", function(d,i)
      { return i*barWidth;})
     .attr("y", function (d)
      { return height - d.w*20;})
     .attr("width", barWidth)
     .attr("height", function(d)
      { return d.w*20;})
     .attr("fill", function(d)
      { return d.color;})
      
}
      
