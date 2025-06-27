// Received user data
const users: { id: number, name: string, age: string, isActive: boolean }[] = [
    {"id": 1, "name": "Alice", "age": "28", "isActive": true},
    {"id": 2, "name": "Bob", "age": "35", "isActive": false},
    {"id": 3, "name": "Charlie", "age": "22", "isActive": true}
];


// Processing user data
// Create empty array
const processedUsers: { id: number, name: string, age: number, isActive: boolean }[] = []

// 
for (const user of users) {
    const numericAge = parseInt(user.age); // Convert age to number
    let userName = user.name; // copy of name

    // convert name to uppercase if user is active
    if (user.isActive) {
        userName = user.name.toUpperCase(); 
    }

    // create new object for each user
    const processedUser = {
        id: user.id,
        name: userName,
        age: numericAge,
        isActive: user.isActive
    }

    // add object to new array
    processedUsers.push(processedUser);
}


console.log(processedUsers);


for (const user of processedUsers) {
    console.log(`Användare ID: ${user.id}, Namn: ${user.name}, Ålder: ${user.age}, Aktiv: ${user.isActive}`);
}