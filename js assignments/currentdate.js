<html>
<head>
<body>
<h1>demo:current date</h1>
<p id="p1"></p>
<script>
var today = new Date();
var date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
document.getElementById("p1").innerHTML=date;
</script>
</body>
</head>
</html>// JavaScript Document