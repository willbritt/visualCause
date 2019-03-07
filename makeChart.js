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
  var width = 1000;
  var height = 500;
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
  
  svg.selectAll("text")
   .data(data)
   .enter()
   .append("text")
   .text(function(d)
      { return d.W;})
   .attr("x", function(d,i)
      { return (i * barWidth) + 20;})
   .attr("y", function(d)
      { return height - (d.W*10)+15;})
   .attr("fill", function(d) 
      {return "white";})
   .attr("font-weight", "bold")
  
   svg.selectAll("text")
   .data(data)
   .enter()
   .append("text")
   .text(function(d)
      { return d.Team;})
   .attr("x", function(d,i)
      { return (i * barWidth) + 20;})
   .attr("y", function(d)
      { return height - (d.W*10)+20;})
   .attr("fill", function(d) 
      {return "black";})
   .attr("font-weight", "bold")
      
}
      
