import { Component, Input, Output, OnInit, EventEmitter, NgModule,  Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ListaComponent } from './app/lista/lista.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ListaComponent ]
})
export class AppComponent {
  title = 'Expreciones regulares';
  dato = "aaa";
  vamo = "a";
  error: boolean
  busca: boolean
  boton = "btn btn-primary wave-light"
  btnOk = "btn btn-success waves-effect "
  btnNO = "btn btn-danger waves-light"

  constructor(private lista: ListaComponent){ }
//---------------------------------------------------
lists = [
  {value: 1, viewValue: '(a|b)* · b'},
  {value: 2, viewValue: "[(ab)+ · (a/¬)]/[(ba)+ · (b/¬)]"},
  {value: 3, viewValue: "(a ·(aa)*)·c·(b·(bb)*)"},
  {value: 4, viewValue: "(a)*·b(bb)+"},
  {value: 5, viewValue: "b*·(ab/ba)"},
  {value: 6, viewValue: "(a*/b+)"},
  {value: 7, viewValue: "(a+/b+)·abba"},
  {value: 8, viewValue: "(a,b)*·000b"},
  {value: 9, viewValue: "(a,b)*·000000"},
  {value: 10, viewValue: "a+·b(bb)*"},
  {value: 11, viewValue: "abba (a+/b+*)"},
  {value: 12, viewValue: "(a,b)*·0000b"},
  {value: 13, viewValue: "(a*)·b(bb)*"},
  {value: 14, viewValue: "a*·(ca/ac)"},
  {value: 15, viewValue: "a*·(ca/ac)"},
];

texts = [
    {value: 1, viewValue :'cualquier secuencia de a\'s y de b\'s siempre que termine con aa' },
    {value: 2, viewValue: 'Some other value'}
];

public v
texto = ""
@Output('change') valor = new EventEmitter<any>();
@Input() sum = true;
selectedValue = 0;

Showvalor(){
   this.selectText()
   this.v = this.selectedValue
}

enviar(){
  ///cualquier secuencia de a`s y de b's siempre que termine con aa
    this.selectFuncion()
}

//-------------------------------------------------

selectText(){
  switch (this.selectedValue) {
    case 1:{
      this.texto = "cualquier secuencia de a\'s y de b\'s siempre que termine con aa";
      break;
    }
  
    case 2:{
    this.texto = "Cualquier secuencia de a's y b's siempre que no hay dos a's o dos b's "
      break;
    }
    case 3:{
      this.texto = "Un numero impar de a, una c y un numero impar de b"
        break;
      }
      case 4:{
        this.texto = "Una o mas a's y un numero impar de b's"
          break;
        }
      case 5:{
          this.texto = "Cualquier secuencia de b's tal que solo hay una a, en cualquier posicion"
            break;
          }  
      case 6:{
          this.texto = "Una secuencia de cero o mas a's seguida de una o mas b's"
            break;
            } 
      case 7:{
          this.texto = "Cualquier secuecia de a's o b's siempre que termine con abba"
           break;
                }   
      case 8:{
          this.texto = "Cualquier secuecia de a's o b's siempre que el cuarto caracter se b"
            break;
            }
      case 9:{
          this.texto = "Cualquier secuecia de a's o b's siempre que el nuemero total caracter de caracteres se 5"
            break;
          }
      case 10:{
          this.texto = "una o mas a's y un numero impar de b"
            break;
             }                
      case 11:{
        this.texto = "Cualquier secuecia de a's o b's siempre que empiece con abba"
        break;
      }
      case 12:{
        this.texto = "Cualquier secuecia de a's o b's siempre que el quinto caracter se b"
        break;
      }
      case 13:{
        this.texto = "cero o mas a's y un numero impar de b"
        break;
      }
      case 14:{
        this.texto = "Cualquier secuencia de a's tal que solo hay una c, en cualquier posicion"
          break;
        }       
    default: {
      break;
    }
  }
}

selectFuncion(){
  switch(this.selectedValue){
    case 1:{
      this.problema01();
      break;
    }
    case 2:{
      this.problema02();
      break;
    }
    case 3:{
      this.problema03();
      break;
    }
    case 4:{
      this.problema04();
      break;
    }
    case 5:{
      this.problema05();
      break;
    }
    case 6:{
      this.problema06();
      break;
    }
    case 7:{
      this.problema07();
      break;
    }
    case 8:{
      this.problema08();
      break;
    }
    case 9:{
      this.problema09();
      break;
    }
    case 10:{
      this.problema10();
      break;
    }
    case 11:{
      this.problema11();
      break;
    }
    case 12:{
      this.problema12();
      break;
    }
    case 13:{
      this.problema13();
      break;
    }
    case 14:{
      this.problema14();
      break;
    }
    default:{
      break;
    }

  }
}


//-------------------------------------------------
arreglo(){
  return  this.dato.split("")
}
//***********FUNCIONES*********/

  

