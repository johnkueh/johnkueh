import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import classNames from 'classnames';

const NavLink = ({ router, href, children }) => (
  <Link href={href}>
    {React.cloneElement(children, {
      className: classNames(children.props.className, { active: router.pathname === href })
    })}
  </Link>
);

export default withRouter(NavLink);
