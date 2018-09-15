
$( document ).ready(function() {
   

  $( "body" ).delegate( "#botonCodificar", "click", function( event ) {
    event.preventDefault();

    ejecutar();
  


  });


$( "body" ).delegate( "#decodificar", "click", function( event ) {
    event.preventDefault();

    var palabraII = document.getElementById("cadenaCifrada").value;
    var letraII =   document.getElementById("letraPistaII").value;
     
    var resultado = decifrado(palabraII,letraII)



    $("#palabraOriginal").val(resultado)

  


  });



});





function ejecutar(){
    

    var palabra = document.getElementById("principal").value;
    var letra =   document.getElementById("idLetra").value;
     
    var resultado = cifrado(palabra,letra)



    $("#resultadoCifrado").val(resultado)



}

function cifrado(paramvar, paramvar2){
   
       
              var d ;
           
        var  a =  [ 1, 4, 2,6,3,8,5,10,7,12,11,14,13,16,17,18,19,20,23,22,29,24,31,28,37,30,41,32];
        var b =   ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ','o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ' ];
      
         //Comienza en metodo a 
         var paramvar ;
          var paramStrin = [];
       
          var arrayOfChar = new Array();
          for (var i = 0; i < paramvar.length; i++)
          {
            var j = paramvar.charAt(i);
        
            arrayOfChar[i] =  j;
          //  console.log("Arreglo de chars: "+arrayOfChar[i]);
          }
      
           paramStrin = new Array();
           
         //  console.log("resultado "+arrayOfChar);
    
    
    
              //Comparacion con alfabeto clave
              var arrayOfvar = new Array();
           //   console.log("arrayOfvar "+arrayOfvar.length);
              for (var i = 0; i < arrayOfChar.length; i++) {
                  
                  for (var j = 0; j < b.length; j++) {
                      // console.log("Comparacion "+b[j]);
                       
                       var tempI = arrayOfChar[i];
                       var tempB = b[j];
                       
                      // console.log("tempI "+tempI);
                       //console.log("tempB "+tempB);
                      if (tempI == tempB) {
                         // console.log("B ");
                          arrayOfvar[i] = a[j];
                          
                      }
                  }
              }
              
          //  console.log("Ultimo "+ arrayOfvar);
            
          //  console.log("*****************************");
            
            var  letraCodificada = new Array ();
            var contadorLetraCodificada=0;
            for (var i=0 ; i<arrayOfvar.length; i++){
                paramvar1=arrayOfvar[i];
                
                d = (paramvar1 + paramvar2*1) / 2.0;
                letraCodificada[contadorLetraCodificada] = d;
                contadorLetraCodificada++;
                //console.log("letraCodificada: " + d); 
         /* console.log("codigoAlfabeto: " + paramvar1);
          console.log("letraPista: " + paramvar2);
          console.log("letraCodificada: " + d);*/
            }
            
            var contadorAlfabeto = 0;
            var alfabeto = new Array ();
            for (var i=0 ; i<a.length; i++){
                for(var j=0; j<b.length; j++){
                    if(i == j){
                       alfabeto[contadorAlfabeto]= b[j] ;
                       
                       contadorAlfabeto++; 
                    }
             /*      
                    paramvar1=a[i];
                paramvar2 = 18; //z
                d = (paramvar1 + paramvar2) / 2.0D;
        */
                }
                
               
            }
         /*   var alfabetoCodificado = new Array ();
            var contadorCodificado= 0;
             for (var i=0 ; i<a.length; i++){
                paramvar1=a[i];
                paramvar2;
                d = (paramvar1 + paramvar2) / 2.0;
                alfabetoCodificado[contadorCodificado]=  d;
                contadorCodificado++;*/
                
         /* console.log("codigoAlfabeto: " + paramvar1);
          console.log("letraPista: " + paramvar2);
          console.log("letraCodificada: " + d);
            }*/
          
           //paramvar
           console.log("Nombre Inicial: " + paramvar);  
          console.log("codigoAlfabeto: " + letraCodificada);
          console.log("letraPista: " + paramvar2);
          // console.log("var Codificado: " +  letraCodificada );
          console.log("Alfabeto: " + alfabeto); 
         // console.log("Alfabeto Codificado: " +  alfabetoCodificado ); 
    
         // document.write("Resultado: ");
         // document.write(letraCodificada);
            
        /*  d = (paramvar1 + paramvar2) / 2.0D;
          console.log("codigoAlfabeto: " + paramvar1);
          console.log("letraPista: " + paramvar2);
          console.log("letraCodificada: " + d);*/
        /*  for (var i = 0; i < letraCodificada.length; i++) {
            letraCodificada[i] = Math.floor( letraCodificada[i]*1);
            }
    
    
          var arregloCodificadoRedondeadoHaciaAbajo = new Array();
    
             for (var i = 0; i < alfabetoCodificado.length; i++) {
                  arregloCodificadoRedondeadoHaciaAbajo[i] =Math.floor( alfabetoCodificado[i]*1);
             }
    
    
             var numeroIndexArreglo = new Array();
             for (var i = 0; i < letraCodificada.length; i++) {
                 var numeroIndex = letraCodificada[i];
                 var indiceTraducido = arregloCodificadoRedondeadoHaciaAbajo.indexOf(numeroIndex)
    
                 numeroIndexArreglo[i] = alfabeto[indiceTraducido]
    
             }
    
             console.log(numeroIndexArreglo);
    
    
    
              
             var numeroIndexArreglo = new Array();
            
            var indicesEncontrados = {};
             for (var i = 0; i < letraCodificada.length; i++) {
    
                var numeroIndex = letraCodificada[i];
                 var indiceTraducido = arregloCodificadoRedondeadoHaciaAbajo.indexOf(numeroIndex)
                var indiceTraducido = getAllIndexes(arregloCodificadoRedondeadoHaciaAbajo,numeroIndex)
                indicesEncontrados[i] = indiceTraducido;
                
    
             }
            
            
            console.log(indicesEncontrados);
        
          var salidaEncriptacion = '['
        
            Object.keys(indicesEncontrados).forEach(function(key) {
                var arregloIndices = indicesEncontrados[key];
                
                for (var i = 0; i < arregloIndices.length; i++) {
                    var indiceAlfabeto = arregloIndices[i];
                    
                    var letraAlfabeto = alfabeto[indiceAlfabeto];
                    
                    if(i!=arregloIndices.length-1){
                        salidaEncriptacion+=letraAlfabeto+","
    
                    }else{
                        salidaEncriptacion+=letraAlfabeto
                    }
                
                }
                salidaEncriptacion+="|"
                
            });
            
            salidaEncriptacion+="]"
            
            console.log(salidaEncriptacion);*/
            
    
     //document.write(letraCodificada);
        return letraCodificada;
      //resultado_dos.value = letraCodificada;
      }
    






    
    
    function getAllIndexes(arr, val) {
        var indexes = [], i;
        for(i = 0; i < arr.length; i++)
            if (arr[i] === val)
                indexes.push(i);
        return indexes;
    }
    



