module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst config = {\n  env: \"development\" || false,\n  port: process.env.PORT || 4000,\n  jwtSecret: process.env.JWT_SECRET || \"gdjh47rniof87gfjdnbgjbvh36fjbew4r7fnmbHI8rj0hygf\",\n  // mongoUri: process.env.MONGODB_URI ||\n  //   process.env.MONGO_HOST ||\n  //   'mongodb://' + (process.env.IP || 'localhost') + ':' +\n  //   (process.env.MONGO_PORT || '27017') +\n  //   '/kiriikou-db',\n  mongoUri: \"mongodb+srv://Phinehas:Phinehas86@cluster0.1gctm.mongodb.net/kiriikou-ecommerce?retryWrites=true&w=majority\",\n  stripe_connect_test_client_id: \"\",\n  stripe_test_secret_key: \"\",\n  stripe_test_api_key: \"\",\n  sendgrid_api_key: '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',\n  email_address: 'info@kiriikou.com',\n  SENDGRID_USERNAME: 'lampteyphinehas70@gmail.com',\n  SENDGRID_PASSWORD: 'phinehaslamptey86',\n  flutterwave_secret_key: \"FLWSECK-9a66b5d4bdc1cd7843ebcea676538b4d-X\",\n  flutterwave_public: \"FLWPUBK-eafd569ec9e65902a56bc2b7e054c863-X\"\n};\nconst _default = config;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(config, \"config\", \"C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\config\\\\config.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\config\\\\config.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./config/config.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\server\\\\express.js: Identifier 'config' has already been declared (27:7)\\n\\n\\u001b[0m \\u001b[90m 25 | \\u001b[39m\\u001b[36mimport\\u001b[39m \\u001b[33mMainRouter\\u001b[39m from \\u001b[32m'./../client/MainRouter'\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 26 | \\u001b[39m\\u001b[36mimport\\u001b[39m {  \\u001b[33mStaticRouter\\u001b[39m \\u001b[33m,\\u001b[39m \\u001b[33mSwitch\\u001b[39m} from \\u001b[32m'react-router-dom'\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 27 | \\u001b[39m\\u001b[36mimport\\u001b[39m config from \\u001b[32m'./../config/config'\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m       \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 28 | \\u001b[39m\\u001b[36mimport\\u001b[39m { \\u001b[33mServerStyleSheets\\u001b[39m\\u001b[33m,\\u001b[39m \\u001b[33mThemeProvider\\u001b[39m } from \\u001b[32m'@material-ui/styles'\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 29 | \\u001b[39m\\u001b[36mimport\\u001b[39m theme from \\u001b[32m'./../client/theme'\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 30 | \\u001b[39m\\u001b[0m\\n    at Object._raise (C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:748:17)\\n    at Object.raiseWithData (C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:741:17)\\n    at Object.raise (C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:735:17)\\n    at ScopeHandler.checkRedeclarationInScope (C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:4919:12)\\n    at ScopeHandler.declareName (C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:4885:12)\\n    at Object.checkLVal (C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9590:24)\\n    at Object.parseImportSpecifierLocal (C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13133:10)\\n    at Object.maybeParseDefaultImportSpecifier (C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13235:12)\\n    at Object.parseImport (C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13098:31)\\n    at Object.parseStatementContent (C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11776:27)\\n    at Object.parseStatement (C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11676:17)\\n    at Object.parseBlockOrModuleBlockBody (C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12258:25)\\n    at Object.parseBlockBody (C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12249:10)\\n    at Object.parseTopLevel (C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11607:10)\\n    at Object.parse (C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13415:10)\\n    at parse (C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13468:38)\\n    at parser (C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\parser\\\\index.js:54:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:99:38)\\n    at normalizeFile.next (<anonymous>)\\n    at run (C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\index.js:31:50)\\n    at run.next (<anonymous>)\\n    at Function.transform (C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transform.js:27:41)\\n    at transform.next (<anonymous>)\\n    at step (C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\node_modules\\\\gensync\\\\index.js:261:32)\\n    at C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\node_modules\\\\gensync\\\\index.js:273:13\\n    at async.call.result.err.err (C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\node_modules\\\\gensync\\\\index.js:223:11)\");\n\n//# sourceURL=webpack:///./server/express.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./express */ \"./server/express.js\");\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io */ \"socket.io\");\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_4__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nconst {\n  addUser,\n  getUser,\n  getUsersInChat,\n  removeUser\n} = __webpack_require__(/*! ./users */ \"./server/users.js\"); // Connection URL\n\n\nmongoose__WEBPACK_IMPORTED_MODULE_2___default.a.Promise = global.Promise;\nmongoose__WEBPACK_IMPORTED_MODULE_2___default.a.connect(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mongoUri, {\n  useNewUrlParser: true,\n  useCreateIndex: true,\n  useUnifiedTopology: true,\n  useFindAndModify: true\n});\nmongoose__WEBPACK_IMPORTED_MODULE_2___default.a.connection.on('error', () => {\n  throw new Error(`unable to connect to database: ${_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mongoUri}`);\n});\nconst server = http__WEBPACK_IMPORTED_MODULE_3___default.a.createServer(_express__WEBPACK_IMPORTED_MODULE_1___default.a);\nconst io = socket_io__WEBPACK_IMPORTED_MODULE_4___default()(server);\nio.on('connection', socket => {\n  socket.on('join', ({\n    name,\n    room\n  }, callback) => {\n    const {\n      error,\n      user\n    } = addUser({\n      id: socket.id,\n      name,\n      room\n    });\n    if (error) return callback(error);\n    socket.emit('message', {\n      user: 'admin',\n      text: `Hello , welcome to Kiriikou Chat Support`\n    });\n    socket.broadcast.to(user.room).emit('message', {\n      user: 'admin',\n      text: `A new user has joined`\n    });\n    socket.join(user.room);\n    callback();\n  });\n  socket.on('sendMessage', (message, callback) => {\n    const user = getUser(socket.id);\n    io.to(user).emit('message', {\n      user: user.name,\n      text: message\n    });\n    callback();\n  });\n  socket.on('disconnect', () => {\n    console.log('User left');\n  });\n});\nserver.listen(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port, err => {\n  if (err) {\n    console.log(err);\n  }\n\n  console.info('Server started on port %s.', _config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port);\n});\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(server, \"server\", \"C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\server\\\\server.js\");\n  reactHotLoader.register(io, \"io\", \"C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\server\\\\server.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./server/users.js":
/*!*************************!*\
  !*** ./server/users.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst users = [];\n\nconst addUser = ({\n  id,\n  room,\n  name\n}) => {\n  // name = name.trim().toLowerCase()\n  const existingUserId = users.find(user => user.room === room && user.name === name);\n\n  if (existingUserId) {\n    return {\n      error: 'name already taken'\n    };\n  }\n\n  const user = {\n    id,\n    name,\n    room\n  };\n  users.push(user);\n  return {\n    user\n  };\n};\n\nconst removeUser = id => {\n  const index = users.findIndex(user => user.id === id);\n\n  if (index !== -1) {\n    return users.splice(index, 1)[0];\n  }\n};\n\nconst getUser = id => users.find(user => user.id === id);\n\nconst getUsersInChat = room => users.filter(user => user.room === room);\n\nmodule.exports = {\n  addUser,\n  removeUser,\n  getUser,\n  getUsersInChat\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(users, \"users\", \"C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\server\\\\users.js\");\n  reactHotLoader.register(addUser, \"addUser\", \"C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\server\\\\users.js\");\n  reactHotLoader.register(removeUser, \"removeUser\", \"C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\server\\\\users.js\");\n  reactHotLoader.register(getUser, \"getUser\", \"C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\server\\\\users.js\");\n  reactHotLoader.register(getUsersInChat, \"getUsersInChat\", \"C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\server\\\\users.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/users.js?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./server/server.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! C:\\Users\\PHINEHAS\\Desktop\\Kiriikou-Main\\server\\server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_./server/server.js?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"socket.io\");\n\n//# sourceURL=webpack:///external_%22socket.io%22?");

/***/ })

/******/ });