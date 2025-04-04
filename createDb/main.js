//mongosh = establish connection
//showdbs = show current database
//cls = clear screen
//use(dbname) = to use a database
//db.createCollection("collectionName") = to create a collection in database
//db.dropDatabase() // to delete a database

//you can automatically create a database by using (use)
//example = use school (if db name is not been created yet)

//Insert (1)
//how to insert document in db
//db.students.insertOne({name: "Spongebob", age:17, gpa:3.14}) = example

//return documents of db
//db.students.find() = example

//how to insert many documents at once
//db.students.insertOne({name:"Joey Collado", age: 18, gpa: 5.0, fulltime: true }) //insert one document with many data types
//db.students.insertMany([{name:"patrick", age:38, gpa:1.5}, {name:"sandy", age:21, gpa:4.0}, {name:"squid", age:22, gpa:4.4}])  = example


//Data types (2)
//string, integer, double, boolean, date objects, null, arrays, nested documents
//db.students.insertOne({name:"Joey Collado", age: 18, gpa: 5.0, fulltime: true, registerDate: new Date(), graduationDate: null, courses: ["criminology", "education", "Com Sci", ], address: {street:"123 fake street", city:"bikini", zip: 1860} })


//Sorting and Limiting (3)

//sort = sort document in descent or ascent order
//db.students.find() = return all documents

//sort = db.collectionName.find().sort({fieldName:alphabeticalOrder})
//ex   = db.students.find().sort({name:1})
//ex   = db.students.find().sort({name:-1})


//limit = limit document that is shown to us
//      = db.dbName.find().limit(numberOfDocuments)
//ex    = db.dbName.find().limit(1) = return 1 document 

//combine both
//      = db.students.find().sort({gpa:-1}.limit(1), return gpa in descending order of only 1 document

//find (6)

//db.students.find({queryParam},)
//db.students.find({name:"squid"}) //returns any document that has a name "squid" // apply to any data
//db.students.find({name:"squid", age: 22})
//db.students.find({query}, {projection}) //return specific fields
//db.students.find({}, {name:true}) //example
//db.students.find({id:false}, name:true) //example2

//update(7)
// db.students.updateOne(filter, update)
//db.students.updateOne(filter, update)
//ex (update)
//db.students.updateOne({name:"joey"}, {$set:{fullTime:true}})
//ex (unset)
//db.students.updateOne({name:"joey"}, {$unset:{fulltime:""}})  
//update many = db.students.updateMany(filter, update)
//ex (update)
//db.students.updateMany({}, {$set:{fullTime:false}})
//ex (unset)
//db.students.updateMany({name:"squid"}, {$unset:{fullTime:""}})
//ex (check if documents have fulltime field)
//db.students.updateMany({fulltime:{$exists:false}}, {$set:{fulltime:true}})