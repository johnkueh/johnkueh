import React from 'react';
import Link from 'next/link';
import Layout from '../layouts/main';

export default () => (
  <Layout>
    <div className="p-3 mb-md-5 px-md-0 py-md-5">
      <div className="row">
        <div className="col-md-12 d-flex flex-column text-center justify-content-center">
          <img className="mx-auto mb-5" width="88" src="/static/images/innovation.svg" />
          <h1>Hello, I'm John.</h1>
          <p>I help startups build awesome products at blazing speed. Here's some of my work.</p>
        </div>
      </div>
    </div>
    <div className="pb-4">
      <div className="d-flex flex-wrap card-work">
        <div style={{ backgroundColor: '#ffb400' }} className="preview d-flex align-items-center">
          <img alt="screen" className="screen img-fluid" src="/static/images/screen-vibejar.png" />
        </div>
        <div className="content">
          <h2>Vibejar</h2>
          <p>A tool to track employee happyness</p>
          <ul>
            <li>
              I am the solo developer building out the platform using the following tech: Next.js,
              React.js, Node.js, Prisma, Serverless.
            </li>
            <li>
              Implemented smart testing strategies while still allowing quick product iterations -
              integration (Jest) and E2E (Cypress).
            </li>
            <li>Used GraphQL and Prisma for a super quick setup and flexible backend.</li>
            <li>Product roadmap planning and writing user stories on Basecamp.</li>
          </ul>
          <div className="mt-4">
            <Link href="#">
              <a href="#">
                View case study
                <i className="ml-2 fal fa-long-arrow-right" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="pb-4">
      <div className="d-flex flex-wrap card-work">
        <div
          style={{ backgroundColor: '#1BAAA0' }}
          className="order-1 preview d-flex align-items-center"
        >
          <img alt="screen" className="screen img-fluid" src="/static/images/screen-zibbet.png" />
        </div>
        <div className="content">
          <h2>Zibbet</h2>
          <p>A multi-channel e-commerce platform.</p>
          <ul>
            <li>
              I work with 2 other developers to help build out the new Zibbet platform using
              Ember.js and Ruby on Rails.
            </li>
            <li>Very well tested codebase, PR reviews for every feature release.</li>
            <li>
              I did backend work on subscription billing system (Braintree), worker jobs running on
              a schedule (Sidekiq) and frontend work coding up designed components.
            </li>
            <li>Worked with the team via a Kanban-style product backlog on Asana.</li>
          </ul>
          <div className="mt-4">
            <Link href="#">
              <a href="#">
                View case study
                <i className="ml-2 fal fa-long-arrow-right" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="pb-4">
      <div className="d-flex flex-wrap card-work">
        <div style={{ backgroundColor: '#0f1e44' }} className="preview d-flex align-items-center">
          <img alt="screen" className="screen img-fluid" src="/static/images/screen-frogid.png" />
        </div>
        <div className="content">
          <h2>FrogID</h2>
          <p>A platform to collect and evaluate frog calls!</p>
          <ul>
            <li>
              I am the solo developer working with the Australian Museum and a mobile development
              team from IBM to create this whole platform.
            </li>
            <li>Optimized backend to support 20,000 users and daily admin workflows.</li>
            <li>
              I designed and coded the whole frontend in React.js, and backend + API in Ruby on
              Rails.
            </li>
            <li>Managed user stories, track bugs and client feedback in Basecamp.</li>
          </ul>
          <div className="mt-4">
            <Link href="#">
              <a href="#">
                View case study
                <i className="ml-2 fal fa-long-arrow-right" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="pb-4">
      <div className="d-flex flex-wrap card-work">
        <div
          style={{ backgroundColor: '#00b5ed' }}
          className="order-1 preview d-flex align-items-center"
        >
          <img alt="screen" className="screen img-fluid" src="/static/images/screen-bm.png" />
        </div>
        <div className="content">
          <h2>Beaconmaker</h2>
          <p>A platform for museums to build audio tour apps.</p>
          <ul>
            <li>
              I founded this company. I am the solo developer that created the whole platform - a
              content management system (CMS), and a system to produce white-labelled apps.
            </li>
            <li>
              Supported audio tour apps from the biggest tourist attractions in Australia - Sydney
              Opera House, Australian Museum, Sydney Living Museums and more!
            </li>
            <li>
              CMS front end was built in React.js, backend in Ruby on Rails. Audio tour apps were
              created using React Native and Expo
            </li>
            <li>
              I did customer development, wrote user stories and managed customer accounts in Trello
            </li>
          </ul>
          <div className="mt-4">
            <Link href="#">
              <a href="#">
                View case study
                <i className="ml-2 fal fa-long-arrow-right" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="pt-5">
      <h3>Mobile apps (React Native)</h3>
      <div className="row">
        <div className="col-md-4 card-work--mini">
          <img className="img-fluid" src="/static/images/screen-whaletrail.png" />
          <h2>AR Whale Trail</h2>
          <p>An augmented reality app to look for hidden whales!</p>
          <Link href="#">
            <a href="#">
              View case study
              <i className="ml-2 fal fa-long-arrow-right" />
            </a>
          </Link>
        </div>
        <div className="col-md-4 card-work--mini">
          <img className="img-fluid" src="/static/images/screen-treasurehunt.png" />
          <h2>Westpac 200 Treasure Hunt</h2>
          <p>A treasure hunt app to look for objects around the museum.</p>
          <Link href="#">
            <a href="#">
              View case study
              <i className="ml-2 fal fa-long-arrow-right" />
            </a>
          </Link>
        </div>
        <div className="col-md-4 card-work--mini">
          <img className="img-fluid" src="/static/images/screen-bigw.jpg" />
          <h2>BIG W Easter Egg Hunt</h2>
          <p>A treasure hunt app to look for virtual easter eggs in retail stores.</p>
          <Link href="#">
            <a href="#">
              View case study
              <i className="ml-2 fal fa-long-arrow-right" />
            </a>
          </Link>
        </div>
      </div>
    </div>
    <div className="text-center mt-5 pt-5 pb-4">
      <h3>I am so grateful to have worked with these awesome clients</h3>
      <div className="py-3">
        <img
          alt="woolworths logo"
          width="100"
          className="client-logo m-5"
          src="https://logo.clearbit.com/woolworthsgroup.com.au?size=400"
        />
        <img
          alt="bigw logo"
          width="100"
          className="client-logo m-5"
          src="https://logo.clearbit.com/bigw.com.au?size=400"
        />
        <img
          alt="sydney opera house logo"
          width="100"
          className="client-logo m-5"
          src="/static/images/logo-soh.jpg"
        />
        <img
          alt="zibbet logo"
          width="150"
          className="client-logo m-5"
          src="/static/images/logo-zibbet.svg"
        />
        <img
          alt="australian museum logo"
          width="150"
          className="client-logo m-5"
          src="/static/images/logo-am.png"
        />
      </div>
    </div>

    <div className="row">
      <div className="col-md-6">
        <div className="card-review">
          <div>
            When you hire John, you don’t just get a programmer, you get a programmer that is
            genuinely interested in solving product problems. I would gladly work on more projects
            with him and highly recommend him.
          </div>
          <div className="mt-3 d-flex align-items-center">
            <div className="reviewer">Ary - Product designer at Canva</div>
            <div className="ml-3">
              <img alt="canva logo" width="50" src="/static/images/logo-canva.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card-review">
          <div>
            John is one of a kind. He is a true lean startup entrepreneur who can design as well as
            he can code as well as he gets in front of customers to understand what they want. His
            attitude is more impressive than his skills. He finds a way forwards with a smile,
            always.
          </div>
          <div className="mt-3 d-flex align-items-center">
            <div className="reviewer">Phil Morle - Partner at Main Sequence Ventures</div>
            <div className="ml-3">
              <div className="bg-white p-3 rounded">
                <img alt="canva logo" width="200" src="/static/images/logo-mseqvc.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="py-5 mt-5 text-center">
      <Link href="/contact">
        <a href="/contact" className="btn btn-primary btn-lg">
          Get in touch &nbsp;👋
        </a>
      </Link>
    </div>
  </Layout>
);
