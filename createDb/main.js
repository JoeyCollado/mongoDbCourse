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


//delete(8)
//db.students.deleteOne({filter})
//db.students.deleteMany({filter})

//ex
//db.students.deleteOne({name:joey})
//db.students.deleletMany({fullTime:false})
//db.students.deleteMany({registerDate:{$exists:false}})

//comparison query operators (9)
//return data based on value comparisons

//ex
//db.students.find({name:{$ne:"spongebob"}} = not equal, this gets all documents where name does not equal to spongebob
//db.students.find({age:{$lt:20}}) = find documents where age is less than 20
//db.students.find({age:{$lte:20}}) = find documents where age is less than or equal to 20
//db.students.find({age:{$gt:20}}) = find documents where age is greater than 20   
//db.students.find({age:{$gte:20}}) = find documents where age is greater than or equal to 20
//db.students.find({gpa:{$gte:3, $lte:4}}) // get students with gpa greater than 3 and less than or equal to 4, we can use two or more comparison operators


// in operator = we can return all records that have one of these matching values

//ex
//db.students.find({name:{$in:["Spongebob", "patrick", "sandy"]}}) // find all records that has a name of these three
//db.students.find({name:{$nin:["Spongebob", "patrick", "sandy"]}}) // not in operator

// logical operators(9)

/**
 

Name	Description
$and	Joins query clauses with a logical AND and returns all documents that match the conditions of both clauses.
$not	Inverts the effect of a query expression and returns documents that do not match the query expression.
$nor	Joins query clauses with a logical NOR and returns all documents that fail to match both clauses.
$or	    Joins query clauses with a logical OR and returns all documents that match the conditions of either clause.
 */

//ex

//$and  
//db.students.find({$and: [{fullTime:true}, {age:{$lte:22}}]}) =  if two condition is true

//$or
//db.students.find({$or: [{fullTime:true}, {age:{$lte:22}}]}) = atleast one condition needs to be true

//$nor
//db.students.find({$nor: [{fullTime:true}, {age:{$lte:22}}]}) = both condition needs to be false

//$not
//db.students.find({age:{$not:{$gte:30}}}) = get document that is not the specified condition, does the opposite

//indexes (10)

/*
Indexes = support the efficient execution of queries in mongoDB. without indexes, mongodb must perform a collection scan.
          every document is a collection, to select those documents that match the query statement.
*/

//
//db.students.find({name:"joey"}).explain("executionStats")

//to apply index
// db.students.createIndex({name: 1}) = apply index at name field in ascending order
// db.students.createIndex({name: -1}) = apply index at name field in descending order

//get all indexes
//db.students.getIndexes()

//how to drop index
//db.students.dropIndex("name_1") ("indexName")