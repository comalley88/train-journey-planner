const mongoose = require('mongoose');

// useNewUrlParser ;)
var options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true,
  useUnifiedTopology: true
 };


 

// --------------------- BDD -----------------------------------------------------
mongoose.connect(`mongodb+srv://Conor:fvz%23k%40jVWkcrgE9@cluster0.ftzjl.mongodb.net/Ticketac?retryWrites=true&w=majority`,
   options,
   function(err) {
    if (err) {
      console.log(`error, failed to connect to the database because --> ${err}`);
    } else {
      console.info('*** Database Ticketac connection : Success ***');
    }
   }
);