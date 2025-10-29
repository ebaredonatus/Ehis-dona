// const demo=document.getElementById("demo")

// function changeValue(input){
//     demo.value +=input  
// }

// function clearValue(){
//     demo.value ="";
// }

// function calculate(){

//     try{
//        demo.value= eval(demo.value); 
//     }
//     catch(Erro){
//         demo.value=("Erro")
//     }
// }




const demo=document.getElementById('demo')

function changeValue(input){
    demo.value+=input
}

function clearValue(){
    demo.value=""
}

function calculate(){
    try{
        demo.value= eval(demo.value);
    }
    catch (error){
        demo.value=("Error")
    }
}

















