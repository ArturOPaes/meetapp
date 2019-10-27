import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      title: Yup.string()
        .max(55, 'Title can not exceed 55 characters.')
        .required('Title can not be empty!'),
      description: Yup.string()
        .max(650, 'Description must have a maximum of 650 characters.')
        .required('Description can not be empty!'),
      location: Yup.string()
        .max(150, 'Location can not exceed 150 characters!')
        .required('Location can not be empty!'),
      date: Yup.date('Invalid date!').required('Date can not be empty.'),
    });

    await schema.isValid(req.body, { abortEarly: false });

    return next();
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'Validation fails', messages: err.inner });
  }
};
