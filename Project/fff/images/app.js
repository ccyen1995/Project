const cardArray = [
  {
    name: "banana",
    img: "images/banana.png",
  },
  {
    name: "durian",
    img: "images/durian.png",
  },
  {
    name: "grapefruit",
    img: "images/grapefruit.png",
  },
  {
    name: "kiwi",
    img: "images/kiwi.png",
  },
  {
    name: "lemon",
    img: "images/lemon.png",
  },
  {
    name: "litchi",
    img: "images/litchi.png",
  },
  {
    name: "liuding",
    img: "images/liuding.png",
  },
  {
    name: "mango",
    img: "images/mango.png",
  },
  {
    name: "orange",
    img: "images/orange.png",
  },
  {
    name: "peach",
    img: "images/peach.png",
  },
  {
    name: "banana",
    img: "images/banana.png",
  },
  {
    name: "durian",
    img: "images/durian.png",
  },
  {
    name: "grapefruit",
    img: "images/grapefruit.png",
  },
  {
    name: "kiwi",
    img: "images/kiwi.png",
  },
  {
    name: "lemon",
    img: "images/lemon.png",
  },
  {
    name: "litchi",
    img: "images/litchi.png",
  },
  {
    name: "liuding",
    img: "images/liuding.png",
  },
  {
    name: "mango",
    img: "images/mango.png",
  },
  {
    name: "orange",
    img: "images/orange.png",
  },
  {
    name: "peach",
    img: "images/peach.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());
// console.log(cardArray);
const cardChosen = [];
const gridDisplay = document.querySelector("#grid");

function createBoaed() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/smile.jpg");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}
createBoaed();

// function checkMatch() {
//   const cards = document.querySelectorAll("img");
//   console.log("hi");
//   if (cardChosen[0] === cardChosen[1]) {
//     console.log("same");
//   }
// }

function flipCard() {
  // console.log(this);
  const cardId = this.getAttribute("data-id");
  this.style.transform = "rotateY(180deg)";
  this.style.transition = "all 5s";
  this.setAttribute("src", cardArray[cardId].img);
}

// var lis = document.getElementById('bg').getElementsByTagName('li');
// for (var i = 0;i < lis.length;i++){
// 	_div = lis[i].getElementsByTagName('div');
// 	for(var j = 0;j < _div.length;j++){

// 		_div[j].onclick = function(){
// 			this.judge = false;
// 			flip(this, this.judge);
// 			var click = document.getElementsByClassName('click');
// 			if(click.length == 2){
// 				let click1 = click[0];
// 				let click2 = click[1];
// 				if(click1.img_index == click2.img_index){
// 					var t = setTimeout(() => {
// 						click1.style.background = 'unset';
// 						click2.style.background = 'unset';
// 						click1.setAttribute('class', '');
// 						click1.onclick = null;
// 						click2.setAttribute('class', '');
// 						click2.onclick = null;
// 					}, 500);
// 				}else{
// 					var t = setTimeout(function() {
// 						flip(click1, true);
// 						flip(click2, true);
// 					}, 500);
// 					click1.setAttribute('class', '');
// 					click2.setAttribute('class', '');
// 				}
// 			}
// 		}

// 	}
// }

// function flip (element, judge){
// 	if(judge){
// 		element.style.transform = 'rotateY(0deg)';
// 		element.judge = false;
// 	}else if(!judge && document.getElementsByClassName('click').length < 2){
// 		element.style.transform = 'rotateY(180deg)';
// 		element.judge = true;
// 		element.className = 'click';
// 	}
// }
