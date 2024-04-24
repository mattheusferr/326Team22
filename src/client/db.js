
const db = new PouchDB('ustudy_db');

//function saves the username used in login
export function saveUser(username) {
    var user = {
        _id: 'user_info',
        username: username
    };
    // if user doesn't exist it creates it in db or updates an existing one
    db.put(user, {force: true}).then(function () {
        console.log("User saved successfully!");
    }).catch(function (err) {
        console.error("Error saving user:", err);
    });
}

//getter for the username used in login
export function getUser() {
    return db.get('user_info');
}
