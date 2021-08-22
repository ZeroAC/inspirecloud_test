// 引入 @byteinspire/api 库，该库提供了轻服务的各种开箱即用功能
const inspirecloud = require('@byteinspire/api');
// 引入操作记录表
const TodoOperationTable = require('../models/todoOperationTable');

const { ObjectId } = inspirecloud.db;

class TodoOperationService {
    async addOne(operation, id) {
        // 调用 Table 的 create 方法，新建一个操作记录
        const todoOperationItem = TodoOperationTable.create({
            operation,
            todoItemId: id ? ObjectId(id) : null,
        });
        // 调用 Table 的 save 方法，保存进数据库
        await TodoOperationTable.save(todoOperationItem);
    }
}

// 导出一个该 Service 的实例，供 Controller 使用
module.exports = new TodoOperationService();