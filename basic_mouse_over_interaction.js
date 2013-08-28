d3.selectAll(".dot")
    .on("mouseover", function(d, i) {
      d3.select(this)
        .transition()
          .duration(1000)
          .attr("r", "10.5")
        .transition()
           .duration(1000);
          .attr("r", "3.5")
    });