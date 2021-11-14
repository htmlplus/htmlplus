// TODO
import React, { Dispatch, SetStateAction, useState } from 'react';
import {
  Box,
  Button,
  Footer,
  Header,
  Icon,
  Input,
  Page,
  PlusCard,
  PlusGrid,
  PlusGridItem,
  PlusIntersection,
  PlusTransition,
  Text,
} from '@app/components';
import * as Constants from '@app/constants';
import { frameworks } from '@app/data';
import { addContact } from '@app/services';

const Transition = ({ children }) => {
  const delay = () => (Math.random() * 10).toFixed(2) + 's';

  const duration = () => (70 + Math.random() * 20).toFixed(2) + 's';

  return (
    <PlusTransition
      name="rotate"
      repeat="infinite"
      delay={delay()}
      duration="8s"
      direction="alternate"
    >
      <PlusTransition
        name="heart-beat"
        repeat="infinite"
        delay={delay()}
        duration={duration()}
        direction="alternate"
      >
        <PlusTransition
          name="shake-x"
          repeat="infinite"
          delay={delay()}
          duration={duration()}
          direction="alternate"
        >
          <PlusTransition
            name="shake-y"
            repeat="infinite"
            delay={delay()}
            duration={duration()}
            direction="alternate"
          >
            {children}
          </PlusTransition>
        </PlusTransition>
      </PlusTransition>
    </PlusTransition>
  );
};

