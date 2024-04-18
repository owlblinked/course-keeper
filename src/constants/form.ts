import { generateBasicValidation } from "../helpers/generateValidationError";
import { FormField } from "../types/form";

const URL_REGEX =
  /^(?:(?:https?|ftp):\/\/)?(?:www\.)?[a-z0-9-]+(?:\.[a-z0-9-]+)+[^\s]*$/i;

export const ADD_COURSE_FIELDS: FormField[] = [
  {
    label: "Name of course",
    id: "name",
    type: "text",
    validation: generateBasicValidation("Name"),
  },
  {
    label: "Link",
    id: "url",
    type: "text",
    validation: {
      ...generateBasicValidation("Link"),
      pattern: {
        value: URL_REGEX,
        message: "Url is incorrect",
      },
    },
  },
  {
    label: "When would you like to start?",
    id: "startDate",
    type: "date",
    validation: generateBasicValidation("Start date"),
  },
  {
    label: "When course will be expired?",
    id: "expireDate",
    type: "date",
    validation: generateBasicValidation("Expire date"),
  },
  {
    label: "Duration in hours",
    id: "duration",
    type: "number",
    validation: {
      ...generateBasicValidation("Duration"),
      min: {
        value: 1,
        message: "Duration should be more than 0",
      },
    },
  },
];
