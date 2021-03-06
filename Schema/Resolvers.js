import {users} from '../data.js';

export const resolvers = {
    Query: {
        getAllUsers() {
            return users;
        }
    },

    Mutation: {
        createUser(parent, args) {
            const newUser = args;
            users.push(newUser);
            return newUser;
        }
    }
}
