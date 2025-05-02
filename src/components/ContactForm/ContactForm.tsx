'use client';

import { FC, useActionState } from 'react';
import { useStyles } from './styles';
import { Button, TextField, Typography } from '@mui/material';
import { submitContactForm } from '@/actions';
import Form from 'next/form';
import { ActionResponse } from '@/types';

const initialState: ActionResponse = {
  success: false,
  message: '',
};

export const ContactForm: FC = () => {
  const { classes } = useStyles();

  const [state, action, isPending] = useActionState(submitContactForm, initialState);

  if (state.success) {
    return (
      <Typography variant="h1" align="center" component="div">
        {state.message}
      </Typography>
    );
  }

  return (
    <div className={classes.root}>
      <Typography variant="h1" align="center" gutterBottom className={classes.title}>
        Get in touch with us
      </Typography>
      <Form action={action} className={classes.form}>
        <div>
          <Typography variant="h6" component="div" gutterBottom>
            Name
          </Typography>
          <TextField fullWidth name="name" placeholder="Value" required />
        </div>
        <div>
          <Typography variant="h6" component="div" gutterBottom>
            Email
          </Typography>
          <TextField fullWidth name="email" placeholder="Value" required />
        </div>
        <div>
          <Typography variant="h6" component="div" gutterBottom>
            Message
          </Typography>
          <TextField
            fullWidth
            name="message"
            placeholder="Value"
            required
            multiline
            sx={{
              '.MuiOutlinedInput-input': {
                resize: 'vertical',
                minHeight: '69px',
              },
            }}
          />
        </div>
        <Button variant="contained" type="submit" loading={isPending} fullWidth>
          Submit
        </Button>
      </Form>
    </div>
  );
};
