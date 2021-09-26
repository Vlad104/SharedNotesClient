import React from 'react';

import { Task } from '../components/Task';

import { ITask } from '../services/tasks';

import { Paper, List } from '@mui/material';

interface ITasksListProps {
  tasks: ITask[];
  updateTask: (task: ITask) => void;
  deleteTask: (id: string) => void;
}

export const TaskList: React.FC<ITasksListProps> = ({
  tasks,
  updateTask,
  deleteTask,
}) => {
  return (
    <>
      {tasks.length > 0 && (
        <Paper style={{ margin: 16 }}>
          <List style={{ overflow: 'scroll' }}>
            {tasks.map((task: ITask) => (
              <Task
                key={task.id}
                task={task}
                updateTask={updateTask}
                deleteTask={deleteTask}
              />
            ))}
          </List>
        </Paper>
      )}
    </>
  );
};
