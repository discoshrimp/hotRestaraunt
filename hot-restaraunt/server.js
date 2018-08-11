var express=require("express")
var bodyParser=require("body-parser")
var path=require("path")

var app=express()
var PORT =5000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*var tables = [
	{
		inUse: false,
		table:
	}, {
		inUse: false,
		table:
	}, {
		inUse: false,
		table:
	}, {
		inUse: false,
		table:
	}, {
		inUse: false,
		table:
	}, {
		inUse: false,
		table:
	}
*/




app.get("/", function(req, res) {
	//sends user to main paige
	res.sendFile(path.join(__dirname, "restaraunt.html"));
  });
  
  // sends user to reservations form
  app.get("/reservation", function(req, res) {
	res.sendFile(path.join(__dirname, "reservation.html"));
  });
  //sends user to waitlist and include existing reservations
  app.get("/waitlist", function(req, res) {
	res.sendFile(path.join(__dirname, "view.html"));
  });

  app.get("/api/tables", function(req, res) {
	return res.json(tables);
  });
  
  app.get("/api/waitlist", function(req, res) {
	return res.json(waitlist);
  });


  app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
  });
  