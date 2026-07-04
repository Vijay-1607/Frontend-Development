let students=[];

function addStudent(){

let name=document.getElementById("name").value;
let studentClass=document.getElementById("class").value;
let section=document.getElementById("section").value;
let roll=document.getElementById("roll").value;
let mobile=document.getElementById("mobile").value;

if(name=="" || studentClass=="" || section=="" || roll=="" || mobile==""){

alert("Please fill all fields");

return;

}

students.push({

name:name,
class:studentClass,
section:section,
roll:roll,
mobile:mobile

});

alert("Student Added Successfully");

document.getElementById("name").value="";
document.getElementById("class").value="";
document.getElementById("section").value="";
document.getElementById("roll").value="";
document.getElementById("mobile").value="";

}

function showSection(sec){

document.getElementById("title").innerHTML="Students of Section "+sec;

let table=document.getElementById("tableBody");

table.innerHTML="";

let filtered=students.filter(student=>student.section===sec);

filtered.forEach(student=>{

table.innerHTML+=`

<tr>

<td>${student.name}</td>

<td>${student.class}</td>

<td>${student.section}</td>

<td>${student.roll}</td>

<td>${student.mobile}</td>

</tr>

`;

});

if(filtered.length===0){

table.innerHTML="<tr><td colspan='5'>No Students Found</td></tr>";

}

}