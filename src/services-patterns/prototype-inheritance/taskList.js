import ItemList from './itemList'

class TaskList extends ItemList  {

    constructor() {
        super()
    }

    getItems () {
        return this.items;
    }
}

export default TaskList;
