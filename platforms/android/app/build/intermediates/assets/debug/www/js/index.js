var array=["lime","magenta","purple","aqua","yellowgreen","blue","grey","pink","red","green","maroon","lightblue","SpringGreen","OrangeRed","LawnGreen","Gold","DeepPink"];
document.write("<table>");
for(x=0;x<15;x++){
	document.write("<tr style='width:40px;height:40px'>");
	for(y=0;y<15;y++){
	var z2=Math.floor(Math.random()*90+10);
	var z3=Math.floor(Math.random()*16);
	document.write("<td class='col"+y+"' id=row"+x+" style='border-radius:10px;width:40px;height:40px;cursor:pointer;background:"+array[z3]+"'>"+z2+"</td>")
	//console.log("c1("+x+")")
	}
	document.write("</tr>")
}
	$("tr").click(function(event){
		let childs = $(this).children();
		let color = event.target.style.backgroundColor;
		console.log(color);
		let id = event.target.id;
		let cl = event.target.className;
		//console.log(childs);
		let td = $(`.${cl}`);
		for(let i = 0;i < childs.length; ++i){
			td[i].style.backgroundColor = color;
			//if(childs[i].id === id){
				childs[i].style.backgroundColor = color;
			//}
		}
	})