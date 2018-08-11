var express=require("express")
var bodyParser=require("body-parser")
var path=require("path")

var app=express()
var PORT =5000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var tables = [
	{

		routeName: "johnsmith",
		name:"john smith",
		phone:"444-444-4444",
		email:"johnsmith@smith.com",
		id: 00000,
	}
]
var waitlist =[]


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
	

	app.post("/api/tables", function(req, res) {
		// req.body hosts is equal to the JSON post sent from the user
		// This works because of our body-parser middleware
		var newTable = req.body;
	
		// Using a RegEx Pattern to remove spaces from newTable
		// You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
		newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();
	
		console.log(newTable);
	
		tables.push(newTable);
	
		res.json(newTable);
	});
	
  