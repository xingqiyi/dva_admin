import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = DefaultRouter;

let routes = [
  {
    "path": "/",
    "component": require('../../layouts/index.js').default,
    "routes": [
      {
        "path": "/",
        "exact": true,
        "component": require('../index.js').default,
        "_title": "dva_admin",
        "_title_default": "dva_admin"
      },
      {
        "component": () => React.createElement(require('C:/xingqiyi/dva_admin/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false }),
        "_title": "dva_admin",
        "_title_default": "dva_admin"
      }
    ],
    "_title": "dva_admin",
    "_title_default": "dva_admin"
  },
  {
    "component": () => React.createElement(require('C:/xingqiyi/dva_admin/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false }),
    "_title": "dva_admin",
    "_title_default": "dva_admin"
  }
];
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

export default function() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
