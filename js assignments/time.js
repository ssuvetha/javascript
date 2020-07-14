// JavaScript Document
<html>
<head>
<body>
<h1>demo:current time</h1>
<p id="p1"></p>
<script>

var today = new Date();

var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

var dateTime = date+' '+time;

document.getElementById("p1").innerHTML=time;
</script>
</body>
</head>
</html>