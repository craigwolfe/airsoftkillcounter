let count=0; //initialize variable to keep track of count
let countEl=document.getElementById("count-el"); //references to the HTML elements
let saveEl=document.getElementById("save-el");
let totalEl=document.getElementById("total-el");
let totalSaved=0; //initialize variable to keep track of total saved

function increment(){
	count+= 1
	countEl.textContent = count;
}

function save(){
	let saveCount =count + " - ";
		//appends the count string to the text content in the HTML element
	saveEl.textContent += saveCount ;
	//Appends the totalSaved string to the text content in the HTML element
	totalSaved += count;
	//reset the count in HTML element to zero
	countEl.textContent = 0;
	//reset count to zero
	count=0;
	totalEl.textContent ="Total Kills:"+" " + totalSaved;
}







