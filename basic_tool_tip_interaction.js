var div = d3.select("body").append("div")   
    .style("position", "absolute")
    .style("text-align", "center")
    .style("width", "240px")
	 .style("height", "2.5em")
	 .style("font", "1.5em sans-serif")
    .style("color", "yellow")
	 .style("background", "black")
	 .style("border-radius", "8px")
	 .style("border", "solid 1px green")
    .style("opacity", 0);

function mouseover(d) {
    div.html("Sepal Width: " + d.sepalWidth + "<br /> Sepal Length: " + d.sepalLength)
        .style("left", (d3.event.pageX + 9) + "px")
        .style("top", (d3.event.pageY - 43) + "px")
        .style("opacity", 1);
}


function mouseout() {
    div
        .style("opacity", 1e-6);
}


d3.selectAll(".dot")
  .on("mouseover", mouseover)
  .on("mouseout",  mouseout);