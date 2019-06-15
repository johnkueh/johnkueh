import { withLayout } from '../../layouts/case-study';

export default withLayout({
  title: 'Vibejar',
  caption: 'A tool to track employee happyness',
  color: '#ffb400',
  tech: [
    'React.js',
    'Next.js',
    'Node.js',
    'Apollo Server',
    'GraphQL',
    ['graphql-shield', 'https://github.com/maticzav/graphql-shield'],
    'Prisma',
    'Jest',
    'Cypress'
  ],
  servicesUsed: [
    'AWS Fargate',
    'AWS RDS',
    'Zeit Now (Serverless)',
    'Easycron',
    'Prisma Cloud',
    'SendGrid',
    'Basecamp (Project Management)'
  ]
});

Vibejar is an app that helps track the happyness level of team members.
The app sends an email at 5pm every weekday to ask a very simple question:
**How are you feeling today?**.

<img className="img-fluid" src="/static/images/screens/screen-vibejar-email.png" />

It takes just one click on the 😊, 😐, and 😢 emojis within the email to provide a response.

Then, the response is recorded and the user is redirected to a success page.
On this page, they can also provide more info about productivity, teamwork or general mood during the work day.

<div className="text-center">
  <img width="500" className="img-fluid" src="/static/images/screens/screen-vibejar-response.png" />
</div>

Responses are collected throughout the week and available for team members and managers to see on a dashboard:

<img className="img-fluid" src="/static/images/screens/screen-vibejar-dashboard.png" />

This gives the team a transparent view of how everyone's feeling about their work day, and encourages team harmony.

A unique feature of this platform is **time-zoned sending** of emails.
Using this feature, the emails are delivered at 5pm in the timezone of the team member.
This is perfect for remote teams where members are distributed across different timezones.

<img className="img-fluid" src="/static/images/screens/screen-vibejar-timezone.png" />

#### An awesome tech stack for quickly building out ideas.

The **frontend** was built using React, using the <a target="_new" href="https://nextjs.org">Next.js</a> framework.
Next.js wants to be come the Ruby on Rails for the frontend world. It provides a lot of useful features out of the box like server-side rendering and app routing.
It also comes with <a target="_new" href="https://github.com/zeit/styled-jsx">styled-jsx</a> out of the box for scoped and component-based styling.

It is super easy to get a React app up and running with Next.js. Its even better if your app relies heavily on SEO (marketplace/b2c ideas) as Next.js is optimized for it via server-side rendering.

The frontend world is often confusing with many boilerplates like <a target="_new" href="https://github.com/facebook/create-react-app">CRA</a>, react-boilerplate, etc.
My personal choice is Next.js as its got great documentation and support.

<div className="mb-4" />

The **backend** consists of a GraphQL endpoint, and a cron job to send the daily emails. The GraphQL endpoint was built using Apollo Server, hosted as a serverless lambda on the awesome <a target="_new" href="https://zeit.co/now">Zeit Now platform.</a>
. Serverless tech unlocks huge cost savings and Zeit's products have great documentation and developer experience.

GraphQL is an awesome query language invented by the guys at Facebook. It's role is to replace REST APIs. Unlike REST APIs, the clients (browsers and mobile apps) are given the power to ask for exactly what they need with GraphQL.
The best part is that you get API docs for free:

<img className="img-fluid" src="/static/images/screens/screen-graphql.png" />

I've also used <a target="_new" href="https://prisma.io">Prisma</a> as an ORM replacement for the backend (instead of Sequelize or TypeORM).

<br />

#### Quality assurance and automated tests

Because I am the solo developer on this project, I mainly only write integration (<a href="https://jestjs.io">Jest</a>) and end-to-end (<a href="https://cypress.io">Cypress</a>) tests. Instead of mocks, I use a real db / prisma instance for testing.

Writing only integration and e2e tests enabled me to continue moving fast, while providing enough confidence that existing things did not break when I add a new feature.

<br />

##### Jest

<img className="img-fluid" src="/static/images/screens/screen-integration-tests.gif" />

##### Cypress

<img className="img-fluid" src="/static/images/screens/screen-e2e-tests-lowq.gif" />

<br />

#### Conclusions

The modern tech stack of React, Next.js, GraphQL, and Prisma, along with serverless tech from Zeit allows me to build out a relatively complex app in a very short timeframe. Perfect for MVPs and first iteration of a product for testing.
