const btnE1=document.getElementById("button");
const dateE1=document.getElementById("date");
const dateeE1=document.getElementById("datee");
const resultE1=document.getElementById("result");

btnE1.addEventListener("click",calculateAge);

function calculateAge(){
    const dateValue=dateE1.value;
    const dateeValue=dateeE1.value;
    if(dateValue==="" || dateeValue===""){
        alert("Please enter date");
    }else{
        const cal=getCal(dateValue,dateeValue);
        resultE1.innerText = cal;
     }
}
 function getCal(dateValue,dateeValue){
    const endDate=new Date(dateeValue);
    const startDate=new Date(dateValue);
    let Years=endDate.getFullYear()-startDate.getFullYear();
    let months=endDate.getMonth()-startDate.getMonth();
    let days=endDate.getDate()-startDate.getDate();
    if(days<0){
        months--;
        const premonth=new Date(endDate.getFullYear(),endDate.getMonth(),0);
        days+=premonth.getDate(); 
    }
    if (months<0){
        Years--;
        months+=12;
    } 
     return Years + " Years " + months + " Months " + days + " Days";  
}
dateE1.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        e.preventDefault();   // form submit hone se roke
        dateeE1.focus();      // 2nd input par focus
    }
});
dateeE1.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        e.preventDefault();
        btnE1.focus();   // button par focus
    }
});