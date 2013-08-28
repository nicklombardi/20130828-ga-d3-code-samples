d3.selectAll(".bar")
	.on("mouseover", function(d, i) {
			d3.select(this)
					.transition()
							.duration(2000)
							.attr("height", "0");
});