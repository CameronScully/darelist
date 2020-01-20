//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './index.css';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//font awesome
import { library } from '@fortawesome/fontawesome-svg-core';

//icons
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faDice } from '@fortawesome/free-solid-svg-icons';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

//components
import Darelist from "./layout/darelist.jsx";

//build font awesome library
library.add(
  faThumbsUp,
  faThumbsDown,
  faTrashAlt,
  faBars,
  faPlusCircle,
  faDice,
  faSyncAlt,
  faCog,
  faArrowLeft
);

ReactDOM.render(
  <Darelist />,
  document.getElementById('root')
);