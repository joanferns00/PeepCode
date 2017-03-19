var myImg = document.getElementById('myImage');
var myHov = document.getElementById('myHover');

var timeoutID,
hoverID;

if(myHov){
  myHov.addEventListener('mouseover', function(e){
  (function fn(n) {   
     e.target.src = '../images/p'+n+'.png';  
     if(n === 16){n=0;}
    if(n<17){
    hoverID = setTimeout(function(){  fn(++n);  },600);
    }
  }( 0 ));
  });

  myHov.addEventListener('mouseout', function(e){ 
    e.target.src = '../images/p0.png';  
    clearTimeout(hoverID);
  });
}

if(myImg){
  myImg.addEventListener('mouseover', function(e){
  (function fn(n) {   
     e.target.src = '../images/Photo'+n+'.jpg';  
     if(n === 6){n=1;}
    if(n<6){
    timeoutID = setTimeout(function(){  fn(++n);  },1000);
    }
  }( 1 ));
  });

  myImg.addEventListener('mouseout', function(e){ 
    e.target.src = '../images/Photo1.jpg';  
    clearTimeout(timeoutID);
  });
}

