import React, { Component } from 'react';
import * as d3 from 'd3';

class Sleep extends Component {
    state ={
        data: []
    }

    componentDidMount(){
        this.drawChart();
    }

    drawChart() {
        const margin = 60;
        const width = 500 - 2 * margin;
        const height = 480 - 2 * margin;

        const data = [12, 5, 6, 6, 9, 10];
          
        const svg = d3.select("body").append("svg").attr("width", 700).attr("height", 300);
                 
        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => 300 - 10 * d)
            .attr("width", 65)
            .attr("height", (d, i) => d * 10)
            .attr("fill", "green")

        svg.append('text')
            .attr('x', -(height / 2) - margin)
            .attr('y', margin / 2.4)
            .attr('transform', 'rotate(-90)')
            .attr('text-anchor', 'middle')
            .text('Number of Hours')
        
        svg.append('text')
            .attr('x', width / 2 + margin)
            .attr('y', 300)
            .attr('text-anchor', 'middle')
            .text('Days')
      }

    render(){
        return(
            <div>
                
            </div>
        )
    }

}

export default Sleep;