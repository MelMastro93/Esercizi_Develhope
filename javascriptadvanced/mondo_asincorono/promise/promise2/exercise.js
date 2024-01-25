// -Crea una catena di Promises per simulare un'operazione asincrona in più fasi.
// -La prima Promise recupera i dati dell'utente { id: 1, name: 'John' }. 
// -La seconda Promise recupera i post dell'utente ['Post 1', 'Post 2', 'Post 3']. 
// -Infine, chiama le funzioni per recuperare e stampare in console il nome dell'utente e i titoli dei post.

let user = { id: 1, name: 'John' };

let posts = ['Post 1', 'Post 2', 'Post 3']

function fetchUserData() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(user.id === 1 && user.name === "John"){
                resolve(user);
            } else {
                reject(new Error("Not john"))
            }
                
        }, 2000)
    })
}
const printUser = fetchUserData().then((data) => {

    console.log(data)

}).catch(() => {

    console.log(error)
})
function fetchUserPosts(userId, userName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (user.id === 1 && user.name === "John") {
                resolve(posts);

            } else {
                reject(new Error("Something is Wrong"));
            }
        },5000)

    })
};

const printPost = fetchUserPosts().then((data) => {

    console.log(data)

}).catch((error) => {

    console.log(error)
})

fetchUserData()