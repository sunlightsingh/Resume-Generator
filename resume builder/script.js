// alert("loading");
function addNewWEFeild(){
   //console.log("Adding new Feild")
   let newNode=document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("weFeild");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows",3);
   newNode.setAttribute("placeholder","enter here");
   let weOb = document.getElementById("we");
   let weAddButtonOb =document.getElementById("weAddButton");
   weOb.insertBefore(newNode,weAddButtonOb);

}
function addNewAQFeild()
{
    let newNode=document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("eqFeild");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows",3);
   newNode.setAttribute("placeholder","enter here");
   let aqOb = document.getElementById("aq");
   let aqAddButtonOb =document.getElementById("aqAddButton");
   aqOb.insertBefore(newNode,aqAddButtonOb);
}
//generating Cv
function generateCV(){
   // console.log("generatingCV");
   let nameFeild = document.getElementById("nameFeild").value;

   let nameT1 = document.getElementById("nameT1");
   nameT1.innerHTML = nameFeild;


}