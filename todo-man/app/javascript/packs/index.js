// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { default as TodoApp } from '../components/App';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/todoapp">Todo App</Link>
            </li>
            {/* <li>
              <Link to="/interactivelist">Interactive List</Link>
            </li> */}
          </ul>
        </nav>

        <Switch>
          <Route path="/todoapp">
            <TodoApp />
          </Route>
          {/* <Route path="/intractivelist">
            <InteractiveList />
          </Route> */}
        </Switch>
      </div>
    </Router>,
    document.body.appendChild(document.createElement('div')),
  )
})
