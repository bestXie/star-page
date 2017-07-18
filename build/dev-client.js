/**
 * Created by bestxie on 2017/6/6.
 */
require('eventsource-polyfill');
let hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true');

hotClient.subscribe(function (event) {

  if (event.action === 'reload') {
    window.location.reload()
  }
});
