
function habilitarNum2(){
    let num1Value = document.getElementById("num1").value.trim(); //el .trim() elimina los espacios en blanco
    let num2Input = document.getElementById("num2");
    if(num1Value.length > 0 ){
        num2Input.disabled = false;
    }

    else {
        num2Input.disabled = true;
    }
}
function  enviar(){
    let num1 = document.getElementById("num1").value  ;
    let num2 = document.getElementById("num2").value  ;
    if(num1.length == 0  ){
        Swal.fire({
            title : "Cajas de texto vacias",
            text : "Ingrese valores a las cajas",
            icon : "error",
            showConfirmButton: false ,
            timer : 3000
        })
    }
    else if( isNaN(num1) == true ){
        Swal.fire({
            title : "Error",
            text : "Solo se permiten numeros",
            icon : "error",
            showConfirmButton: false ,
            timer : 3000
        })
    }
    else{
        alert("SI FUNCIONA");
        num1 = parseInt(num1,10); //convertir a numero entero
        let resultado = document.getElementById("result");
        resultado.innerHTML = " ";
        let result;
        for(let i=0; i <= num2; i++){
            result = i * num1;
            resultado.innerHTML +="<strong>  :"+num1+" x "+ i +" = "+ result +" </strong></br>";
            if(result == 0){
                resultado.innerHTML +=" TODO NUMERO MULTIPLICADO POR CERO DA CERO </br>";   
            }
            
        }
        
        

    }
    

        
    }
    

