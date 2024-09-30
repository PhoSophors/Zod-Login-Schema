
// main.ts
import { z } from 'zod'
import { loginSchema } from './authSchema';
import { LoginInput } from './authType';

export const validateLoginInput = (input: LoginInput) => {
  try {
    const result = loginSchema.parse(input);
    console.log('Login successfully..!', result);
    return result;

  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('Login Error: ', error.errors);
      return null;

    } else {
      console.error('Undefined Error: ', error)
      throw error;
    }
  }
}

/********** LOGIN WITH EMAIL ******** */
const emailInput = {
  email: "sophors.pho@tovtrip.com",
  password: "Tovtrip_2204"
};

/********** LOGIN WITH PHONE ******** */
const phoneInput = {
  countryCode: "+855",
  phone: "000012390873",
  password: "Pass12111"
};

validateLoginInput(emailInput);
validateLoginInput(phoneInput);