import { Comment, User, SubComment, Forum } from '../models/index.js';
import { db } from '../config/db.js';
import forumData from './data/forums.json' assert { type: 'json' };

console.log('Syncing database...');
await db.sync({ force: true });

console.log('Seeding database...');

const forumsInDB = await Promise.all(
    forumData.map((forum) => {
        const { title, context } = forum;

        const newForum = Forum.create({
            title: title,
            context: context,
        });

        return newForum;
    }),
);

console.log(forumsInDB);



const usersToCreate = [];
for (let i = 0; i < 10; i++) {
    const username = `username${i}`;
    const email = `user${i}@test.com`;
    usersToCreate.push(User.create({ username: username, email: email, password: 'test' }));
}

const usersInDB = await Promise.all(usersToCreate);

console.log(usersInDB);

