import React, { Component } from 'react';
import ListItem from './ListItem';

export default class ToDoList extends Component {
    render() {
        const { items, clearList, handleDelete, handleEdit } = this.props;
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">Tasks to Complete</h3>
                {items.map(item => {
                    return (
                        <ListItem
                            key={item.id}
                            title={item.title}
                            handleDelete={() => handleDelete(item.id)}
                            handleEdit={() => handleEdit(item.id)}
                        />
                    );
                })}
                <button
                    type="button"
                    className="btn btn-danger btn-block text-uppercase mt-5"
                    onClick={clearList}
                >
                    clear list
                </button>
            </ul>
        );
    }
}
