export const generateBasicValidation = (name: string) => {
  const data = {
    required: `${name} is required.`,
  };

  return data;
};
