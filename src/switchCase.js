import { NeutralOperation, stubFalse } from './utils/_internals';
import Response from './utils/ResponseMonad';

const switchCase = (...validators) => (value) => {
  for (let index = 0; index < validators.length; index += 1) {
    const current = validators[index];
    const currentResult = current(value);

    if (currentResult !== NeutralOperation) {
      const response = Response.of(currentResult);

      if (response.valid) {
        return response.emit();
      }
    }
  }

  return stubFalse();
};

export default switchCase;
