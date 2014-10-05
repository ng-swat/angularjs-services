import TaskList from './taskList';

angular.module('app', [])

    .service('taskList', TaskList)

    .run(function (taskList) {

        taskList.addItem("some item to be added");
        taskList.addItem("another item");

        console.log(taskList.getItems());
    });