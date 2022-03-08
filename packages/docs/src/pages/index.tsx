// TODO
import {
  Box,
  Button,
  Footer,
  Header,
  Icon,
  Input,
  Card,
  Grid,
  Intersection,
  Text,
  Transition,
} from '@app/components';
import * as Constants from '@app/constants';
import { frameworks } from '@app/data';
import { addContact } from '@app/services';
import React, { Dispatch, SetStateAction, useState } from 'react';

const TransitionGroup = ({ children }) => {
  const delay = () => (Math.random() * 10).toFixed(2) + 's';

  const duration = () => (70 + Math.random() * 20).toFixed(2) + 's';

  return (
    <Transition
      name="rotate"
      repeat="infinite"
      delay={delay()}
      duration="8s"
      direction="alternate"
    >
      <Transition
        name="heart-beat"
        repeat="infinite"
        delay={delay()}
        duration={duration()}
        direction="alternate"
      >
        <Transition
          name="shake-x"
          repeat="infinite"
          delay={delay()}
          duration={duration()}
          direction="alternate"
        >
          <Transition
            name="shake-y"
            repeat="infinite"
            delay={delay()}
            duration={duration()}
            direction="alternate"
          >
            {children}
          </Transition>
        </Transition>
      </Transition>
    </Transition>
  );
};

