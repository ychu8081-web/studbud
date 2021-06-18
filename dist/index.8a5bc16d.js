// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"27Rzb":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "97912cc17f1f5bdf37964fbc8a5bc16d";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"4OAbU":[function(require,module,exports) {
var _componentNavigation = require('./component/navigation');
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
var _componentNavigationDefault = _parcelHelpers.interopDefault(_componentNavigation);
require('./component/tasklist');
require('./component/dictionary');
require('./component/pomodoro');
require('./component/stopwatch');
require('./component/music');
// Reference from from Rob Dongas class tutorial walkthrough
const links = document.querySelectorAll('.timer-nav > ul > li > a');
const pages = document.querySelectorAll('.timer-page-container');
var timerNav = new _componentNavigationDefault.default(links, pages);
timerNav.getLinks();
timerNav.links.forEach(function (link) {
  link.addEventListener('click', function () {
    let pageId = timerNav.getHash(link);
    timerNav.setPage(pageId);
  });
});
// Multiple modals reference from = https://stackoverflow.com/questions/40645032/creating-multiple-modals-on-a-single-page
// Get the modal
var modal = document.getElementsByClassName('modal');
// Get the button that opens the modal
var btn = document.getElementsByClassName('openBtn');
// Get the <span> element that closes the modal
var span = document.getElementsByClassName('closeBtn');
// When the user clicks the button, open the modal
btn[0].onclick = function () {
  modal[0].style.display = "block";
};
btn[1].onclick = function () {
  modal[1].style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span[0].onclick = function () {
  modal[0].style.display = "none";
};
span[1].onclick = function () {
  modal[1].style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal[0]) {
    modal[0].style.display = "none";
  }
  if (event.target == modal[1]) {
    modal[1].style.display = "none";
  }
};

},{"./component/navigation":"5dOJi","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y","./component/tasklist":"1PYKt","./component/dictionary":"4P7Sk","./component/stopwatch":"i4jdM","./component/pomodoro":"4rDpH","./component/music":"5PuhK"}],"5dOJi":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
// Reference from from Rob Dongas class tutorial walkthrough
class Navigation {
  constructor(links, pages) {
    this.links = links;
    this.pages = pages;
    this.currentPage = null;
  }
  getLinks() {
    console.log(this.links);
  }
  setPage(pageId) {
    this.currentPage = pageId;
    console.log(this.currentPage);
    this.links.forEach(link => {
      link.classList.remove('active');
      if (this.getHash(link) === pageId) {
        link.classList.add('active');
      }
    });
    this.pages.forEach(page => {
      page.style.display = 'none';
    });
    document.getElementById(pageId).style.display = "block";
  }
  getHash(link) {
    return link.href.split("#")[1];
  }
}
exports.default = Navigation;

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"5gA8y":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}],"1PYKt":[function(require,module,exports) {
// Reference from from Rob Dongas class tutorial walkthrough
//Define Variables
const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button")
var taskInput = document.getElementById("taskInput");

var doIt = document.getElementById("do-it");
var schedule = document.getElementById("schedule");
var relegate = document.getElementById("relegate");
var dontDo = document.getElementById("dont-do");

let tasklist;

var dueDateInput = document.getElementById("dueDateInput");
var completionTimeInput = document.getElementById("completionTimeInput");
var estimatedTimeInput = document.getElementById("estimatedTimeInput");
var priorityInput = document.getElementById("priorityInput");

form.addEventListener("submit", function(event){
    event.preventDefault();
    let task = taskInput.value;
    let dueDate = dueDateInput.value;
    let completionTime = completionTimeInput.value;
    let estimatedTime = estimatedTimeInput.value;
    let priorityRating = priorityInput.options[priorityInput.selectedIndex].value;
    if (task) {
        addTask(task, dueDate, estimatedTime, priorityRating, completionTime, false); 
    }
})

var taskListArray = [];

function addTask(taskDescription, dueDate, estimatedTime, priorityRating, completionTime, completionStatus) {
    let d = new Date();
    let dateCreated = d.getFullYear();
    let task = {  
      // this id is going to be a way we can link our tasks inside the array to the task that is going to display on the screen
      // use the Date() field tiem. use the data.now function to return that date as a time stamp  
      id: Date.now(),
      taskDescription,
      dueDate,
      dateCreated,
      estimatedTime,
      completionTime,
      priorityRating,
      estimatedTime,
      completionStatus
    };
    taskListArray.push(task);
    console.log(taskListArray);
    renderTask(task);
  }

function renderTask(task){

    updateEmpty();

    var box = document.querySelector('.box')


    // Create LI
    let item = document.createElement('li');
    item.classList.add("itemDiv")
    // set this up as a html attribute, so we can create arbitrary html attributes for different data we install. 
    // we do this by using the set attribute function, for the name attribute we usually use the data pre fix followed by whatever type of data we're storing 
    item.setAttribute('data-id', task.id);
    item.innerHTML = "<p>" + task.taskDescription + "</p>" + "<p>" + task.dueDate + "</p>";
  
    box.appendChild(item);

    
    // Complete Button
    let completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check fa-xs"></i>';
    completedButton.classList.add("complete-btn");
    item.appendChild(completedButton);

    // Delete Button
    let delButton = document.createElement("button");
    delButton.innerHTML = '<i class="fas fa-trash fa-xs"></i>';
    delButton.classList.add('delete-btn');
    item.appendChild(delButton);


    // Event Listeners for DOM elements
    delButton.addEventListener("click", function(event){
      event.preventDefault();
      console.log(taskListArray);
      // create a code that is going to check the id then delete it from the array if necessary 
      let id = event.target.parentElement.getAttribute('data-id');
      // with that id we are going to compare it to the value of the array 
      // A tricky line that will allow us to search through an array and return in index, given an input that we provide which would be the value of the item in the array 
      let index = taskListArray.findIndex(task => task.id === Number(id));

      // remove that Item from the array all together once they click the delete button, we are going to do this in a function we will create called remove item from array 
      removeItemFromArray(taskListArray,index)
      console.log(taskListArray);
      updateEmpty();
      item.remove();
    })
    // Event Listeners for complete button
    completedButton.addEventListener("click", function(event){
      let item = event.target.parentElement;
      item.classList.toggle("completed");
    })  

// help and assist from Rob Dongas
    // Extract the due date and priority from the task
    // Compare the due date to current date
    // Conditionally assign the urgency based on date comparison
    // --> If (dueDate - currentDate) < X THEN URGENT
    // --> If (dueDate - currentDate) > X THEN NOT URGENT
    // assign the importance based on the priority rating

    let currentDate = new Date();
    let taskDueDate = new Date(task.dueDate);
    let taskPriority = task.priorityRating;

    let dateDiff = days_between(currentDate,taskDueDate);
    let urgencyValue = 5;
    

    if (dateDiff > urgencyValue) {
      console.log("Not urgent");
      if (taskPriority == "" || taskPriority == "Low") {
        console.log("Don't do");
        tasklist = dontDo;
      } else {
        console.log("Schedule");
        tasklist = schedule;
      }
    } else {
      console.log("Urgent");
      if (taskPriority == "" || taskPriority == "Low") {
        console.log("Relegate");
        tasklist = relegate;
      } else {
        console.log("Do it");
        tasklist = doIt;
      }
    }

    // Append 
    // which is finding the second item in the tasklist, which is the ul
    tasklist.children[1].appendChild(item);

    // Clear the input form
    form.reset();  
    updateEmpty();
  }

//  function to remove that frmom the array 
  function removeItemFromArray(arr, index) {
      if (index > -1){
          arr.splice(index, 1)
      }
      return arr;
  }

// Make sure this makes sense for the user, and it doesnt tell them they havent added tasks, when they clearly have 
// Help from Rob Dongas
  // which checks to see if the ul has any children. the childNodes property is an array, so you can actually check it's length 
  // then inside the if statement, you try to find the empty list just for that specific quadrant
function updateEmpty() {
  if (doIt.children[1].childNodes.length > 0) {
    doIt.querySelector('.emptyList').style.display = 'none';
  } else {
    doIt.querySelector('.emptyList').style.display = 'block';
  }

  if (schedule.children[1].childNodes.length > 0) {
    schedule.querySelector('.emptyList').style.display = 'none';
  } else {
    schedule.querySelector('.emptyList').style.display = 'block';
  }

  if (relegate.children[1].childNodes.length > 0) {
    relegate.querySelector('.emptyList').style.display = 'none';
  } else {
    relegate.querySelector('.emptyList').style.display = 'block';
  }

  if (dontDo.children[1].childNodes.length > 0) {
    dontDo.querySelector('.emptyList').style.display = 'none';
  } else {
    dontDo.querySelector('.emptyList').style.display = 'block';
  }
  
}


function days_between(date1, date2) {

  // The number of milliseconds in one day
  const ONE_DAY = 1000 * 60 * 60 * 24;

  // Calculate the difference in milliseconds
  const differenceMs = Math.abs(date1 - date2);

  // Convert back to days and return
  return Math.round(differenceMs / ONE_DAY);

}
// Function adapted from https://stackoverflow.com/questions/2627473/how-to-calculate-the-number-of-days-between-two-dates
},{}],"4P7Sk":[function(require,module,exports) {
// Adaped and learnt from https://www.youtube.com/watch?v=KlLdNSvmoKI&ab_channel=Coder%27sGyan

// Dictionary API and registered Key from https://dictionaryapi.com/products/index
let input = document.querySelector('#input');
let searchBtn = document.querySelector('#search');
let apiKey = '0f21b45e-307b-4c84-bdbf-aadcb1878967';
let notFound = document.querySelector('.not-found');
let defBox = document.querySelector('.def');
let synsBox = document.querySelector('.syns');
let loading= document.querySelector('.loading');

searchBtn.addEventListener('click', function(e){
    e.preventDefault();
    // clear data
    notFound.innerText = '';
    defBox.innerText = '';
    synsBox.innerText = '';

    // Get input data
    let word = input.value;

    // call API get data
    if(word === '') {
        alert('Word is required');
        return;
    }

    getData(word)
})

async function getData(word) {
    loading.style.display = 'block';

    // Ajax call 
    const response = await fetch(`https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${apiKey}`);
    const data =  await response.json();

    // if empty result 
    if (!data.length) {
        loading.style.display = 'none';
        notFound.innerText = ' No result found';
        return;
    }

    // If result is suggestions
    if (typeof data[0] === 'string') {
        loading.style.display = 'none';
        let heading = document.createElement('h5');
        heading.innerText = ' Did you mean?'
        notFound.appendChild(heading);
        data.forEach(element => {
            let suggestion = document.createElement('span');
            suggestion.classList.add('suggested');
            suggestion.innerText = element;
            notFound.appendChild(suggestion);
        })
        return;
    }

    console.log(data);

    // Result found
    loading.style.display = 'none';
    let definition = data[0].shortdef[0];
    defBox.innerText = definition;

    if (data[0].syns[0].pt[0][1]) {
        let synoymns = data[0].syns[0].pt[0][1];
        synsBox.innerText = synoymns;
    } else {
        synsBox.innerText = "Synonyms not found..";
        
    }

    console.log(data);
}
},{}],"i4jdM":[function(require,module,exports) {
// Reference - learnt from = Chris (2021). stopwatch using javascript - accurate and easy. [online] dev.to. Available at: https://dev.to/chrislemus/stopwatch-using-javascript-accurate-and-easy-5ado

const swTime = document.querySelector('.stopwatch')
const swMainButton = document.querySelector('#stopwatch-main-button')
const clearButton = document.querySelector('#stopwatch-reset-button')
const stopwatch = { elapsedTime: 0 }

swMainButton.addEventListener('click', () => {
  if (swMainButton.innerHTML === 'Start') {
    startStopwatch();
    swMainButton.innerHTML = 'Stop'
  } else {
    stopwatch.elapsedTime += Date.now() - stopwatch.startTime
    clearInterval(stopwatch.intervalId)
    swMainButton.innerHTML = 'Start'
  }
})

clearButton.addEventListener('click', () => {
  stopwatch.elapsedTime = 0
  stopwatch.startTime = Date.now()
  displayTime(0, 0, 0, 0)
})

function startStopwatch() {
  //reset start time
  stopwatch.startTime = Date.now();
  //run `setInterval()` and save id
  stopwatch.intervalId = setInterval(() => {
    //calculate elapsed time
    const elapsedTime = Date.now() - stopwatch.startTime + stopwatch.elapsedTime
    //calculate different time measurements based on elapsed time
    const milliseconds = parseInt((elapsedTime%1000)/10)
    const seconds = parseInt((elapsedTime/1000)%60)
    const minutes = parseInt((elapsedTime/(1000*60))%60)
    const hour = parseInt((elapsedTime/(1000*60*60))%24);
    //display time
    displayTime(hour, minutes, seconds, milliseconds)
  }, 100);
}

function displayTime(hour, minutes, seconds, milliseconds) {
  const leadZeroTime = [hour, minutes, seconds, milliseconds].map(swTime => swTime < 10 ? `0${swTime}` : swTime)
  swTime.innerHTML = leadZeroTime.join(':')
}


},{}],"4rDpH":[function(require,module,exports) {
// Reference - learnt from = nehasoni05 (2021). Pomodoro-Clock. [online] Github. Available at: https://github.com/nehasoni05/Pomodoro-Clock
var startBtn=document.getElementById("pomo-start-button");
var resetBtn=document.getElementById("pomo-reset-button");
var increaseSession=document.getElementById("plusSession");
var decreaseSession=document.getElementById("minusSession");
var increaseBreak=document.getElementById("plusBreak");
var decreaseBreak=document.getElementById("minusBreak");
var pauseBtn=document.getElementById("pomo-pause-button");
var continueBtn=document.getElementById("pomo-continue-button");
var heading=document.getElementById("pomo-text");
var timerName;
var count=0;

// Increase sessions
increaseSession.addEventListener("click",function(){
    var stime=document.getElementById("STIME");
    var btime=document.getElementById("BTIME").innerHTML;
    var disptime=document.getElementById("TIME").innerHTML;
    var changedisptime=document.getElementById("TIME");
    let timeArray = disptime.split(/[:]/);
    var min=parseInt(timeArray[0]);
    min=min+1;
    changedisptime.innerHTML=min+":00";
    stime.innerHTML=min+" min";
})

// Decrease sessions
decreaseSession.addEventListener("click",function(){
    var stime=document.getElementById("STIME");
    var disptime=document.getElementById("TIME").innerHTML;
    var changedisptime=document.getElementById("TIME");
    let timeArray = disptime.split(/[:]/);
    var min=parseInt(timeArray[0]);

    if(min>1)
    {
    min=min-1;
    }
     if(min<10)
     {
     changedisptime.innerHTML="0"+min+":00";    
     }
     else
    changedisptime.innerHTML=min+":00";
    stime.innerHTML=min+" min";
})

// Increase breaks
increaseBreak.addEventListener("click",function(){
    var btime=document.getElementById("BTIME");
    var breaktime=document.getElementById("BTIME").innerHTML;
    let timeArray = breaktime.split(/[ ]/);
    var min=parseInt(timeArray[0]);
    min=min+1;
    btime.innerHTML=min+" min";
})

// Decrease breaks
decreaseBreak.addEventListener("click",function(){
    var btime=document.getElementById("BTIME");
    var breaktime=document.getElementById("BTIME").innerHTML;
    let timeArray = breaktime.split(/[ ]/);
    var min=parseInt(timeArray[0]);
    if(min>1)
    min=min-1;
    btime.innerHTML=min+" min";
})

// start button event listener
    startBtn.addEventListener("click",function()
    {
    var SBTN=document.getElementById("SBTN");
    var PBTN=document.getElementById("PBTN");
    var CBTN=document.getElementById("CBTN");
    SBTN.style.display='none';
    CBTN.style.display='none';
    PBTN.style.display='block';
    //console.log(time);
    heading.innerHTML="Session Starts";
    increaseSession.disabled=true;
    decreaseSession.disabled=true;
    increaseBreak.disabled=true;
    decreaseBreak.disabled=true;
    startTimer();
    })

function startTimer()
{
    var presentTime=document.getElementById("TIME").innerHTML;
    var changedisptime=document.getElementById("TIME");
    var timeArray=presentTime.split(/[:]/);
    var min=checkMinute(parseInt(timeArray[0]-0));
    var s=parseInt(timeArray[1])-1;
    console.log(s);
    var sec=checkSeconds(s);

    if(sec==59)
    {
        min=min-1;
        if(min<10)
        min="0"+min;
    }
    changedisptime.innerHTML=min+":"+sec;

    if(min==00 && sec==00)
    {
    var SBTN=document.getElementById("SBTN");
    var PBTN=document.getElementById("PBTN");
    var CBTN=document.getElementById("CBTN");
    SBTN.style.display='block';
    CBTN.style.display='none';
    PBTN.style.display='none';
        breakTime();

        return;
    }
    timerName=setTimeout(startTimer,1000);
}

pauseBtn.addEventListener("click",function()
{
    clearTimeout(timerName);
    var SBTN=document.getElementById("SBTN");
    var PBTN=document.getElementById("PBTN");
    var CBTN=document.getElementById("CBTN");
    SBTN.style.display='none';
    CBTN.style.display='block';
    PBTN.style.display='none'; 
    heading.innerHTML="Session Paused";   

});
continueBtn.addEventListener("click",function()
{
    clearTimeout(timerName);
    var SBTN=document.getElementById("SBTN");
    var PBTN=document.getElementById("PBTN");
    var CBTN=document.getElementById("CBTN");
    SBTN.style.display='none';
    CBTN.style.display='none';
    PBTN.style.display='block'; 

    startTimer();   
    heading.innerHTML="Session Starts";
});

// Resets the pomodoro timer but i couldnt make it relaod only the div
// I tried document.getElementById("pomodoro-container").reload(); but it doesn't work.
// So i just left it to reset the whole page instead
resetBtn.addEventListener("click",function()
{
    window.location.reload();
})

function checkMinute(min)
{
    if(min<10)
    {
        min="0"+min;
    }
    return min;
}	
function checkSeconds(s)
{
    var sec=parseInt(s);
if (sec < 10 && sec >= 0) 
{
    sec = "0" + sec;
} 
  if (sec < 0)
   {
       sec = "59";
  }

console.log("return time"+sec);
return sec;
}    

// Break
function breakTime()
{
    var bMin=document.getElementById("BTIME").innerHTML;
    var changedisptime=document.getElementById("TIME");
    var timeArray=bMin.split(/[ ]/);
    var min=timeArray[0];
    changedisptime.innerHTML="0"+min+":00";
    count=count+1;
    heading.innerHTML="Break Time :)";
    document.querySelector('.line').style.background = 'blue';
    startBreak();
}
function startBreak()
{
    var presentTime=document.getElementById("TIME").innerHTML;
    var changedisptime=document.getElementById("TIME");
    var timeArray=presentTime.split(/[:]/);
    var min=checkMinute(parseInt(timeArray[0]-0));
    var s=parseInt(timeArray[1])-1;
    console.log(s);
    var sec=checkSeconds(s);

    if(sec==59)
    {
        min=min-1;
        if(min<10)
        min="0"+min;
    }
    changedisptime.innerHTML=min+":"+sec;
    // if session and breaks are done alert done message
    if(min==00 && sec==00)
    {
        heading.innerHTML="Start";
        document.querySelector('.line').style.background = 'green';
        clearTimeout(timerName);
        alert("Break Over.You can start your session again!");
        window.location.reload();
        return;
    }
    timerName=setTimeout(startBreak,1000);
}

},{}],"5PuhK":[function(require,module,exports) {
// Image used dowloaded from - https://i.scdn.co/image/ab67616d0000b273550b17c7a9cf638c9514f30d
// music-1 from - https://www.youtube.com/watch?v=palWMnxi4GU&list=RDjsWSx9eC31w&index=16&ab_channel=CafeMusicBGMchannelCafeMusicBGMchannelOfficialArtistChannel
// music-2 from - https://www.youtube.com/watch?v=jsWSx9eC31w&list=RDjsWSx9eC31w&index=1&ab_channel=CafeMusicBGMchannelCafeMusicBGMchannelOfficialArtistChannel
// music-3 from - https://www.youtube.com/watch?v=S4UQP600LyI&list=RDjsWSx9eC31w&index=10&ab_channel=CafeMusicBGMchannelCafeMusicBGMchannelOfficialArtistChannel
// music-4 from - https://www.youtube.com/watch?v=xJ3xwwLgcAU&list=RDjsWSx9eC31w&index=3&ab_channel=CafeMusicBGMchannelCafeMusicBGMchannelOfficialArtistChannel
// music-5 from - https://www.youtube.com/watch?v=MTW4CKVTZdA&list=RDjsWSx9eC31w&index=15&ab_channel=CafeMusicBGMchannelCafeMusicBGMchannelOfficialArtistChannel
// music-6 from - https://www.youtube.com/watch?v=NtK_ZsYVqgY&list=RDjsWSx9eC31w&index=12&ab_channel=CafeMusicBGMchannelCafeMusicBGMchannelOfficialArtistChannel
// downloaded youtube and convert to mp3 using - https://yt1s.com/en6

// I translated the song names to english
// The music player doesnt work on npm run dev - with error message "Uncaught (in promise) DOMException: The element has no supported sources."
// I know it works becuase i made the music player first in another vscode and it worked perfectly fine when I click go live without npm run dev. 
// But when I paste the code into the studbud file and ran the code with npm run dev it doesnt work :(
  // if you know the reason why can you please leave feedback or comment on why and how to make it work, because I want to put it in my portfolio so I want to make it work in the future :) thanks 
let allMusic = [
  {
    name: "A Town with an ocean View (Jazz Ver)",
    artist: "Cafe Music BGM Channel ",
    img: "music-1",
    src: "music-1"
  },
  {
    name: "Laputa (BossaNova ver)",
    artist: "Cafe Music BGM Channel",
    img: "music-2",
    src: "music-2"
  },
  {
    name: "Merry-Go-Round Of Life (Jazz Version)",
    artist: "Cafe Music BGM Channel",
    img: "music-3",
    src: "music-3"
  },
  {
    name: "My Neighbor Totoro (BossaNova ver)",
    artist: "Cafe Music BGM Channel",
    img: "music-4",
    src: "music-4"
  },
  {
    name: "Mother (BossaNova Ver)",
    artist: "Cafe Music BGM Channel",
    img: "music-5",
    src: "music-5"
  },
  {
    name: "Stroll (BossaNova Ver)",
    artist: "Cafe Music BGM Channel",
    img: "music-6",
    src: "music-6"
  },
];

// Reference and learnt from - https://dev.to/codingnepal/create-custom-music-player-in-javascript-2367

const wrapper = document.querySelector(".wrapper"),
musicImg = wrapper.querySelector(".img-area img"),
musicName = wrapper.querySelector(".song-details .name"),
musicArtist = wrapper.querySelector(".song-details .artist"),
playPauseBtn = wrapper.querySelector(".play-pause"),
prevBtn = wrapper.querySelector("#prev"),
nextBtn = wrapper.querySelector("#next"),
mainAudio = wrapper.querySelector("#main-audio"),
progressArea = wrapper.querySelector(".progress-area"),
progressBar = progressArea.querySelector(".progress-bar"),
musicList = wrapper.querySelector(".music-list"),
moreMusicBtn = wrapper.querySelector("#more-music"),
closemoreMusic = musicList.querySelector("#music-list-close");

let musicIndex = Math.floor((Math.random() * allMusic.length) + 1);
isMusicPaused = true;

window.addEventListener("load", ()=>{
  loadMusic(musicIndex);
  playingSong(); 
});

function loadMusic(indexNumb){
  musicName.innerText = allMusic[indexNumb - 1].name;
  musicArtist.innerText = allMusic[indexNumb - 1].artist;
  musicImg.src = `assets/images/${allMusic[indexNumb - 1].src}.jpg`;
  mainAudio.src = `assets/songs/${allMusic[indexNumb - 1].src}.mp3`;
}

//play music function
function playMusic(){
  wrapper.classList.add("paused");
  playPauseBtn.querySelector("i").innerText = "pause";
  mainAudio.play();
}

//pause music function
function pauseMusic(){
  wrapper.classList.remove("paused");
  playPauseBtn.querySelector("i").innerText = "play_arrow";
  mainAudio.pause();
}

//prev music function
function prevMusic(){
  musicIndex--; //decrement of musicIndex by 1
  //if musicIndex is less than 1 then musicIndex will be the array length so the last music play
  musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
  loadMusic(musicIndex);
  playMusic();
  playingSong(); 
}

//next music function
function nextMusic(){
  musicIndex++; //increment of musicIndex by 1
  //if musicIndex is greater than array length then musicIndex will be 1 so the first music play
  musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
  loadMusic(musicIndex);
  playMusic();
  playingSong(); 
}

// play or pause button event
playPauseBtn.addEventListener("click", ()=>{
  const isMusicPlay = wrapper.classList.contains("paused");
  //if isPlayMusic is true then call pauseMusic else call playMusic
  isMusicPlay ? pauseMusic() : playMusic();
  playingSong();
});

//prev music button event
prevBtn.addEventListener("click", ()=>{
  prevMusic();
});

//next music button event
nextBtn.addEventListener("click", ()=>{
  nextMusic();
});

// update progress bar width according to music current time
mainAudio.addEventListener("timeupdate", (e)=>{
  const currentTime = e.target.currentTime; //getting playing song currentTime
  const duration = e.target.duration; //getting playing song total duration
  let progressWidth = (currentTime / duration) * 100;
  progressBar.style.width = `${progressWidth}%`;

  let musicCurrentTime = wrapper.querySelector(".current-time"),
  musicDuartion = wrapper.querySelector(".max-duration");
  mainAudio.addEventListener("loadeddata", ()=>{
    // update song total duration
    let mainAdDuration = mainAudio.duration;
    let totalMin = Math.floor(mainAdDuration / 60);
    let totalSec = Math.floor(mainAdDuration % 60);
    if(totalSec < 10){ //if sec is less than 10 then add 0 before it
      totalSec = `0${totalSec}`;
    }
    musicDuartion.innerText = `${totalMin}:${totalSec}`;
  });
  // update playing song current time
  let currentMin = Math.floor(currentTime / 60);
  let currentSec = Math.floor(currentTime % 60);
  if(currentSec < 10){ //if sec is less than 10 then add 0 before it
    currentSec = `0${currentSec}`;
  }
  musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
});

// update playing song currentTime on according to the progress bar width
progressArea.addEventListener("click", (e)=>{
  let progressWidth = progressArea.clientWidth; //getting width of progress bar
  let clickedOffsetX = e.offsetX; //getting offset x value
  let songDuration = mainAudio.duration; //getting song total duration
  
  mainAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
  playMusic(); //calling playMusic function
  playingSong();
});

//change loop, shuffle, repeat icon onclick
const repeatBtn = wrapper.querySelector("#repeat-plist");
repeatBtn.addEventListener("click", ()=>{
  let getText = repeatBtn.innerText; //getting this tag innerText
  switch(getText){
    case "repeat":
      repeatBtn.innerText = "repeat_one";
      repeatBtn.setAttribute("title", "Song looped");
      break;
    case "repeat_one":
      repeatBtn.innerText = "shuffle";
      repeatBtn.setAttribute("title", "Playback shuffled");
      break;
    case "shuffle":
      repeatBtn.innerText = "repeat";
      repeatBtn.setAttribute("title", "Playlist looped");
      break;
  }
});

//code for what to do after song ended
mainAudio.addEventListener("ended", ()=>{
  // we'll do according to the icon means if user has set icon to
  // loop song then we'll repeat the current song and will do accordingly
  let getText = repeatBtn.innerText; //getting this tag innerText
  switch(getText){
    case "repeat":
      nextMusic(); //calling nextMusic function
      break;
    case "repeat_one":
      mainAudio.currentTime = 0; //setting audio current time to 0
      loadMusic(musicIndex); //calling loadMusic function with argument, in the argument there is a index of current song
      playMusic(); //calling playMusic function
      break;
    case "shuffle":
      let randIndex = Math.floor((Math.random() * allMusic.length) + 1); //genereting random index/numb with max range of array length
      do{
        randIndex = Math.floor((Math.random() * allMusic.length) + 1);
      }while(musicIndex == randIndex); //this loop run until the next random number won't be the same of current musicIndex
      musicIndex = randIndex; //passing randomIndex to musicIndex
      loadMusic(musicIndex);
      playMusic();
      playingSong();
      break;
  }
});

//show music list onclick of music icon
moreMusicBtn.addEventListener("click", ()=>{
  musicList.classList.toggle("show");
});
closemoreMusic.addEventListener("click", ()=>{
  moreMusicBtn.click();
});

const ulTag = wrapper.querySelector("ul");
// let create li tags according to array length for list
for (let i = 0; i < allMusic.length; i++) {
  //let's pass the song name, artist from the array
  let liTag = `<li li-index="${i + 1}">
                <div class="music-list-row">
                  <span>${allMusic[i].name}</span>
                  <p>${allMusic[i].artist}</p>
                </div>
                <span id="${allMusic[i].src}" class="audio-duration">3:40</span>
                <audio class="${allMusic[i].src}" src="songs/${allMusic[i].src}.mp3"></audio>
              </li>`;
  ulTag.insertAdjacentHTML("beforeend", liTag); //inserting the li inside ul tag

  let liAudioDuartionTag = ulTag.querySelector(`#${allMusic[i].src}`);
  let liAudioTag = ulTag.querySelector(`.${allMusic[i].src}`);
  liAudioTag.addEventListener("loadeddata", ()=>{
    let duration = liAudioTag.duration;
    let totalMin = Math.floor(duration / 60);
    let totalSec = Math.floor(duration % 60);
    if(totalSec < 10){ //if sec is less than 10 then add 0 before it
      totalSec = `0${totalSec}`;
    };
    liAudioDuartionTag.innerText = `${totalMin}:${totalSec}`; //passing total duation of song
    liAudioDuartionTag.setAttribute("t-duration", `${totalMin}:${totalSec}`); //adding t-duration attribute with total duration value
  });
}

//play particular song from the list onclick of li tag
function playingSong(){
  const allLiTag = ulTag.querySelectorAll("li");
  
  for (let j = 0; j < allLiTag.length; j++) {
    let audioTag = allLiTag[j].querySelector(".audio-duration");
    
    if(allLiTag[j].classList.contains("playing")){
      allLiTag[j].classList.remove("playing");
      let adDuration = audioTag.getAttribute("t-duration");
      audioTag.innerText = adDuration;
    }

    //if the li tag index is equal to the musicIndex then add playing class in it
    if(allLiTag[j].getAttribute("li-index") == musicIndex){
      allLiTag[j].classList.add("playing");
      audioTag.innerText = "Playing";
    }

    allLiTag[j].setAttribute("onclick", "clicked(this)");
  }
}

//particular li clicked function
function clicked(element){
  let getLiIndex = element.getAttribute("li-index");
  musicIndex = getLiIndex; //updating current song index with clicked li index
  loadMusic(musicIndex);
  playMusic();
  playingSong();
}
},{}]},["27Rzb","4OAbU"], "4OAbU", "parcelRequirec526")

//# sourceMappingURL=index.8a5bc16d.js.map
