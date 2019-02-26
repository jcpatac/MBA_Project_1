$(".btn").click(function(event) {
	// body...
	// event.preventDefault();
	event.preventDefault();

		// var target = $(this).data("target");
		// $("#click-alert")
		// 	.html("data-target= " + target)
		// 	.fadeIn(0)
		// 	.delay(0)
		// 	.fadeOut(0);
});

// $("#next_btn").click(function(event) {
// 	event.preventDefault();
// 	$(x[currTab]).fadeOut();
// 	console.log(tabIndex);
// 	// $(x[currTab + tabIndex]).fadeIn();
// });

var x = document.getElementsByClassName("tab");
var currTab = 0;
showTab(currTab);

function showTab(tabIndex) {
	// body...
	// console.log(x[tabIndex])
	x[tabIndex].style.display = "inherit";
	window.scrollTo(0, 0);
	changeStepIndicator(tabIndex)
	if (tabIndex == 0) {
		document.getElementById("back_btn").style.display = "none";
	}else {
		// document.getElementById("back_btn").style.display = "inline";
		document.getElementById("back_btn").style.display = "";
	}

	if (tabIndex == x.length - 1) {
		document.getElementById("next_btn").innerHTML = "SUBMIT";
	}else {
		document.getElementById("next_btn").innerHTML = "<i class='fa fa-arrow-right' aria-hidden='true'></i>"
	}
}

function nextPrev(tabIndex) {
	// body...
	var x = document.getElementsByClassName("tab");
	x[currTab].style.display = "none";
	currTab += tabIndex

	if (currTab >= x.length) {
		// FORM SUBMISSION
		// document.getElementById("regForm").submit();
		location.href = "thankyou.html"
		return false;
	}else {
		showTab(currTab);
	}

	if (tabIndex < 0) {
		isNext = false;
	}
}

function resetStepName() {
	document.getElementsByClassName("step")[currTab].className = "";
	document.getElementsByClassName("step")[currTab].className = "step";
	// body...
};

function validateForm() {
	// body...
	var x, y, valid = true;
	x = document.getElementById("tocenter");
	y = x.getElementsByTagName("input");
	// x = document.getElementsByClassName("tab");
	// y = x[currTab].getElementsByTagName("input");
	for (var i = 0; i < y.length; i++) {
		// if (y[i].value == null || y[i].value == "") {
		// 	valid = false;
		// 	break;
		// }
		if (!y[i].checked) {
			valid = false;
			break;
		}
	}

	var els = document.getElementsByClassName("step");
	els[currTab].className = els[currTab].className.replace(" unfinished", "")
	els[currTab].className = els[currTab].className.replace(" finish", "")

	if (valid) {
		els[currTab].className = els[currTab].className += " finish";
	}else {
		els[currTab].className = els[currTab].className += " unfinished";
	}
	return valid
}

function changeStepIndicator(tabIndex) {
	// body...
	var x = document.getElementsByClassName("step");
	for (var i = 0; i < x.length; i++) {
		x[i].className = x[i].className.replace(" active", "");
	}
	x[tabIndex].className += " active";
}

// ADDING ROWS
function addRowFunc(elementId) {
	var table = document.getElementById(elementId);
	var tColNum = table.getElementsByTagName("th").length;
	var tbody = table.getElementsByTagName("tbody")[0];
	var tRowNum = tbody.getElementsByTagName("tr").length;
	var row = tbody.insertRow(tRowNum);
	for (var i = 0; i < tColNum; i++) {
		row.insertCell(i).contentEditable = true;
	}
	var btnRemove = "<button class='removeButton'><i class='fa fa-trash'></i></button>";
	row.cells[tColNum - 1].innerHTML = btnRemove;
	row.cells[tColNum - 1].contentEditable = false;
}

$("table").on("click", ".removeButton", function(event) {
	$(this).closest("tr").remove();
});