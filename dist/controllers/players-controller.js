"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/controllers/players-controller.ts
var players_controller_exports = {};
__export(players_controller_exports, {
  getPlayer: () => getPlayer
});
module.exports = __toCommonJS(players_controller_exports);

// src/utils/http-helper.ts
var ok = (data) => __async(void 0, null, function* () {
  return {
    statusCode: 200,
    body: data
  };
});
var noContent = () => __async(void 0, null, function* () {
  return {
    statusCode: 204,
    body: "no results found"
  };
});

// src/services/players-service.ts
var getPlayerData = () => __async(void 0, null, function* () {
  const data = null;
  let response = null;
  if (data) {
    response = yield ok(data);
  } else {
    response = yield noContent();
  }
  return response;
});

// src/controllers/players-controller.ts
var getPlayer = (req, res) => __async(void 0, null, function* () {
  const httpResponse = yield getPlayerData();
  res.status(httpResponse.statusCode).json(httpResponse.body);
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getPlayer
});
