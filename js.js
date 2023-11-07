// Simulated database to store user information
const users = [];

function signup(username, password) {
    // Check if the username is already taken
    if (users.some(user => user.username === username)) {
        console.log('Username already taken. Please choose another one.');
        return;
    }

    // Create a new user object and add it to the database
    const newUser = { username, password };
    users.push(newUser);

    console.log('Signup successful. Welcome, ' + username + '!');
}

function login(username, password) {
    // Find the user in the database
    const user = users.find(user => user.username === username);

    // Check if the user exists and the password is correct
    if (user && user.password === password) {
        console.log('Login successful. Hello, ' + username + '!');
    } else {
        console.log('Invalid username or password. Please try again.');
    }
}

// Example usage:
signup('john_doe', 'password123');
login('john_doe', 'password123');
login('nonexistent_user', 'wrong_password');
