import * as d3 from 'd3'

const BoardSVG = (id: string, width: number, height: number): void => {

  let componentSVG = d3
    .select(`#${id}`)
    .selectAll<SVGSVGElement, any>("svg")
    .data((d) => [d]);

  componentSVG = componentSVG.join((enter) =>
    enter
      .append<SVGSVGElement>("svg")
      .attr("id", `${id}-svg`)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", `0, 0, ${width}, ${height}`)
      .merge(componentSVG)
  );

  let boardGroup = d3
    .select(`#${id}-svg`)
    .selectAll<SVGGElement, any>("g")
    .data((d) => [d]);
  
  boardGroup = boardGroup.join((enter) =>
  enter
    .append<SVGGElement>("g")
    .attr("id", `${id}-svg-group`)
    .merge(boardGroup)
  );


  const boardBorders = boardGroup
  .selectAll<SVGCircleElement, any>("circle")
  .data<number>([0.7, 1])
  .join(
    (enter) =>
      enter
        .append<SVGCircleElement>("circle")
        .attr("stroke-opacity", 0.6)
        .attr("stroke-width", 1)
        .attr("class", "cirlce")
        .call((enter: any) =>
          enter
            .transition()
            .duration(200)
            .ease(d3.easeExpInOut).attr("cx", width/2).attr("cy", height/2)
            .attr(
              "r",
              (d: number) => (d*Math.min(height, width))/2
            )
        )
  );



  // useEffect(() => {
  //   console.log("cirlginglknsdf")
  //   componentSVG.append("circle").attr("r", height/2)
  // }, [componentSVG, height])


};


export default BoardSVG