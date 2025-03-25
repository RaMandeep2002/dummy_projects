"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const HOST = "localhost";
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).json({ err: "something went working!" });
});
app.listen(PORT, () => {
    console.log(`Server is listening on http://${HOST}:${PORT}`);
});
