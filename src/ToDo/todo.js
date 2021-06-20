import React from 'react';
export default function ToDo(){
    return (
        <li>
            <div className="todo">
                <div className="display">
                    <input type="checkbox" className="check"/>
                    <div className="todo-content">模拟数据</div>
                    <span className="todo-destory"></span>
                </div>
                <div className="edit">
                    <input type="text" className="todo-input"/>
                </div>
            </div>
        </li>
    )
}