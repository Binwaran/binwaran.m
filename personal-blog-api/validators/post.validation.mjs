import { body, validationResult } from "express-validator";

export const validatePost = [
  body("title").isString().withMessage("Title must be a string"),
  body("image").isString().withMessage("Image must be a string"),
  body("category_id").isNumeric().withMessage("Category ID must be a number"),
  body("description").isString().withMessage("Description must be a string"),
  body("content").isString().withMessage("Content must be a string"),
  body("status_id").isNumeric().withMessage("Status ID must be a number"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
