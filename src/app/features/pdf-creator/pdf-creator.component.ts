import { Component, ViewChild, ElementRef,OnInit } from '@angular/core';
import {jsPDF} from 'jspdf';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
]; 

@Component({
  selector: 'app-pdf-creator',
  templateUrl: './pdf-creator.component.html',
  styleUrls: ['./pdf-creator.component.scss']
})
export class PdfCreatorComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  @ViewChild('content',{static:false}) el!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  makeTextPdf(){
    let pdf = new jsPDF();
    pdf.text("Hello KIshan, this is your first pdf using angular",10,10)
    pdf.save("the pdf file name")

  }

  makePdf(){
    // let pdf = new jsPDF('l','px','a4')
    // pdf.html(this.el!.nativeElement,{
    //   callback:(pdf)=>{
    //     pdf.save('Table_pdf')
    //   }
    // })
    let pdf = new jsPDF('p','pt','letter')
    pdf.html(this.el!.nativeElement,{
      callback:(pdf)=>{
        pdf.save('Table_pdf')
      }
    })
    
  }

}
