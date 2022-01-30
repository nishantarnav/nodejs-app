console.log('Before')
const user= getUser(1);
console.log(user) // it will be undefined as user is called even before the value if user is there yet

console.log('After')

// Ways to deal with async functions:

//callbacks
//promises
//async/wait

function getUser(id){
    setTimeout(()=>{
        console.log('Reading a user from a db')
        return {
            id:id,
            githubUserName:'nishant'
        }
    },2000)
    
}