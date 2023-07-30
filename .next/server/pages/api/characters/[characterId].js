"use strict";
(() => {
var exports = {};
exports.id = 881;
exports.ids = [881];
exports.modules = {

/***/ 4811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _evo_task_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4472);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function handler(req, res) {
    const characterData = _evo_task_data_json__WEBPACK_IMPORTED_MODULE_0__.find((character)=>character.id === Number(req.query.characterId));
    characterData ? res.status(200).send(characterData) : res.status(404).send(undefined);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [472], () => (__webpack_exec__(4811)));
module.exports = __webpack_exports__;

})();