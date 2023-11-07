// let title = document.getElementById('title_test');
//         alert(title.innerText);
let mybtn = document.getElementById('mybtn');
mybtn.onclick = function(){
    alert('something has happened');
}

function testMyClick(){
    alert('You Clicked Me Why?');
}

// window.onload = function(){
//     alert('something loaded');
// }

document.ondblclick = function(){
    console.log('you have double click the page')
}


// console.log(document.ondblclick);
// console.log(window);

//loops
//for - loop
//while - loop
//do - while loop
//switch statement

let paragraphs = document.getElementsByTagName('p');
console.log( paragraphs);


let stops = [8, 9, 10, 11];

for(let i = 0; i < paragraphs.length; i++){
    if ( stops.includes[i] ){
        continue;
    } 
    
    paragraphs[i].innerHTML = i;
    paragraphs[i].style.padding = '10px';
    paragraphs[i].style.backgroundColor = '#'+Math.floor(Math.random() * 1000 ) + 1;
    
}  

//add the paragraph idex as option values to the select_para
let options = "";
let sele = document.getElementById('select_para');
for (i=0; i<paragraphs.length; i++){
    options += `<option value="${i}">${i}</option>`;
}
sele.innerHTML = options;


//while - loop
let index = 0;
while( index < paragraphs.length){
    paragraphs[index].style.width = '25px'
    // if ( index == 5 ) break;
    index++;
}

//do - while loop
let stop_index = 0
do{
    console.log(stops[stop_index]);
    stop_index++;
}while(stop_index < stops.length);

//switch statement
// let userinput = Number( prompt("Enter Pass Code to continue","") );

sele.onchange = function(evt){
    let userinput = Number(sele.value);
    switch(userinput){
        case 5:
            paragraphs[5].style.padding = "100px";
            this.parentElement.style.border = '1px solid red';
        break;
    
        case 6:
            console.log("you entered pass code 6");
            this.parentElement.style.border = '1px solid blue';
        break;
    
        default:
            console.log("you entered pass code not special");
        break;
    
    }
}
 

