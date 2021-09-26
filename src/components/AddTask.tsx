import React, { useState } from 'react';
import { ITask } from '../services/tasks';

import { Paper, Grid, TextField, Button } from '@mui/material';

interface IAddTaskProps {
  createTask: (task: Omit<ITask, 'id'>) => void;
}

export const AddTask: React.FC<IAddTaskProps> = ({ createTask }) => {
  const [text, setText] = useState<string>();

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onSubmit = () => {
    if (!text) {
      return;
    }

    createTask({ text });
    setText('');
  };

  return (
    <Paper style={{ margin: 16, padding: 16 }}>
      <Grid container alignItems="center">
        <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
          <TextField
            placeholder="Add new task"
            value={text}
            onChange={onChangeText}
            fullWidth
          />
        </Grid>
        <Grid xs={2} md={1} item>
          <Button
            fullWidth
            color="secondary"
            variant="outlined"
            size="large"
            onClick={onSubmit}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};
