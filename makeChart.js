var dataP = d3.csv("wc_standings.csv");

dataP.then(function(data)
{
  console.log("data",data);
  drawChart(data, "#CSV"); 
},
function(err)
{
  console.log(err);
});

var drawChart = function(data)
{
  var width = 800;
  var height = 400;
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
      { return height - d.W*10;})
     .attr("width", barWidth)
     .attr("height", function(d)
      { return d.W*10;})
     .attr("fill", function(d)
      { return d.Color;})
      
}
      