  problema01(){
    let ex = this.arreglo();
    let a:boolean
    let x = 0
    let xa:boolean
    let aa:boolean
    for(let i = 0; i < ex.length; i++){
      if(ex[i] == 'a' || ex[i] == 'b' ){
        a = true
      }else{
        a = false
      }
    }

    for(let i = 0; i < ex.length-2; i++){
      if(ex[i] == 'a'){
        x++
      }
    }
    if(ex[x] == 'b'){
      xa = true
    }else{
      xa = false
    }

    
    
        if(ex[ex.length-1] == "a" && ex[ex.length-2] == "a"){
          aa = true 
        }else{
          aa = false
      }

      if(a == true && aa == true && xa == true){
        this.error = false        
        this.boton = this.btnOk
      }else{
        this.error = true
        this.boton = this.btnNO
      }
      
      console.log(this.error)
  }
  
  problema02(){ //se cicla 
    let ex = this.arreglo();

    for(let i = 0; i < ex.length; i+=2){
      console.log(i)
      if(ex[i] == 'a' && ex[i+1] == 'b' || ex[i] == 'b' && ex[i+1] == 'a' ){ // abab
          this.error = false 
          this.boton = this.btnOk
      }else{
        this.error = true 
        this.boton = this.btnNO
      }
    }
    console.log(this.error)
  }

  problema03(){
    let ex = this.arreglo()
    let a = this.impar('a')
    let  b = this.impar('b')
    let c = this.buscar('c')

    if( a == true && c == true && b == true){
      this.error = false
      this.boton = this.btnOk
    }else{
      this.error = true 
      this.boton = this.btnNO
    }console.log(this.error)/*
    console.log(this.error)
    console.log("impar a: "+ a)
    console.log("impar b: "+b)
    console.log("hay c: "+c)
    */
  }

  problema04(){
    let a = this.buscar('a')
    let imparb = this.impar('b')

    if(a == true && imparb == true){
      this.error = false
    }else{
      this.error = true
    }
    console.log(this.error)
  }

  problema05(){
    let b = this.buscar('b')
    let a = this.buscarCantidad('a', 1)

    if(b == true && a == true ){
        this.error = false
        this.boton = this.btnOk
    }else{
      this.error = true 
      this.boton = this.btnNO
    }
    console.log(this.error)
  }

  problema06(){
    let a = this.buscarCantidad('a', 0)
    let b = this.buscar('b')
    let ok = this.buscarAntes('a', 'b')

    if((a == true && b == true || ok == true)){
      this.error = false
      this.boton = this.btnOk
    }else{
      this.error = true
      this.boton = this.btnNO
    }
    console.log(this.error);
     
  }

  ///////////////////////////////////hoja 2 

  problema07(){
    let a = this.buscarAntesTerminar('a', 4)
    let b = this.buscarAntesTerminar('b', 4)
    let es:boolean
    let ex = this.arreglo()

    for(let i = ex.length-4; i < ex.length; i++){
      if(ex[i] == 'a' && ex[i+1] == 'b' && ex[i+2] == 'b' && ex[i+3] == 'a'){        
        es = true
        break;
      }else{
        es = false
      }      
    }

    if(a == true || b == true ){
      this.error = false
    }if(es == true){
      this.error = false
      this.boton = this.btnOk
    }else{
      this.error = true
      this.boton = this.btnNO
    }
    console.log(this.error);  
    
  }