const Home = () => {
  const status = [
    {
      link: Constants.GIT_LICENSE_LINK,
      image: Constants.GIT_LICENSE_IMAGE,
    },
    {
      link: Constants.NPM_VERSION_LINK,
      image: Constants.NPM_VERSION_IMAGE,
    },
    {
      link: Constants.GIT_STARS_LINK,
      image: Constants.GIT_STARS_IMAGE,
    },
  ];

  const features = [
    {
      icon: 'cross-framework',
      title: 'Cross Framework',
      description:
        'All components are developed based on web components. They are  completely compatible with all framework.',
    },
    {
      icon: 'performance',
      title: 'Performance Benefits',
      description:
        'We used virtual DOM to increase the process speed of the DOM to improve the efficiency.',
    },
    {
      icon: 'zero-config',
      title: 'Zero Configuration',
      description:
        'It’s prepared in a way that you can use it easily just in a simple step. To  build your next project fast and easy.',
    },
    {
      icon: 'lightweight',
      title: 'Lightweight',
      description:
        'We tried to keep the size of components as tiny as possbile.',
    },
    {
      icon: 'dependency-free',
      title: 'Dependency Free',
      description:
        'There is not any dependency  to any third-party libraries or any other dependencies. They are totally independent.',
    },
    {
      icon: 'simple',
      title: 'Simple and Easy-to-learn',
      description:
        'Robust explanation and complete examples aids are presented with components.',
    },
  ];

  type FormStatus = 'SENDING' | 'SENDING_FAILED' | 'SENDING_SUCCESS';

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formType, setFormType] = useState('Discussion');
  const [formStatus, setFormStatus]: [
    FormStatus,
    Dispatch<SetStateAction<FormStatus>>,
  ] = useState();

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
    <>
      <Header />
      <Box mt={20} px={4}>
        <Grid justifyContent="center">
          <Grid.Item xs="12" md="11" lg="10" xl="9">
            <Grid justifyContent="center" gutterX="xl">
              <Grid.Item xs="12" md="6">
                <Text size="super">
                  The most flexible open-source web component library!
                </Text>
                <Box pb={1} />
                <Text size="paragraph" align="justify">
                  {Constants.PLATFORM_NAME} is framework-less and lightweight.
                  It’s totally native and developed purely with javascript. All{' '}
                  {Constants.PLATFORM_NAME} containers are customizable and
                  configurable.
                </Text>
                <Box py={6} />
                <Grid gutterX="lg">
                  <Grid.Item>
                    <Button outlined to="ROUTE:INSTALLATION">
                      Get Started
                    </Button>
                  </Grid.Item>
                  <Grid.Item>
                    <Button to={Constants.SOCIAL_GITHUB} target="_blank">
                      <Icon name="github" />
                      Github
                    </Button>
                  </Grid.Item>
                </Grid>
                <Box py={10} />
                <Grid gutterX="sm">
                  {status.map((status) => (
                    <Grid.Item key={status.link}>
                      <Button link to={status.link} target="_blank">
                        <img src={status.image} />
                      </Button>
                    </Grid.Item>
                  ))}
                </Grid>
              </Grid.Item>
              <Grid.Item xs="12" md="6">
                <div className="installation">
                  <Text size="paragraph">Installation</Text>
                  <div className="command">
                    <Grid alignContent="center">
                      <Grid.Item>
                        <Text color="main" inline>
                          npm install&nbsp;
                        </Text>
                      </Grid.Item>
                      <Grid.Item>
                        <Text inline>
                          <div
                            style={{
                              display: 'inline-block',
                              // verticalAlign: 'middle',
                              width: '121px',
                            }}
                          >
                            <Transition
                              name="typing"
                              direction="alternate"
                              delay="2000"
                              duration="normal"
                              repeat="infinite"
                            >
                              {Constants.PORT_JAVASCRIPT_PACKAGE_NAME}
                            </Transition>
                          </div>
                        </Text>
                      </Grid.Item>
                    </Grid>
                  </div>
                  <div className="polygon">
                    <TransitionGroup>
                      <svg
                        width="75"
                        height="75"
                        viewBox="0 0 133 130"
                        fill="none"
                      >
                        <path
                          d="M66.7671 24.6683C81.2574 15.9021 99.8035 26.1095 100.15 43.0415L101.302 99.3214C101.649 116.253 83.5357 127.211 68.6988 119.045L19.383 91.903C4.54614 83.7371 4.11293 62.572 18.6032 53.8059L66.7671 24.6683Z"
                          fill="#FFDB5A"
                        />
                      </svg>
                    </TransitionGroup>
                  </div>
                  <div className="circle">
                    <TransitionGroup>
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 105 105"
                        fill="none"
                      >
                        <circle cx="52.5" cy="52.5" r="52.5" fill="#34E7FF" />
                      </svg>
                    </TransitionGroup>
                  </div>
                  <div className="square">
                    <TransitionGroup>
                      <svg
                        width="75"
                        height="75"
                        viewBox="0 0 160 160"
                        fill="none"
                      >
                        <rect
                          x="37.4293"
                          width="127.952"
                          height="127.952"
                          rx="22"
                          transform="rotate(17.0092 37.4293 0)"
                          fill="#d9d9d9"
                        />
                      </svg>
                    </TransitionGroup>
                  </div>
                </div>
              </Grid.Item>
            </Grid>
            <Box py={20} />
            <Grid justifyContent="center">
              <Grid.Item xs="12" md="10" lg="8">
                <Text align="center" dense size="3">
                  Fully Compatible
                </Text>
                <Box mb={3} />
                <Text align="center" color="main">
                  Use them in all of your apps. It doesn't matter what framework
                  you are using!
                </Text>
              </Grid.Item>
            </Grid>
            <Box mb={12} />
            <Grid justifyContent="center" gutterX="xl" gutterY="lg">
              {frameworks.map((framework, index) => (
                <Grid.Item xs="12" sm="auto" key={framework.logo}>
                  <Intersection behavior="appear" once>
                    <Transition
                      name="flip-in-y"
                      delay={`${(index + 1) * 0.125}s`}
                    >
                      <div
                        className={`framework${
                          framework.disabled ? ' disabled' : ''
                        }`}
                      >
                        <img
                          src={`/assets/logo/${framework.logo}`}
                          alt={`${framework.title} logo`}
                        />
                        {framework.disabled && (
                          <div className="badge">Planned</div>
                        )}
                        <Text align="center" size="caption">
                          {framework.title}
                        </Text>
                      </div>
                    </Transition>
                  </Intersection>
                </Grid.Item>
              ))}
            </Grid>
            <Box py={20} />
            <Grid justifyContent="center">
              <Grid.Item xs="12" md="10" lg="8">
                <Text align="center" dense size="3">
                  Here's what you get
                </Text>
                <Box mb={3} />
                <Text align="center" color="main">
                  By using {Constants.PLATFORM_NAME}, you will access to a
                  robust suite of powerful and flexible web components to help
                  you build your application quickly and easily.
                </Text>
              </Grid.Item>
            </Grid>
            <Box mb={12} />
            <Grid
              className="features"
              alignItems="stretch"
              justifyContent="center"
              gutter="lg"
            >
              {features.map((feature, index) => (
                <Grid.Item
                  xs="12"
                  sm="12"
                  md="6"
                  lg="6"
                  xl="6"
                  xxl="4"
                  key={feature.icon}
                >
                  <Intersection behavior="appear" once>
                    <Transition
                      name="fade-in-down"
                      delay={`${(index + 1) * 0.2}s`}
                    >
                      <Card elevation="5">
                        <Box p={4}>
                          <Grid
                            alignItems="start"
                            gutter="md"
                            justifyContent="center"
                            wrap="off"
                          >
                            <Grid.Item alignSelf="center">
                              <Icon
                                color="primary"
                                name={feature.icon as any}
                                size="3x"
                              />
                            </Grid.Item>
                            <Grid.Item xs="grow">
                              <Box mt={3} mb={2}>
                                <Text dense size="5" weight="bold">
                                  <span>{feature.title}</span>
                                </Text>
                              </Box>
                              <Text>{feature.description}</Text>
                            </Grid.Item>
                          </Grid>
                        </Box>
                      </Card>
                    </Transition>
                  </Intersection>
                </Grid.Item>
              ))}
            </Grid>
            <Box py={20} />
            <Grid justifyContent="center">
              <Grid.Item xs="12" md="10" lg="9">
                <Card elevation="2" className="newsletter">
                  <div className="image">
                    <img src="/assets/images/stay-tuned.png" />
                  </div>
                  <Box py={8}>
                    <Text align="center" size="3">
                      Have a question? lending a hand?
                    </Text>
                    <Text align="center" size="3">
                      or want to stay tuned?
                    </Text>
                  </Box>
                  <Box pb={10}>
                    <Text align="center" color="main">
                      Feel free to contact us if you have any question about{' '}
                      {Constants.PLATFORM_NAME}.
                      <br />
                      We also are honored if you are eager to join our team to
                      work on it together.
                    </Text>
                  </Box>
                  <div id="join">
                    <Grid gutter="lg">
                      <Grid.Item xs="12" md="6">
                        <div>
                          <Input
                            checked={formType === 'Discussion'}
                            label="Ask a Question"
                            name="formType"
                            onChange={() => setFormType('Discussion')}
                            type="radio"
                            value="Discussion"
                          />
                        </div>
                        <div>
                          <Input
                            checked={formType === 'Newsletter'}
                            label="Subscribe to our Newsletter"
                            name="formType"
                            onChange={() => setFormType('Newsletter')}
                            type="radio"
                            value="Newsletter"
                          />
                        </div>
                        <div>
                          <Input
                            checked={formType === 'Contribution'}
                            label="Join our development team"
                            name="formType"
                            onChange={() => setFormType('Contribution')}
                            type="radio"
                            value="Contribution"
                          />
                        </div>
                      </Grid.Item>
                      <Grid.Item xs="12" md="6">
                        <Input
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email address"
                          value={email}
                        />
                        <Input
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Write your message"
                          type="textarea"
                          value={message}
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
                </Card>
              </Grid.Item>
            </Grid>
          </Grid.Item>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default Home;
