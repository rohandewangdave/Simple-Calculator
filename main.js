themes=['light','dark'];
current_theme = 0;

//themes = {light: {"backgroundColor":"white" , "color":"black"}, "dark":{"backgroundColor":"black" , "color":"white"}};

function set_operation(op){
    document.getElementById('operator-textbox').value ="";
    document.getElementById('operator-textbox').value =op;
}
function calculate(){
    var a = parseInt(document.getElementById('fno-textbox').value);
    var b = parseInt(document.getElementById('sno-textbox').value);
    var operation = document.getElementById("operator-textbox").value;
    var res;
    switch(operation){
        case "+":
            res = a+b;
            break;
        
        case "-":
            res=a-b;
            break;

        case "*":
            res=a*b;
            break;
        
        case "/":
            res=a/b;
            break;
        
        case "%":
            res = a%b;
            break;
        
        default:
            res="error";
            break;
    }
    document.getElementById("res-textbox").value=res;
}
function clear_input(){
    console.log("method called!");
    document.getElementById("fno-textbox").value="";
    document.getElementById("sno-textbox").value="";
    document.getElementById("operator-textbox").value="";
    document.getElementById("res-textbox").value="";
}

function number_press(n){
    if(document.getElementById("operator-textbox").value==""){
        document.getElementById("fno-textbox").value +=n;
    }
    else{
        document.getElementById("sno-textbox").value+=n;
    }    
}

function  change_theme(){
    if(current_theme == 0)
    current_theme = 1;
    else
    current_theme = 0;  
    load_theme();  
}

function load_theme(){
    console.log("Load theme called! current theme "+current_theme);
    var elements = document.getElementsByClassName("table-component");
    for(i = 0 ; i < elements.length;i++){
        if(current_theme == 1){ //for dark theme
            elements[i].style.backgroundColor = "#404040";
            elements[i].style.color ="white";
            elements[i].style.border = "solid black 2px";
            elements[i].style.borderRadius = "10%";
            document.getElementById("body-tag").style.background ="#282828";
        }
        else{//for white theme
            elements[i].style.backgroundColor = "#D1D0CE";
            elements[i].style.color ="black";
            elements[i].style.border = "solid #848482 2px";
            elements[i].style.borderRadius = "10%";
            document.getElementById("body-tag").style.background ="#4863A0";
        }
    }
}