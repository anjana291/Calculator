function display(num){
    inputbox.value += num;
}

function clearall(){
    inputbox.value = "";
}

function back(){
    inputbox.value=inputbox.value.slice(0,-1);
}

function equal(){
    try{
        inputbox.value=eval(inputbox.value);
    }
    catch{
        inputbox.value="Error";
        setTimeout(()=>{
            inputbox.value="";
        },1000)
    }
}