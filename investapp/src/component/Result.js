/**
 * Created by cpant1 on 12/2/16.
 */
import React, {Component} from "react";
import highCharts from "highcharts";
import addFunnel from "highcharts/modules/funnel";

 import classNames from 'classnames';
 class Result extends Component {



    constructor(props) {
        super(props);

    }
    componentDidMount()
    {
        // Extend Highcharts with modules
        if (this.props.modules) {
            this.props.modules.forEach(function(module) {
                module(highCharts);
            });
        }
        // Set container which the chart should render to.
        this.chart = new highCharts[this.props.type || "Chart"](
            this.props.container,
            this.props.options
        );
    }
    render()
    {
        const config = {
            container: 'result',
            options: {
                chart: {
                    type: 'funnel',
                    marginRight: 100
                },
                title: {
                    text: 'React example',
                    x: -50
                },
                plotOptions: {
                    series: {
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b> ({point.y:,.0f})',
                            color: (highCharts.theme && highCharts.theme.contrastTextColor) || 'black',
                            softConnector: true
                        },
                        neckWidth: '30%',
                        neckHeight: '25%'

                        //-- Other available options
                        // height: pixels or percent
                        // width: pixels or percent
                    }
                },
                legend: {
                    enabled: false
                },
                series: [{
                    name: 'Unique users',
                    data: [
                        ['Website visits', 15654],
                        ['Downloads', 4064],
                        ['Requested price list', 1987],
                        ['Invoice sent', 976],
                        ['Finalized', 846]
                    ]
                }]
            }
        };
       // addFunnel(highCharts);
        //React.createElement(Chart, { container: 'chart', options: options });
        //React.createElement('div', { id: 'chart' });
        //highCharts.chart('result', config);
        return <div>resukt</div>;
    }
}
 export default Result;
