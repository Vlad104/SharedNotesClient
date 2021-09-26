import React, { useState } from 'react';
import { ITask } from '../services/tasks';

import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  TextField,
} from '@mui/material';
import { EditOutlined, DeleteOutlined } from '@mui/icons-material';

interface ITaskProps {
  task: ITask;
  updateTask: (task: ITask) => void;
  deleteTask: (id: string) => void;
}

export const Task: React.FC<ITaskProps> = ({
  task,
  updateTask,
  deleteTask,
}) => {
  const [isEdit = false, setIsEdit] = useState<boolean>();
  const [text = task.text, setText] = useState<string>();

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleUpdate = () => {
    setIsEdit(false);

    if (!text) {
      deleteTask(task.id);
      return;
    }

    if (task.text !== text) {
      updateTask({ ...task, text });
    }
  };

  return (
    <ListItem divider={true}>
      {isEdit ? (
        <TextField
          placeholder="Add new task"
          value={text}
          onChange={handleChangeText}
          fullWidth
        />
      ) : (
        <ListItemText primary={text} />
      )}
      <ListItemSecondaryAction>
        {isEdit ? (
          <IconButton aria-label="Update" onClick={handleUpdate}>
            <EditOutlined />
          </IconButton>
        ) : (
          <IconButton aria-label="Edit" onClick={() => setIsEdit(true)}>
            <EditOutlined />
          </IconButton>
        )}
        <IconButton aria-label="Delete" onClick={() => deleteTask(task.id)}>
          <DeleteOutlined />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
