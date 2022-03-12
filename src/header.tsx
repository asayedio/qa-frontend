import React from 'react';
import { UserIcon } from './Icons';
export const Header = () => (
  <div>
    <a href="./">Q & A</a>
    <input type="type" placeholder="Searching..." />
    <a href="./signin">
      <UserIcon />
      <span>Sign In</span>
    </a>
  </div>
);
