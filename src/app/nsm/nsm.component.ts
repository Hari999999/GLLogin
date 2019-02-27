import { Component, ViewChild,  OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-nsm',
  templateUrl: './nsm.component.html',
  styleUrls: ['./nsm.component.css']
})
export class NSMComponent implements OnInit {

  @ViewChild('dataTable') table: { nativeElement: any; };
  dataTable: any;

  constructor() { }

  ngOnInit(): void  {
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable();
  }

}
