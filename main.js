// var xhr=new XMLHttpRequest();
// xhr.overrideMimeType("aaplication/json");
// xhr.open("GET",file,true);
// xhr.onreadystatechange=function(){
// 	if(xhr.readyState===4 && xhr.status===200){
// 		callback(xhr.responseText);
// 	 }
//     } 
// 	xhr.send();
// }
// json("data.json",function(text){
// 	let d=JSON.parse(text);
// 	console.log(d);
// 	basics(d.basicdetails);
// 	achivements(d.achivements);
// 	carrier(d.carrier);
// 	edu(d.education);
// 	carrier(d.carrier);
// 	techskills(d.skills);
// 	description(d.descriptiond);
// })
var main=document.querySelector(".first");
var l=document.createElement("div");
l.classList.add("left");
l.setAttribute("id","nirula");
main.appendChild(l);
function basics(basic){
	var i=document.createElement("img");
	i.src=basic.image;
	i.alt="profile photo";
	l.appendChild(i);
	var nam=document.createElement("h3");
	nam.textContent=basic.name;
	l.appendChild(nam);
	var pno=document.createElement("h3");
	pno.textContent=basic.phoneno;
	l.appendChild(pno);
	var mail=document.createElement("h3");
	mail.textContent=basic.email;
	l.appendChild(mail);
	var add=document.createElement("h3");
	add.textContent=basic.address;
	l.appendChild(add)
}
var r=document.createElement("div");
r.classList.add("right");
main.appendChild(r);
function edu(e){
	var e1=document.createElement("div");
		e1.classList.add("educa");
		r.appendChild(e1);
		var head=document.createElement("h2");
		head.textContent="Education Detail";
		e1.appendChild(head);
		head.appendChild(document.createElement("HR"));
		for(var i=0;i<e.length;i++){
			var h=document.createElement("h2");
			h.textContent=e[i].course;
			e1.appendChild(h);
			var u=document.createElement("ul");
			e1.appendChild(u);
			var list=document.createElement("li");
			list.textContent=e[i].college;
			u.appendChild(list);
			var list1=document.createElement("li");
			list1.textContent=e[i].percentage;
			list.appendChild(list1);
		}
}
function techskills(s){
	var d=document.createElement("div");
	d.textContent="skills set";
	r.appendChild(d);
	var tab=document.createElement("table");
	var row="";
    for(i=0;i<s.length;i++){
    row+="<tr><td>"+s[i].name+"</td><td>"+s[i].value+"</td></tr>";
	}
	tab.innerHTML=row;
	d.appendChild(tab);
}
function carrier(c){
	var c1=document.createElement("div");
	r.appendChild(c1);
	var h1=document.createElement("h1");
	h1.textContent="carrier objective";
	c1.appendChild(h1);
	h1.appendChild(document.createElement("HR"));
	var para=document.createElement("p");
	para.textContent=c.ca;
	c1.appendChild(para);
}
function achivements(a){
	var a1=document.createElement("div");
	r.appendChild(a1);
	var h1=document.createElement("h1");
	h1.textContent=" My achivement";
	a1.appendChild(h1);
	h1.appendChild(document.createElement("HR"));
	for(i in a){
		var u=document.createElement("ul")
		a1.appendChild(u)
		var list=document.createElement("li");
		list.textContent=a[i];
		u.append(list);
	}
}
	function description(de){
		var d1=document.createElement("div");
		r.appendChild(d1);
		var desp=document.createElement("h1");
		desp.textContent="my description";
		d1.appendChild(desp);
		desp.appendChild(document.createElement("HR"));
		var para=document.createElement("h3");
		para.textContent=de.des;
		d1.appendChild(para);
	}
	//fetch API
	fetch("data.json")
	.then(function(response){
	 return response.json();
	})
	.then(function(d){
		console.log(d);
		basics(d.basicdetails);
	 achivements(d.achivements);
	 carrier(d.carrier);
	 edu(d.education);
	 carrier(d.carrier);
	 techskills(d.skills);
	 description(d.descriptiond);
	})


