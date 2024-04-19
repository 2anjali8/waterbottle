import { Component, OnInit,Input } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  @Input() perfectCount: number = 0;
  @Input() withoutCapCount: number = 0;
  @Input() withoutLabelCount: number = 0;
  @Input() withoutBothCount: number = 0;
  constructor(){

  }
 ngOnInit(): void {
   this.createPieChart();
 }
 createPieChart(): void {
  const chartDom = document.getElementById('pieChart');
  const pieChart = echarts.init(chartDom);

  const option = {
    title: {
      text: 'BOTTLE ANALYSIS',
      left: 'center',
      
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    series: [
      {
        name: 'Count',
        type: 'pie',
        radius: '55%',
        data: [
          { value: this.perfectCount, name: 'Perfect Bottles' },
          { value : this.withoutCapCount, name : 'Bottles without cap'},
          {value : this.withoutLabelCount, name : 'Bottles without label'},
          {value : this.withoutBothCount, name :'Bottles without cap & label'}
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  pieChart.setOption(option);
}
}
