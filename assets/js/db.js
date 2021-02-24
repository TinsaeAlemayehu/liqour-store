var db = new Dexie("myTasks") //used to create a database

db.version(9).stores({
    tasks: '++id, task, createdAt, updatedAt',
    users: '++userId, &email, password'
}) //created tasks and user objectStore

// creating or adding task
// const task = {
//     task: "do smthing",
//     createdAt: new Date(),
//     updatedAt: ""
// }

// async function addTask(task) {
//     await db.tasks.add(task).then((result) => {
//         console.log(result)
//         console.log("success")
//     }).catch(error => {
//         console.error(error)
//     })
// }

// addTask(task)