function decifrado(paramvar, paramvar2){

    
          var d =0;
          
    var  a =  [ 1, 4, 2,6,3,8,5,10,7,12,11,14,13,16,17,18,19,20,23,22,29,24,31,28,37,30,41,32];
    var b =   ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n','ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ' ];
  
     //Comienza en metodo a 
     //10,9.5,15.5,12.5,16,17.5,29.5,10,9.5,15.5,12.5,16,17.510,9,15,12,16,17,29,10,9,15,12,16,17
     //var paramvar = "18-12.5-17-27.5-12.5-17-29.5-14-23.5-9.5-17-11.5-12-12.5";
     //var paramvar = "10.5,10,21,16.5,18.5,20.5";
     var split = paramvar.trim().replace(" ","").split(",")
     var paramStrin = [];

      console.log("resultado Split: "+split);
   
      var arrayOfChar = new Array();
      arrayOfChar = split;
    
//Se realiza la operacion para decodificar 

         var entradaCodificado = new Array ();
        var contadorCodificado= 0;
         for (var i=0 ; i<arrayOfChar.length; i++){
            paramvar1=arrayOfChar[i]*1;
           // paramvar2 = 19;
            d = (2.0 * paramvar1  )  - paramvar2  ;
           
            entradaCodificado[contadorCodificado]=  d;
            contadorCodificado++;
        }

        console.log("Alfabeto Decodificado "+entradaCodificado);

        var alfabetoCodificado = new Array ();


          //Comparacion con alfabeto clave
          var arrayOfvar = new Array();
          console.log("Inicio For "+arrayOfvar.length);
          for (var i = 0; i < entradaCodificado.length; i++) {
              //console.log("arrayOfvar "+entradaCodificado.length);
              for (var j = 0; j < a.length; j++) {




                   var tempI = entradaCodificado[i];
                   var tempB = a[j];
                   if (tempI == tempB ) {
                           // console.log("B ");
                      entradaCodificado[i] = b[j];


                    }



      
                }
            }
          
        

        
        console.log("*****************************");
        
   
        
        var contadorAlfabeto = 0;
        var alfabeto = new Array ();
        for (var i=0 ; i<a.length; i++){
            for(var j=0; j<b.length; j++){
                if(i == j){
                   alfabeto[contadorAlfabeto]= b[j] ;
                   
                   contadorAlfabeto++; 
                }
         /*      
                paramvar1=a[i];
            paramvar2 = 18; //z
            d = (paramvar1 + paramvar2) / 2.0D;
    */
            }
            
           
        }
      
      
       //paramvar
       console.log("Codigo Inicial: " + paramvar);  
     // console.log("codigoAlfabeto: " + paramvar1);
      console.log("letraPista: " + paramvar2);
      console.log("Alfabeto: " + alfabeto); 
      console.log("Ultimo  Palabra Clave "+ entradaCodificado);

    
        
   return entradaCodificado;

    
  }


    
    
    
        //cifrado(); llamar en java scrito