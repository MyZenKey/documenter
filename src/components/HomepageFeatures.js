import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import { ArrowRight, ChevronRight } from 'react-bootstrap-icons';

const FeatureList = [
  {
    title: 'Welcome',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Find out what makes ZenKey unique 
      </>
    ),
    doc: './docs/intro'
  },
  {
    title: 'Conceptual Overview',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Get an introduction to the language and concepts that make ZenKey tick
      </>
    ),
    doc: './docs/conceptual-overview/conceptual-overview'
  },
  {
    title: 'Technical Overview',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Get an introduction to the architecture that makes ZenKey possible
      </>
    ),
    doc: './docs/tech-overview/tech-overview'
  },
  {
    title: 'Best Practices',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Start handling your user authentication with ZenKey
      </>
    ),
    doc: './docs/best-practices/best-practices-getting-started'
  },
  {
    title: 'Integration Guide',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        View our variety of integration options
      </>
    ),
    doc: './docs/integration-guide/integration-options'
  },
  {
    title: 'Android Guide',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Add ZenKey to an Android app
      </>
    ),
    doc: './docs/android/quickstart/android-enroll-in-the-developer-portal'
  },
  {
    title: 'Web Guide',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
         Add ZenKey to a Web app
      </>
    ),
    doc: './docs/web/web-integration-options'
  },
  {
    title: 'Portal User Guide',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Walkthrough our self-service developer portal
      </>
    ),
    doc: './docs/portal-user-guide/portal-introduction'
  },
  {
    title: 'Singular Key',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        See how ZenKey seamlessly integrates with Singular Key
      </>
    ),
    doc: './docs/singular-key/FlowAPI'
  },
  {
    title: 'Additional Topics',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Topics that might pique your interest
      </>
    ),
    doc: './docs/additional-topics/discovery-flows/modrna-based-discovery-flow'
  },
];

function Feature({Svg, title, description, doc}) {
  return (
    <div className={clsx('col col--4 feature--row-margin')}>
      <a href={doc} className="feature--wrapper">
        <div className="feature--block">
        {/* <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div> */}
      <div className="padding-horiz--md padding-vert--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="learn--more">
        <div className="fakelink">Learn more  <ChevronRight className="feature--icon" /></div>
      </div>
      </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      {/* <div class="text--center feature--rowHeader-margin"><h2>Getting Started</h2></div> */}
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
