import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  weight:string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Proyecto 1', weight: 'Material x', symbol: '10/12/23'},
  {name: 'Proyecto 1', weight: 'Material y', symbol: '01/01/23'},
  {name: 'Proyecto 2', weight: 'Material z', symbol: '28/06/23'},
  {name: 'Proyecto 7', weight: 'Material a', symbol: '08/02/23'},
  {name: 'Proyecto 5', weight: 'Material c', symbol: '19/07/23'},
  {name: 'Proyecto 1', weight: 'Material e', symbol: '20/07/23'},
  {name: 'Proyecto 12', weight: 'Material xe', symbol: '15/05/23'},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  displayedColumns: string[] = ['name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
