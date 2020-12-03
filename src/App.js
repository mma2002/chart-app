import React, {Component} from 'react';
import './App.css';
import Chart from './components/Chart';

class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {}
    }
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['Wayne Gretzky', 'Gordie Howe', 'Jaromir Jagr', 'Brett Hull',
         'Marcel Dionne', 'Phil Esposito', 'Mike Gartner', 'Alex Ovechkin', 'Mark Messier', 'Steve Yzerman'],
        datasets:[
            {
                label:'Scaters',
                data:[
                    894,
                    801,
                    766,
                    741,
                    731,
                    717,
                    708,
                    706,
                    694,
                    692
                ],
                backgroundColor:[
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(153, 55, 100, 0.6)',
                    'rgba(150, 20, 200, 0.6)',
                    'rgba(100, 70, 32, 0.6)',
                ]
            }
        ]
    }
    });
  }
  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to React</h2>
        </div>
        <Chart chartData={this.state.chartData} location="NHL" legendPosition="bottom"></Chart>
      </div>
    );
  
  }
}
// function App() {
// }

export default App;
