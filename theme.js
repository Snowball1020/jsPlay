
  const var1 = document.getElementById("number1");
  const var2 = document.getElementById("number2");
  const img = document.createElement("IMG");
  const answer = document.getElementById("answeris");


  var color = ["red","green","blue","gold","pinkdark"];
  var cLen = color.length;
  var text;
  var i;

  function alertName(event){
    var trigger = event.srcElement;

    if(trigger === 'Button 1' ){
      alert('Button 1?');
    }else{
      alert('the button you have clicked is: ' + trigger.innerHTML);
      console.log(trigger);
    }


  }

  var wkArray = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

  for(var day of wkArray){
    console.log(day);
  }




function colors(){
  text = "<ul>";
  for(i = 0 ; i < cLen ; i++){
    text += "<li>" + color[i] + "</li>";
  }
  text += "</ul>";
  document.getElementById("demoo").innerHTML = text;
}

  function dis(){
    document.getElementById("image").style.display="none";
  }

  function DisList(){
    document.getElementById("demoo").style.display="none";
  }

  function app(){
    document.getElementById("image").style.display="block";
  }

  function listUp(){
    var num = Math.floor((Math.random()*10));
    for(y=0;y<15;y++){
      var str = "Text: " + num;
      document.getElementById("list1").innerHTML = str;
      document.getElementById("list2").innerHTML = str;
      document.getElementById("list3").innerHTML = str;
    }
  }

  function showImage(){
    var x = img;
    x.setAttribute("src", "pic1.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "The Pulpit Rock");
    document.body.appendChild(x);
  }

  function showGif(){
    var x = img;
    x.setAttribute("src", "sample.gif");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "The Pulpit Rock");
    x.setAttribute("display","block");
    x.setAttribute("position","center");
    document.body.appendChild(x);
  }

    function createButton(){
      var y = document.createElement("BUTTON");
      y.innerHTML = "Click Me";
      document.body.appendChild(y);
    }

  function multiply(){
//    var num1 = document.getElementById("number1").value;
    var num1 = var1.value;

    var num2 = var2.value;
    var res = num1 * num2;
    answer.style.color = "blue";
    answer.innerHTML = num1 +" * "+ num2 + " = " + res;
  }

  function divide(){
    var num1 = var1.value;
    var num2 = var2.value;
    var res = num1 / num2;
    answer.innerHTML =  num1 +" / "+ num2 + " = " + res;
  }

  function add(){
    var num1 = var1.value;
    var num2 = var2.value;
    var res = (+num1) + (+num2);
    answer.innerHTML =  num1 +" + "+ num2 + " = " + res;

  }
  function sub(){
    var num1 = var1.value;
    var num2 = var2.value;
    var res = num1 - num2;
    answer.innerHTML =  num1 +" - "+ num2 + " = " + res;
  }
