import { TypeWithKey } from '../types/models/typeWithKe';
export const getValidationError = (code: any) => {
  const validation: TypeWithKey<string> = {
    ERR_NETWORK: 'Network error, please try again',
  };

  return validation[code]
} 