  problema08(){
    let a = this.buscasApartir('a', 'b', 0)
    let es:boolean
    let ex = this.arreglo()

    for(let i = 0; i < ex.length; i++){
      if(i == 3 && ex[i] == 'b'){
        es = true
        break;
      }
    }

    if(a == true && es == true){
        this.error = false
        this.boton = this.btnOk
      
    }else{
      this.error = true
      this.boton = this.btnNO
    }
    console.log(this.error);
    
  }

problema09(){
    let a = this.buscar('a')
    let b = this.buscar('b')
    let total = this.total(5)

    if(a == true || b == true){
      this.error = false
    }
    if(total == true){
      this.error = false
      this.boton = this.btnOk
    }else{
      this.error = true
      this.boton = this.btnNO
    }

    console.log(this.error)
}

problema10(){///reparado checar otros del a o b
  let b = this.impar('b')
  let es:boolean
  let A:boolean

  let ex = this.arreglo()

  for(let i = 0; i < ex.length; i++){
    if(ex[i] == 'a' || ex[i] == 'b'){
      es = true
    }else{
      es = false
    }    
  }
  if(ex[0] == 'a'){
    A = true
  }

  if(b == true && es == true && A == true){
    this.error = false
    this.boton = this.btnOk
  }else{
    this.error = true
    this.boton = this.btnNO
  }
  
console.log(this.error);

}

problema11(){
 let ab = this.buscasApartir('a', 'b', 3)
 let es:boolean
 let ex = this.arreglo()

 for(let i = 0; i < 4; i++){
   if(ex[i] == 'a' && ex[i+1] == 'b' && ex[i+2] == 'b' && ex[i+3] == 'a'){        
     es = true
     break;
   }else{
     es = false
   } 
  }

  if(ab == true && es == true){
    this.error = false
    this.boton = this.btnOk
  }else{
    this.error = true
    this.boton = this.btnNO
  }

  console.log(this.error);
  
}

problema12(){
  let a = this.buscasApartir('a', 'b', 0)
    let es:boolean
    let ex = this.arreglo()

    for(let i = 0; i < ex.length; i++){
      if(i == 4 && ex[i] == 'b'){
        es = true
        break;
      }
    }

    if(a == true && es == true){
      this.error = false
      this.boton = this.btnOk

      
    }else{
      this.error = true
      this.boton = this.btnNO
    }
    console.log(this.error);
}

problema13(){
  let b = this.impar('b')
  let es:boolean
  
  let ex = this.arreglo()

  for(let i = 0; i < ex.length; i++){
    if(ex[i] == 'a' || ex[i] == 'b'){
      es = true
    }else{
      es = false
    }
  }

  if(b == true && es == true){
    this.error = false
    this.boton = this.btnOk
  }else{
    this.error = true
    this.boton = this.btnNO
  }
  
console.log(this.error);
}

problema14(){
  let a = this.buscasApartir('a', 'c', 0)
    let c = this.buscarCantidad('c', 1)


    if(a == true && c == true ){
        this.error = false
    }else{
      this.error = true 
    }
    console.log(a);
    console.log(c);
    
    
    console.log(this.error)
}

buscasApartir(a:string, b:string, posicion:number){
    let es:boolean
    let ex = this.arreglo()
    for(let i = posicion; i < ex.length; i++){
      if(ex[i] == a || ex[i] == b) {
        es = true
      }else{
        es = false
      }

    }
    return es
    
    
}
total(full:number){
    let es:boolean
    let ex = this.arreglo()

    if(ex.length == 5){
      es = true
    }else{
      es = false
    }

  return es 
}


  impar(a:string){
    let es:boolean
    let ex = this.arreglo()
    let impar = 0
    for (let i = 0; i < ex.length; i++) {
      if(ex[i] == a){
        impar++
      }if(impar%2 == 0){
        es = false
      }else{
        es = true
      }

      
    }
    return es
  } 

  buscarAntesTerminar(letter:string, antes:number){
    let ex = this.arreglo()
    let ok:boolean
    for(let i = 0; i < ex.length-antes; i++){
      if(ex[i] == letter){
        ok = true
      }else{
        ok = false
      }
    }
    return ok
  }

  buscarAntes(a:string, b:string){
    let ex = this.arreglo()
    let antes:boolean
    let posA
    let posB
    for(let i = 0; i < ex.length; i++){
        if(ex[i] == a){
          posA = i
        }if(ex[i] == b){
          posB = i
        }
    }
    if(posA < posB){
      antes = true
    }else{
      antes = false
    }
    return antes
  }

  buscarCantidad(c:string, cantidad:number){
    let ex = this.arreglo()
    let  cuanto:boolean
    let hay = 0
    for (let i = 0; i < ex.length; i++) {
      if(ex[i] == c){
        hay++
      }if(hay == cantidad){
        cuanto = true
      }else{
        cuanto = false
      }
    }
    return cuanto 
  }

  buscar(c:string){ //verdadero si lo encuentra
    let ex = this.arreglo()
    let  hay:boolean
    for (let i = 0; i < ex.length; i++) {
     
      if(ex[i] == c ){
        hay = true //si te interesa saber cuantos hay poner contador 
      }else{
        hay = false
      }
    }
    return hay
  }
 


  
  
}
