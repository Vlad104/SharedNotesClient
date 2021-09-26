import React, { useEffect, useState } from 'react';

import { TaskList } from '../components/TaskList';
import { AddTask } from '../components/AddTask';

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  ITask,
} from '../services/tasks';
import { Redirect } from 'react-router-dom';

import { Paper, AppBar, Toolbar, Typography } from '@mui/material';

export const TasksPage: React.FC = () => {
  const [logined, setLogined] = useState<boolean>(true);
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = (): void => {
    getTasks()
      .then((tasks: ITask[]) => setTasks(tasks))
      .catch(() => setLogined(false));
  };

  const onCreateTask = (task: Omit<ITask, 'id'>): void => {
    createTask(task)
      .then((newTask) => {
        setTasks([...tasks, newTask]);
      })
      .catch(() => setLogined(false));
  };

  const onUpdateTask = (task: ITask): void => {
    updateTask(task)
      .then((updatedTask: ITask) => {
        setTasks(
          tasks.reduce((acc, task) => {
            if (task.id === updatedTask.id) {
              acc.push(updatedTask);
            } else {
              acc.push(task);
            }

            return acc;
          }, [] as ITask[]),
        );
      })
      .catch(() => setLogined(false));
  };

  const onDeleteTask = (id: string): void => {
    deleteTask(id)
      .then(() => {
        setTasks(tasks.filter((task) => task.id !== id));
      })
      .catch(() => setLogined(false));
  };

  const renderPage = () => (
    <Paper elevation={0} style={{ padding: 0, margin: 0 }}>
      <AppBar color="primary" position="static" style={{ height: 64 }}>
        <Toolbar style={{ height: 64 }}>
          <Typography color="inherit">TASK APP</Typography>
        </Toolbar>
      </AppBar>

      <AddTask createTask={onCreateTask} />
      <TaskList
        tasks={tasks}
        updateTask={onUpdateTask}
        deleteTask={onDeleteTask}
      />
    </Paper>
  );

  return logined ? renderPage() : <Redirect to="/signin" />;
};
