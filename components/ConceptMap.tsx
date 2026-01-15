import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

// This component acts as a placeholder for the actual "concept_map.jsx"
// Simulating a D3 force-directed graph.

interface Node extends d3.SimulationNodeDatum {
  id: string;
  group: number;
}

interface Link extends d3.SimulationLinkDatum<Node> {
  source: string | Node;
  target: string | Node;
  value: number;
}

const ConceptMap: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(600);
  const [height, setHeight] = useState(400);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.clientWidth);
      setHeight(containerRef.current.clientHeight);
    }
  }, []);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous render

    const nodes: Node[] = [
      { id: "Mathematics", group: 1 },
      { id: "Algebra", group: 2 },
      { id: "Calculus", group: 2 },
      { id: "Geometry", group: 2 },
      { id: "Linear Equations", group: 3 },
      { id: "Derivatives", group: 3 },
      { id: "Integrals", group: 3 },
      { id: "Polygons", group: 3 },
      { id: "Variables", group: 3 },
    ];

    const links: Link[] = [
      { source: "Mathematics", target: "Algebra", value: 1 },
      { source: "Mathematics", target: "Calculus", value: 1 },
      { source: "Mathematics", target: "Geometry", value: 1 },
      { source: "Algebra", target: "Linear Equations", value: 1 },
      { source: "Algebra", target: "Variables", value: 1 },
      { source: "Calculus", target: "Derivatives", value: 1 },
      { source: "Calculus", target: "Integrals", value: 1 },
      { source: "Geometry", target: "Polygons", value: 1 },
    ];

    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id((d: any) => d.id).distance(100))
      .force("charge", d3.forceManyBody().strength(-300))
      .force("center", d3.forceCenter(width / 2, height / 2));

    const link = svg.append("g")
      .attr("stroke", "#94a3b8")
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke-width", 2);

    const node = svg.append("g")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", 10)
      .attr("fill", (d) => d.group === 1 ? "#3b82f6" : d.group === 2 ? "#60a5fa" : "#93c5fd")
      .call(drag(simulation) as any);

    const labels = svg.append("g")
      .attr("class", "labels")
      .selectAll("text")
      .data(nodes)
      .join("text")
      .attr("dx", 15)
      .attr("dy", 4)
      .text((d) => d.id)
      .attr("font-size", "12px")
      .attr("fill", "#1e293b")
      .attr("font-family", "sans-serif");

    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      node
        .attr("cx", (d: any) => d.x)
        .attr("cy", (d: any) => d.y);
      
      labels
        .attr("x", (d: any) => d.x)
        .attr("y", (d: any) => d.y);
    });

    function drag(simulation: d3.Simulation<Node, undefined>) {
      function dragstarted(event: any) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
      }
      
      function dragged(event: any) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
      }
      
      function dragended(event: any) {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
      }
      
      return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
    }

  }, [width, height]);

  return (
    <div ref={containerRef} className="w-full h-full bg-slate-50 rounded-xl overflow-hidden border border-slate-200">
      <svg ref={svgRef} width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full h-full" />
    </div>
  );
};

export default ConceptMap;