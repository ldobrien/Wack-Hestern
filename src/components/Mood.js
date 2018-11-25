import React, { Component } from 'react';
// import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries} from 'react-vis';
// import React from 'react';
import ReactDOM from 'react-dom';
import * as V from 'victory';
import { VictoryBar , VictoryChart, VictoryZoomContainer, VictoryLine, VictoryTheme, VictoryAxis, VictoryLabel } from 'victory';

class Mood extends Component {
    state = {

    }

    handleZoom(domain) {
        this.setState({
            selectedDomain: domain
        });
    }
    
    handleBrush(domain) {
        this.setState({
            zoomDomain: domain
        });
    }

    render(){
        const data = this.props.data;
        return(
            <div>
          <VictoryChart width={600} height={350} scale={{x: "time"}} theme={VictoryTheme.material}
            containerComponent={
              <VictoryZoomContainer responsive={false}
                zoomDimension="x"
                zoomDomain={this.state.zoomDomain}
                onZoomDomainChange={this.handleZoom.bind(this)}
              />
            }
          >
            <VictoryLabel text="Mood" style ={{ fontSize: 30}} x={300} y={30} textAnchor="middle"/>
            <VictoryAxis label="Date" style={{ axisLabel: {padding: 30}}} fixLabelOverlap/>
            <VictoryAxis dependentAxis label="Rating" style={{ axisLabel: {padding: 40}}}/>

            <VictoryLine
              style={{
                data: {stroke: "green"}
              }}
              data={data}
            />

          </VictoryChart>
      </div>
        )
    }

}

export default Mood;