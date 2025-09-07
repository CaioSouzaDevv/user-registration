/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("{var content = document.getElementById('content');\nvar button = document.querySelector('button[id=\"add\"]');\nbutton.addEventListener('click', function (event) {\n    event.preventDefault(); // Impede o submit do formulário\n    addEmployee();\n});\nfunction addEmployee() {\n    var fullName = document.querySelector('#fullName');\n    var register = document.querySelector('#register');\n    var admin = document.querySelector('input[name=\"admin\"]:checked');\n    var active = document.querySelector('#active');\n    if (!content || !fullName || !register || !admin || !active) {\n        alert('Algum campo está faltando!');\n        return;\n    }\n    content.innerHTML += createLine(fullName.value, +register.value, admin.value, active.checked);\n}\nfunction createLine(fullName, register, admin, active) {\n    return \"\\n   \\n        \".concat(fullName, \"</br>\\n        \").concat(register, \"</br>\\n        \").concat(admin, \"</br>\\n        \").concat(active ? 'Sim' : 'Não', \"</br>\\n\\n    \");\n}\n\n\n//# sourceURL=webpack:///./src/index.ts?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;