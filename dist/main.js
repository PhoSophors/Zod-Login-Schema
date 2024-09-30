"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLoginInput = void 0;
// main.ts
const zod_1 = require("zod");
const authSchema_1 = require("./authSchema");
const validateLoginInput = (input) => {
    try {
        const result = authSchema_1.loginSchema.parse(input);
        console.log('Login successfully..!', result);
        return result;
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            console.error('Login Error: ', error.errors);
            return null;
        }
        else {
            console.error('Undefined Error: ', error);
            throw error;
        }
    }
};
exports.validateLoginInput = validateLoginInput;
const emailInput = {
    email: "sophors.pho@tovtrip.com",
    password: "Tovtrip_2204"
};
const phoneInput = {
    countryCode: "+855",
    phone: "000012390873",
    password: "Pass12111"
};
(0, exports.validateLoginInput)(emailInput);
(0, exports.validateLoginInput)(phoneInput);
