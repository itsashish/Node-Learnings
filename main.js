//Get two Users from database and sum two numbers

const user1 = Users.readDBSync(1) //2 s
console.log(user1)//1 ms
const user2 = Users.readDBSync(2) //2 sec
console.log(user2)//1 ms

console.log(1+2) //1 sec
//Total 5.2 sec



const user3 = Users.readDBAsync(1, () => {
    console.log(user1)
}) // 0 - 2 sec

const user4 = Users.readDBAsync(2, () =>{
    console.log(user4)
}) //0.1 ms - 2.1

console.log(2+3) // .2 - 1 se c

//Total 2.2 sec