const Home = () => {
  const containers = [
    {
      icon: 'grid',
      title: 'Grid',
    },
    {
      icon: 'dialog',
      title: 'Dialog',
    },
    {
      icon: 'aspect-ratio',
      title: 'Aspect Ratio',
    },
    {
      icon: 'drawer',
      title: 'Drawer',
    },
    {
      icon: 'intersection',
      title: 'Intersection',
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
        'It’s prepared in a way that you can use it easily just in a simple step. To  build your next project fast and easy!',
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
    Dispatch<SetStateAction<FormStatus>>
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
    <Page>
      <Header />
      <Box mt={12} px={4}>
        <PlusGrid justifyContent="center">
          <PlusGridItem xs="12" md="11" lg="10" xl="9">
            <PlusGrid justifyContent="center" gutterX="xl">
              <PlusGridItem xs="12" md="6">
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
                <PlusGrid gutterX="sm">
                  <PlusGridItem>
                    <Button to="ROUTE:GETTINGSTARTED:INSTALLATION">
                      Get Started
                    </Button>
                  </PlusGridItem>
                  <PlusGridItem>
                    <Button
                      outlined
                      to={Constants.SOCIAL_GITHUB}
                      target="_blank"
                    >
                      <Icon name="github" />
                      Github
                    </Button>
                  </PlusGridItem>
                </PlusGrid>
                <Box py={10} />
                <PlusGrid gutterX="sm">
                  <PlusGridItem>
                    <Button
                      link
                      to={Constants.GIT_LICENSE_LINK}
                      target="_blank"
                    >
                      <img src={Constants.GIT_LICENSE_IMG} />
                    </Button>
                  </PlusGridItem>
                  <PlusGridItem>
                    <Button
                      link
                      to={Constants.NPM_VERSION_LINK}
                      target="_blank"
                    >
                      <img src={Constants.NPM_VERSION_IMG} />
                    </Button>
                  </PlusGridItem>
                  {/* <PlusGridItem>
                    <Button
                      link
                      to={Constants.GIT_FORKS_LINK}
                      target="_blank"
                    >
                      <img src={Constants.GIT_FORKS_IMG}/>
                    </Button>
                  </PlusGridItem> */}
                  <PlusGridItem>
                    <Button link to={Constants.GIT_STARS_LINK} target="_blank">
                      <img src={Constants.GIT_STARS_IMG} />
                    </Button>
                  </PlusGridItem>
                  {/* <PlusGridItem>
                    <Button link to={Constants.SOCIAL_TWITTER} target="_blank">
                      <img src={Constants.SOCIAL_TWITTER_IMG} />
                    </Button>
                  </PlusGridItem> */}
                </PlusGrid>
              </PlusGridItem>
              <PlusGridItem xs="12" md="6">
                <div className="installation">
                  <Text size="paragraph">Installation</Text>
                  <div className="command">
                    <PlusGrid alignContent="center">
                      <PlusGridItem>
                        <Text color="main" inline>
                          npm install&nbsp;
                        </Text>
                      </PlusGridItem>
                      <PlusGridItem>
                        <Text inline>
                          <div
                            style={{
                              display: 'inline-block',
                              // verticalAlign: 'middle',
                              width: '121px',
                            }}
                          >
                            <PlusTransition
                              name="typing"
                              direction="alternate"
                              delay="2000"
                              duration="normal"
                              repeat="infinite"
                            >
                              {Constants.PORT_JAVASCRIPT_PACKAGE_NAME}
                            </PlusTransition>
                          </div>
                        </Text>
                      </PlusGridItem>
                    </PlusGrid>
                  </div>
                  <div className="polygon">
                    <Transition>
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
                    </Transition>
                  </div>
                  <div className="circle">
                    <Transition>
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 105 105"
                        fill="none"
                      >
                        <circle cx="52.5" cy="52.5" r="52.5" fill="#34E7FF" />
                      </svg>
                    </Transition>
                  </div>
                  <div className="square">
                    <Transition>
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
                    </Transition>
                  </div>
                </div>
              </PlusGridItem>
            </PlusGrid>
            <Box py={20} />
            <PlusGrid justifyContent="center">
              <PlusGridItem xs="12" md="10" lg="8">
                <Text align="center" dense size="3">
                  Begin with our flexible containers
                </Text>
                <Box mb={3} />
                <Text align="center" color="main">
                  Use them in all of your apps. It doesn't matter what framework
                  you are using!
                </Text>
              </PlusGridItem>
            </PlusGrid>
            <Box mb={12} />
            <PlusGrid justifyContent="center" gutterX="xl" gutterY="lg">
              {containers.map((container, index) => (
                <PlusGridItem xs="12" sm="auto" key={container.icon}>
                  <PlusIntersection behavior="appear" once>
                    <PlusTransition
                      name="bounce-in"
                      delay={`${(index + 1) * 0.125}s`}
                    >
                      <Button
                        block
                        link
                        to="ROUTE:COMPONENT:DETAILS"
                        params={{ key: container.icon }}
                      >
                        <Box textAlign="center">
                          <Icon name={container.icon as any} size="xxl" />
                          <Text align="center" weight="bold">
                            {container.title}
                          </Text>
                        </Box>
                      </Button>
                    </PlusTransition>
                  </PlusIntersection>
                </PlusGridItem>
              ))}
            </PlusGrid>
            <Box py={20} />
            <PlusGrid justifyContent="center">
              <PlusGridItem xs="12" md="10" lg="8">
                <Text align="center" dense size="3">
                  Fully Compatible
                </Text>
                <Box mb={3} />
                <Text align="center" color="main">
                  Use them in all of your apps. It doesn't matter what framework
                  you are using!
                </Text>
              </PlusGridItem>
            </PlusGrid>
            <Box mb={12} />
            <PlusGrid justifyContent="center" gutterX="xl" gutterY="lg">
              {frameworks.map((framework, index) => (
                <PlusGridItem xs="12" sm="auto" key={framework.logo}>
                  <PlusIntersection behavior="appear" once>
                    <PlusTransition
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
                    </PlusTransition>
                  </PlusIntersection>
                </PlusGridItem>
              ))}
            </PlusGrid>
            <Box py={20} />
            <PlusGrid justifyContent="center">
              <PlusGridItem xs="12" md="10" lg="8">
                <Text align="center" dense size="3">
                  Here's what you get
                </Text>
                <Box mb={3} />
                <Text align="center" color="main">
                  By using {Constants.PLATFORM_NAME}, you will access to a
                  robust suite of powerful and flexible web components to help
                  you build your application quickly and easily.
                </Text>
              </PlusGridItem>
            </PlusGrid>
            <Box mb={12} />
            <PlusGrid justifyContent="center" gutterX="xl" gutterY="lg">
              {features.map((feature, index) => (
                <PlusGridItem xs="12" md="4" key={feature.icon}>
                  <PlusIntersection behavior="appear" once>
                    <PlusTransition
                      name="fade-in-down"
                      delay={`${(index + 1) * 0.2}s`}
                    >
                      <PlusGrid gutter="md" justifyContent="center">
                        <PlusGridItem>
                          <Icon name={feature.icon as any} size="xl" />
                        </PlusGridItem>
                        <PlusGridItem xs="grow">
                          <Box mt={3} mb={2}>
                            <Text dense size="5" weight="bold">
                              {feature.title}
                            </Text>
                          </Box>
                          <Text size="caption">{feature.description}</Text>
                        </PlusGridItem>
                      </PlusGrid>
                    </PlusTransition>
                  </PlusIntersection>
                </PlusGridItem>
              ))}
            </PlusGrid>
            <Box py={20} />
            <PlusGrid justifyContent="center">
              <PlusGridItem xs="12" md="10" lg="9">
                <PlusCard elevation="2" className="newsletter">
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
                    <PlusGrid gutter="lg" justifyContent="center">
                      <PlusGridItem xs="12" md="8">
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
                      </PlusGridItem>
                      <PlusGridItem xs="12" md="8">
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
                      </PlusGridItem>
                    </PlusGrid>
                  </div>
                  <PlusGrid
                    alignItems="center"
                    gutter="lg"
                    justifyContent="center"
                  >
                    <PlusGridItem xs="12" md="8">
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
                    </PlusGridItem>
                    <PlusGridItem xs="12" md="8">
                      <Button
                        disabled={formStatus === 'SENDING' || !email}
                        loading={formStatus === 'SENDING'}
                        onClick={submit}
                      >
                        Submit
                      </Button>
                    </PlusGridItem>
                  </PlusGrid>
                </PlusCard>
              </PlusGridItem>
            </PlusGrid>
          </PlusGridItem>
        </PlusGrid>
      </Box>
      <Footer />
    </Page>
  );
};

export default Home;
