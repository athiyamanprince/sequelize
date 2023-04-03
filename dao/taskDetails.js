
const TaskDetails = require('../models/taskDetails')


const getAllTasks = async () => {
    try {
        return await TaskDetails.findAll({
            

            
        })
    } catch (err) {
        console.log("Error..: ", err);
    }
}

module.exports = {
    getAllTasks: getAllTasks
}