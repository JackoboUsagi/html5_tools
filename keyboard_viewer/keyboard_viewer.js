var input = document.getElementById("input");

document.addEventListener("keyup", function(event)
  {
  console.log("UP:" + event.keyCode + " - " + event.key + " - " + window.event.code);
  if (event.keyCode == 93)  { event.preventDefault(); } 
  
  document.getElementById(window.event.code).classList.add('hidden');
  document.getElementById(window.event.code).classList.remove('show');
  });

document.addEventListener("keydown", function(event) 
  {
  console.log("DOWN:" + event.keyCode + " - " + event.key + " - " + window.event.code);
  if ( (event.keyCode >= 112 && event.keyCode <= 121) || event.keyCode == 123 ) { event.preventDefault(); }
  
  if(window.event.code.includes("AltRight") && document.getElementById("ControlLeft").classList.contains('show'))
    {
    document.getElementById("ControlLeft").classList.remove('show');
    document.getElementById("ControlLeft").classList.add('hidden')
    }        
  
  document.getElementById(window.event.code).classList.add('show'); document.getElementById(window.event.code).classList.remove('hidden');
  });
