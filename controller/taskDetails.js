
const taskDetailsDAO = require('../dao/taskDetails');

const getAllTasks = async () =>{
    try{
        const tasks = await taskDetailsDAO.getAllTasks();
        console.log("tasks..: ",tasks);
    }catch(err){

    }
}

module.exports = {
    getAllTasks: getAllTasks
}