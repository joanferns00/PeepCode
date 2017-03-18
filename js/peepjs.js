var myImg = document.getElementById('myImage');
var timeoutID;


myImg.addEventListener('mouseover', function(e){
	//console.log(e);
// for (i = 1; i <= 5; ++i) {
// 	timeoutID =   setTimeout(function(){
// 	    e.target.src = '../images/Photo'+i+'.jpg';
// 	  }, 1000);
// }

(function fn(n) {   
  // console.log( n );   
   e.target.src = '../images/Photo'+n+'.jpg';  
   if(n === 6){n=1;}
  if(n<6){
  timeoutID = setTimeout(function(){  fn(++n);  },1000);
  }
}( 1 ));



// e.target.src = '../images/Photo1_l.jpg';
// console.log(e.target.src);
	//change the image

});

myImg.addEventListener('mouseout', function(e){	
	e.target.src = '../images/Photo1.jpg';  
	clearTimeout(timeoutID);
});