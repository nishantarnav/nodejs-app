const express=require('express');
const router= express.Router()
const Joi= require('joi') 
var courses=[
    { 'id':1 ,'name':'course1' },
    { 'id':2 ,'name':'course2' },
    { 'id':3 ,'name':'course3' }
]

function validateCourse(course){
    const courseSchema = {
        name: Joi.string().min(3).required(),
    };    
    return Joi.validate(course, courseSchema);
}


router.get('/',(req,res)=>{
    res.send(courses)
})

router.get(':id',(req,res)=> {
 const course = courses.find(c => c.id === parseInt(req.params.id))
if(!course) return res.status(404).send('the course id is not found')
 res.send(course)

})

router.post('/',(req,res)=>{
    const {error}= validateCourse(req.body) 
    if(error)
    return res.status(400).send(result.error)
    const course={
        id:courses.length+1,
        name:req.body.name//(for this parsing of json object is to be enabled)
    }
    courses.push(course)
    res.send(course)
})

router.put('/:id',(req,res)=>{
//look up courses
//if not exist return 404

const course = courses.find(c=> c.id === parseInt(req.params.id))
if(!course)  return res.status(404).send('the course id is not found')

 //validate
 //if invalid, return 404,bad request

 //const result =validateCourse(req.body)
 //instead of this we can use object destructor
const {error}= validateCourse(req.body) // so now we can use error instead of result.error
if(error)
return res.status(400).send(error.details[0].message)

 //update content
 course.name = req.body.name;
res.send(course)
})

router.delete('/:id',(req,res)=>{
//look up for the course
//not existing, return 404

const course= courses.find(c=>c.id===parseInt(req.params.id))
if(!course) return res.status(400).send("the course id is not present")

//delete
const index=courses.indexOf(course)
courses.splice(index,1)// go to index='index' and delete 1 object

res.send(course )

})

module.exports=router
