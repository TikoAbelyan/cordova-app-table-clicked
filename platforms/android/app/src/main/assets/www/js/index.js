"use strict";

var array = ["lime", "magenta", "purple", "aqua", "yellowgreen", "blue", "grey", "pink", "red", "green", "maroon", "lightblue", "SpringGreen", "OrangeRed", "LawnGreen", "Gold", "DeepPink"];
document.write("<table>");
for (var x = 0; x < 8; x++) {
	document.write("<tr style='width:40px;height:40px'>");
	for (var y = 0; y < 8; y++) {
		var z2 = Math.floor(Math.random() * 90 + 10);
		var z3 = Math.floor(Math.random() * 16);
		document.write("<td class='col" + y + "' id=row" + x + " style='border-radius:10px;width:40px;height:40px;cursor:pointer;background:" + array[z3] + "'>" + z2 + "</td>");
	}
	document.write("</tr>");
}
document.write("</table>");
$("tr").click(function (event) {
	var childs = $(this).children();
	var color = event.target.style.backgroundColor;
	var id = event.target.id;
	var cl = event.target.className;
	var td = $("." + cl);
	for (var i = 0; i < childs.length; ++i) {
		td[i].style.backgroundColor = color;
		childs[i].style.backgroundColor = color;
		//}
	}
});