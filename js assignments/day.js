<html>
<body>
<h2>Day</h2>
<p  id="demo"></p>
<script>
var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("demo").innerHTML = days[d.getDay()];
</script>
</body>
</html>
