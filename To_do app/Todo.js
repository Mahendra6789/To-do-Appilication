let myarr = [];
let newinput="";

function display(){
    let userinput = document.getElementById("inputfield").value; //Taking userinput and stored in a variable. 
    myarr.push(userinput);                                       //push input to array
    document.getElementById("inputfield").value=""                //input field remains empty after enter an input.
        newinput = newinput + `<div id="singletask_${myarr[myarr.length-1]}">${myarr[myarr.length-1]} <button onclick='Delete("${myarr[myarr.length-1]}")'>delete</button> </div>`;  //storing input one by one from the user and also deleting the particular task.
    document.getElementById("output").innerHTML = newinput           //Displaying the userinput.
}
 function Delete(x){
    // console.log(x)
    var taskStore=document.getElementById(`singletask_${x}`);        // storing particular task in some variable to perform delete actions.
    taskStore.remove();                              //Remove particular task that are entered into delete function
    var delstring=`<div id="singletask_${x}">${x} <button onclick='Delete("${x}")'>delete</button> </div>` //used to reomove particular string.
    // console.log(newelement)
    // console.log(delstring)
    newinput=newinput.replace(delstring,"")         //Replacing string with Empty space.
    // console.log(newinput)
    }   
 
   