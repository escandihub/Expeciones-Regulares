import { Component, OnInit, Output, EventEmitter, Input, Injectable, OnChanges, SimpleChange} from '@angular/core';
import { NgModel } from '@angular/forms';
import { NgOnChangesFeature } from '@angular/core/src/render3';



@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
@Injectable()
export class ListaComponent implements OnInit {
  //selectedValue = 'option2';
  public v;
  lists = [
    {value: 1, viewValue: '(a|b)* · b'},
    {value: 2, viewValue: 'Pizza'}
   // {value: 'tacos-2', viewValue: 'Tacos'}
];

// selectedValues = 0;

texts = [
      {value: '1', viewValue :'cualquier secuencia de a\'s y de b\'s siempre que termine con aa' },
      {value: '2', viewValue: 'Some other value'}
];

//@Input() selectedValue: string;
//@Output() onValue: EventEmitter<any> = new EventEmitter();
@Output('change') valor = new EventEmitter<any>();
@Input() sum = true;
selectedValue = 0;

Showvalor(): String{
   this.v = this.selectedValue;
   return this.v
}

algo(num:string){
  console.log(num)
}


OnChanges(){
  this.v = this.selectedValue
            
}








  ngOnInit() { 
    
} 

}
