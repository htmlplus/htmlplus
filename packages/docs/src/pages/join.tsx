import React, { Dispatch, SetStateAction, useState } from 'react';
import {
  Box,
  Button,
  Footer,
  Header,
  Input,
  Grid,
  Text,
} from '@app/components';
import * as Constants from '@app/constants';
import { LayoutDefault } from '@app/layouts';
import { addContact } from '@app/services';

const Join = () => {

  type FormStatus = 'SENDING' | 'SENDING_FAILED' | 'SENDING_SUCCESS';

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formType, setFormType] = useState('Discussion');
  const [formStatus, setFormStatus]: [FormStatus, Dispatch<SetStateAction<FormStatus>>] = useState();

  const submit = () => {
    setFormStatus('SENDING');
    addContact(formType, email)
      .then(() => {
        setFormStatus('SENDING_SUCCESS');
        setEmail('');
        setMessage('');
      })
      .catch(() => {
        setFormStatus('SENDING_FAILED');
      });
  };

  return (
    <LayoutDefault>
      <Header />
      <Box mx="auto" mt={20} maxWidth={480} textAlign="center">
        <Box pt={8}>
          <Text align="center" size="3">
            Join {Constants.PLATFORM_NAME} team
          </Text>
        </Box>
        <Box pb={10}>
          <Text align="center" color="main">
            We are honored to have you in our team to work together.
          </Text>
        </Box>
        <div id="join">
          <Grid gutter="lg">
            <Grid.Item xs="12">
              {/* TODO: a select for job title */}
              <Input
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                value={email}
              />
            </Grid.Item>
          </Grid>
        </div>
        <Grid
          alignItems="center"
          gutter="lg"
          justifyContent="between"
        >
          <Grid.Item>
            {formStatus === 'SENDING_SUCCESS' && (
              <Text color="success-darken-2">
                Your request is sent successfully!
              </Text>
            )}
            {formStatus === 'SENDING_FAILED' && (
              <Text color="error">
                There was an issue processing your request.
              </Text>
            )}
          </Grid.Item>
          <Grid.Item>
            <Button
              disabled={formStatus === 'SENDING' || !email}
              loading={formStatus === 'SENDING'}
              onClick={submit}
            >
              Submit
            </Button>
          </Grid.Item>
        </Grid>
      </Box>
      <Footer />
    </LayoutDefault>
  )
}

export default Join;
