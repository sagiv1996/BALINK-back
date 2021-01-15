exports.getCountries = (req, res) => {
  const listCountries = [
    "israel",
    "France",
    "Denmark",
    "Turkey",
    "Russia",
    "Belarus",
    "Belgium",
    "Spain",
    "Italy",
  ]
  res.send(listCountries)
};

exports.checkData = (req, res) =>{
  try {
    const rulesEmail= /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    // all required input and email is good
    if (req.body.personal.firstName && req.body.personal.lastName && req.body.address.country && rulesEmail.test(req.body.contactability.email) && req.body.contactability.optin) res.status(200).send("good data"); 
    else res.status(400).send('bad data');
  } catch (error) {
    res.status(500).send("error in server"+ error); 
  }
  
}