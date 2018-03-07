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
  {value: 15, viewValue: "(a,b)*·000b0"},
  {value: 16, viewValue: "(a,b)+· (a/b)+ "},
  {value: 17, viewValue: "(c ·(cc)*)·(b·(bb)*)"},
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
    this.texto = "Cualquier secuencia de a's y b's siempre que no hay dos a's o dos b's juntas"
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
        case 15:{
          this.texto = "Cualquier secuencia de a's y b's siempre que el penultimo caracter sea b"
            break;
          }
          case 16:{
            this.texto = "Cualquier secuencia de a's y b's siempre que el numero total de caracteres sea par"
              break;
            }
            case 17:{
              this.texto = "Un numero impar de c y un numero impar de b"
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
    case 15:{
      this.problema15();
      break;
    }
    case 16:{
      this.problema16();
      break;
    }
    case 17:{
      this.problema17();
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
    let soloAyB = this.soloAB('a', 'b')
    let antes:boolean
    let posA
    let posB
    let a:boolean  
    let xa:boolean
    let aa:boolean
    

    for(let i = ex.length-2; i < ex.length; i++){
      if(ex[i] == 'a'){
       xa = true
      }else{
        xa = false
      }
    }
    
//buscar antes de a - b //busca

    for(let i = 0; i < ex.length-2; i++){
        if(ex[i] == 'a'){
          posA = i
        }if(ex[i] == 'b'){
          posB = i
        }
    }
    if(posA < posB){
      antes = true
    }else{
      antes = false
    }
//----------------------
      if(soloAyB == true && xa == true && antes == true){
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
    let primero:boolean
    if(ex[0] == 'a'){
      primero = true
    }else{
      primero = false
    }
    for(let i = 0; i < ex.length; i+=2){
      if(ex[i] == 'a' && ex[i+1] == 'b' && primero == true){ 
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
    let c = this.buscarCantidad('c', 1)
    let antes = this.buscarAntes('a', 'c')
    let mic = 0
    let miac = 0
    let error = 0
    let so:boolean
    let soloa:boolean
    if(ex[0] == 'a'){
      soloa = true
    }else{
      soloa = false
    }
    for(let i = 0; i < ex.length; i++){
      if(ex[i] == 'c'){
        mic++
      }
      if(ex[i] == 'a' || ex[i] =='b'){
        miac++
      }else{
        error++
      }
    }

    if(mic == 1 && miac > 0 && error == 1 && soloa == true){
      so = true
    }else{
      so = false
    }


    if( a == true && c == true && b == true && antes == true && so == true){
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
    let antes = this.buscarAntes('a', 'b')
    let a = this.soloAB('a', 'b')
    let imparb = this.impar('b')

    if(a == true && imparb == true && antes == true){
      this.error = false
      this.boton = this.btnOk
    }else{
      this.error = true
      this.boton = this.btnNO
    }
    console.log(this.error)
  }

  problema05(){ ///waiting 
    let b = this.soloAB('b', 'a')
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

  problema06(){//soy chido
    let a = this.buscarCantidad('a', 0)
    let b = this.buscar('b')
    let ok = this.buscarSeguidaAydespuesno('a', 'b')

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

  problema07(){//verificar a y b 
    let a = this.buscarAntesTerminar('a', 4)
    let b = this.buscarAntesTerminar('b', 4)
    let ab = this.soloAB('a','b')
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
    }if(es == true && ab == true){
      this.error = false
      this.boton = this.btnOk
    }else{
      this.error = true
      this.boton = this.btnNO
    }
    console.log(this.error);  
    
  }

  problema08(){ // revisar que solo existan a y bs 
    let a = this.buscasApartir('a', 'b', 0)
    let ab = this.soloAB('a', 'b')
    let es:boolean
    let ex = this.arreglo()

    for(let i = 0; i < ex.length; i++){
      if(i == 3 && ex[i] == 'b'){
        es = true
        break;
      }
    }

    if(a == true && es == true && ab == true){
        this.error = false
        this.boton = this.btnOk
      
    }else{
      this.error = true
      this.boton = this.btnNO
    }
    console.log(this.error);
    
  }

problema09(){//error puedo pones =! a and != b
    let a = this.buscar('a')
    let b = this.buscar('b')
    let ab = this.soloAB('a', 'b')
    let total = this.total(5)

    if(a == true || b == true){
      this.error = false
    }
    if(total == true && ab == true){
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
  let limite = this.buscarSeguidaAydespuesno('a', 'b')
  let solo = this.soloAB('a', 'b')
  let es:boolean
  let A:boolean

  let ex = this.arreglo()
  if(b == true && solo == true && limite == true){
    this.error = false
    this.boton = this.btnOk
  }else{
    this.error = true
    this.boton = this.btnNO
  }
  
console.log(this.error);

}

problema11(){//error puedo pones =! a and != b
 let ab = this.buscasApartir('a', 'b', 3)
 let es:boolean
 let ex = this.arreglo()

 for(let i = 0; i < 4; i++){
   if(ex[i] == 'a' && ex[i+1] == 'b' && ex[i+2] == 'b' && ex[i+3] == 'a' && ex[0] == 'a'){        
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
  let a = this.soloAB('a', 'b')
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
  let ab = this.ceroOmasLetras('a', 'b')
  let es:boolean
  
  let ex = this.arreglo()
/*
  for(let i = 0; i < ex.length; i++){
    if(ex[i] == 'a' ){
      es = true
    }else{
      es = false
    }
  } */

  if(b == true  && ab == true){
    this.error = false
    this.boton = this.btnOk
  }else{
    this.error = true
    this.boton = this.btnNO
  }
console.log(ab);

console.log(this.error);
}

problema14(){
  let c = this.buscarCantidad('c', 1)
  let soloAyC = this.soloAB('a', 'c')


    if( c == true && soloAyC == true){
        this.error = false
        this.boton = this.btnOk
    }else{
      this.error = true 
      this.boton = this.btnNO
    }
    
    
    console.log(this.error)
}

//aqui es otra hoja 
problema15(){/// duda 
  let soloAyC = this.soloAB('a', 'b')
  let bP = this.buscarAntesTerminar('b', 2)
  let ex = this.arreglo()
  let penul:boolean
//secuancia de a's y b's
    let  hay:boolean
    let sololetra
    for(let i = 0; i < ex.length-2; i++){
        if(ex[i] == 'a'){
          sololetra = i
        }else{
          break;
        }
      }//console.log(sololetra+1);
      
      for(let i = sololetra+1; i < ex.length-1; i++ ){
        //console.log(ex[i]);
        
        if(ex[i] == 'b'){
          
          hay = true
        }else{
          hay = false
        }
      }
//-----------------------

  if(ex[ex.length-1] == 'a' && soloAyC == true && bP == true && hay == true) {
    this.error = false
    this.boton = this.btnOk
  }else{
    this.error = true 
    this.boton = this.btnNO
  }
  
console.log(this.error);

}

problema16(){// cualquier a y b que el numero total se par 
  let soloAyC = this.soloAB('a', 'b')
  let primero = this.Ay0('a')
  let ab = this.buscarSeguidaAydespuesno('a', 'b')
  let es:boolean
  let ex = this.arreglo();
  if(ex.length%2 == 0){
        es = true
      }else{
        es = false
      }

      if(soloAyC == true && primero == true && ab == true && es == true ){
        this.error = false 
        this.boton = this.btnOk
      }else{
        this.error = true 
        this.boton = this.btnNO
      }

}

problema17(){
  let c = this.impar('c')
  let  b = this.impar('b')
  let solo = this.soloAB('c', 'b')
  let antes = this.buscarAntes('c', 'b')

  if( c == true && b == true && antes == true){
    this.error = false
    this.boton = this.btnOk
  }else{
    this.error = true 
    this.boton = this.btnNO
  }
}

soloAB(letra1:string, letra2:string){
  let es:boolean
  let ex = this.arreglo()
  let con = 0
  let nope = 0
  for(let i = 0; i < ex.length; i++){
    if(ex[i] == letra1 || ex[i] == letra2){
        con++
    }else{
      nope++
    }
  }
  if(nope == 0 && con > 1){
   es = true 
  }else{
    es = false
  }
  return  es
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

    if(ex.length == full){
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
    for(let i = 0; i <= ex.length-antes; i++){
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
    if(posA == posB-1){
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

  buscarSeguidaAydespuesno(a:string, b:string){
    let ex = this.arreglo()
    let  hay:boolean
    let sololetra
    for(let i = 0; i < ex.length; i++){
        if(ex[i] == a){
          sololetra = i
        }else{
          break;
        }
      }
      for(let i = sololetra+1; i < ex.length; i++ ){
        if(ex[i] == b){
          hay = true
        }else{
          hay = false
        }
      }
      return hay
}

ceroOmasLetras(a:string, b:string){
  let es:boolean
  let ex = this.arreglo()
  let con = 0
  let nope = 0

  for(let i = 0; i < ex.length; i++){
    if(ex[i] == a || ex[i] == b){
        con++ 
    }else{
      nope++
    }
  }
  if(nope == 0 && con > 0){
   es = true
   
  
  }else{
    es = false
  }
  return  es
  
}

Ay0(a:string){
  let ex = this.arreglo(); 
  let primero:boolean
  if(ex[0] == a){
    primero = true
  }else{
    primero = false
  }
return primero
}
  
  
}
