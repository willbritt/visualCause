var dataP = d3.csv("wc_standings.csv");

dataP.then(function(data)
{
  console.log("data",data);
  drawChart(data, "#CSV");
  drawLegend(data, "#CSVkey"); 
},
function(err)
{
  console.log(err);
});

var drawChart = function(data, idName)
{
  var width = 1000;
  var height = 500;
  var barWidth = width/data.length;
  var svg = d3.select(idName)
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
  
}
  
//********
  
  var drawLegend = function(data, idName)
{
  var width = 200;
  var height = 200;
  var boxWidth = 15;
  var svg = d3.select(idName)
              .attr("height", height)
              .attr("width", width);
  svg.selectAll("rect")
     .data(data)
     .enter()
     .append("rect")
     .attr("x", function(d,i)
      { return 25;})
    .attr("y", function (d, i)
      { return (i+1)*10;})
    .attr("width", boxWidth)
    .attr("height",boxWidth-3)
    .attr("fill", function(d)
      { return d.Color;})

svg.selectAll("text")
   .data(data)
   .enter()
   .append("text")
   .text(function(d)
      { return d.Team;})
   .attr("x", function(d,i)
      { return 45})
   .attr("y", function(d, i)
      { return (i+1)*10;})
   .attr("fill", "black")
      
}
      
