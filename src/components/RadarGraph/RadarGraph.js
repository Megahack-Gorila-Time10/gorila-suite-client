import React, { Component, Fragment } from "react";
import * as S from "./style";
import {Radar} from 'react-chartjs-2';
import SuitabilityContext from "../../context/SuitabilityContext";

class RadarGraph extends Component {
    getChartData = () => {
        this.data = {
            labels: ['monitoramento','conhecimento sobre investimentos','reação à perdas', 'expectativa de retorno', 'liquidez no patrimonio','visão de longo prazo'],
            datasets: [
              {
                label: 'Seu resultado',
                backgroundColor: 'rgba(255, 120, 120, 0.7)',
                borderColor: 'rgba(255, 150, 120, 0.7)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: this.context.state.profileResult.data_points
              },
            ]
          };
    }
    
    render() {
        this.getChartData();
        return (
            <S.GraphWrapper>
                <Radar data={this.data} />
            </S.GraphWrapper>
        );
    }
}

RadarGraph.contextType = SuitabilityContext;

export default RadarGraph;
