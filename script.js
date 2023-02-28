const mesUsers = document.createElement('div');
document.body.append(mesUsers);
console.log("slt")

fetch('https://jsonplaceholder.typicode.com/users')
.then((res) => res.json())
.then(function(dataObject){
    console.log(dataObject);
})
// .then(renderuser)
// .catch(erreur)

// function renderuser(userObject){
//     console.log(typeof userObject);
//     const arrayUser = userObject.results;
//     console.log(arrayUser);

//     let i = 1;

//     Object.keys(arrayUser).forEach((key) => {
//         const user = arrayUser[key].name;
//         userSearch(`${i++}. ${user}`);
//     });
// }

// function userSearch(userName){
//     const userHeader = document.createElement("h2");

//     userHeader.textContent = `${userName}`;
//     userHeader.className = "center";
//     mesUsers.append(userHeader);
// }