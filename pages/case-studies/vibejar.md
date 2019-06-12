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

<img className="img-fluid mb-5" src="/static/images/screens/screen-vibejar-email.png" />

It takes just one click on the 😊, 😐, and 😢 emojis within the email to provide a response.

Then, the response is recorded and the user is redirected to a success page.
On this page, they can also provide more info about productivity, teamwork or general mood during the work day.

<div className="text-center mb-3">
  <img width="500" className="img-fluid" src="/static/images/screens/screen-vibejar-response.png" />
</div>

Responses are collected throughout the week and available for team members and managers to see on a dashboard:

<img className="img-fluid mb-5" src="/static/images/screens/screen-vibejar-dashboard.png" />

This gives the team a transparent view of how everyone's feeling about their work day, and encourages team harmony.

A unique feature of this platform is **time-zoned sending** of emails.
Using this feature, the emails are delivered at 5pm in the timezone of the team member.
This is perfect for remote teams where members are distributed across different timezones.

<img className="img-fluid mb-5" src="/static/images/screens/screen-vibejar-timezone.png" />

### Technical details

<div className="mb-5" />

##### Frontend

The frontend of this app was built using React, on the <a target="_new" href="https://nextjs.org">Next.js</a> framework.
Next.js provides a lot of useful features out of the box like server-side rendering and app routing.
It also comes with <a target="_new" href="https://github.com/zeit/styled-jsx">styled-jsx</a> out of the box for scoped-css and component-friendly styling.

<img width="250" className="img-fluid mb-4" src="/static/images/screens/screen-styled-jsx.png" />

I used Bootstrap 4 which allows me to build and iterate on the UI quickly.
I used <a target="_new" href="https://momentjs.com/">moment.js</a> extensively for time zone manipulation and also to build the weekly view for the dashboard.

More information coming soon

<div className="mb-5" />

##### Backend

Coming soon

<div className="mb-5" />

##### Deployment

Coming soon
