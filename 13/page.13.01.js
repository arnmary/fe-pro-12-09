let user = {
    userName : 'Tom',
    // userAge : 22
}


try{
// let myValue = 'Hello try'
// console.log(`user info${user.userAge}`);
if (!user.userAge) {
    throw new SyntaxError("No information about user age");
    
}
}
catch(e){
console.log(e);
console.log(`Error message${e.message}`);
console.log(`Error name${e.name}`);
console.log(`Error stack${e.stack}`);

}
finally{
    console.log(`Any situation!`);
    
}