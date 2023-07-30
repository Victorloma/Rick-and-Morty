"use strict";
(() => {
var exports = {};
exports.id = 827;
exports.ids = [827];
exports.modules = {

/***/ 2399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: ./evo-task-data.json
var evo_task_data = __webpack_require__(4472);
;// CONCATENATED MODULE: ./stats/stats.ts

// top 3 characters with most episodes
const top3Characters = evo_task_data.sort((a, b)=>b.episode.length - a.episode.length).slice(0, 3);
// most assigned status
const { alive, dead, unknown } = evo_task_data.reduce((acc, curr)=>{
    switch(curr.status){
        case "Alive":
            acc.alive++;
            break;
        case "Dead":
            acc.dead++;
            break;
        default:
            acc.unknown++;
    }
    return acc;
}, {
    alive: 0,
    dead: 0,
    unknown: 0
});
const mostAssignedStatus = Math.max(alive, dead, unknown) === alive ? "Alive" : Math.max(alive, dead, unknown) === dead ? "Dead" : "Unknown";
// most popular human location
const humans = evo_task_data.filter((character)=>character.species === "Human");
const humansPerLocation = humans.reduce((acc, curr)=>{
    acc[curr.location.name] === undefined ? acc[curr.location.name] = 1 : acc[curr.location.name]++;
    return acc;
}, {});
const popularHumanLocation = Object.entries(humansPerLocation).sort((a, b)=>b[1] - a[1])[0][0];
// species with most males
const males = evo_task_data.filter((character)=>character.gender === "Male");
const malesPerSpecies = males.reduce((acc, curr)=>{
    acc[curr.species] === undefined ? acc[curr.species] = 1 : acc[curr.species]++;
    return acc;
}, {});
const mostMales = Object.entries(malesPerSpecies).sort((a, b)=>b[1] - a[1])[0][0];

;// CONCATENATED MODULE: ./pages/api/statistics/index.ts

function handler(req, res) {
    const statistics = {
        top3Characters: top3Characters,
        mostAssignedStatus: mostAssignedStatus,
        popularHumanLocation: popularHumanLocation,
        mostMales: mostMales
    };
    res.status(200).send(statistics);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [472], () => (__webpack_exec__(2399)));
module.exports = __webpack_exports__;

})();