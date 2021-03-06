import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    // eslint-disable-next-line no-throw-literal
    if (Object.keys(req.body).length === 0) throw 'Body missing';

    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string()
        .email('E-mail is invalid')
        .required('e-mail is a required field'),
      oldPassword: Yup.string()
        .min(6, 'Password must be 6-10 characters')
        .max(10, 'Password must be 6-10 characters'),
      password: Yup.string()
        .min(6, 'Password must be 6-10 characters')
        .max(10, 'Password must be 6-10 characters')
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required('You must to send the Password') : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password
          ? field
              .required('You must to confirm the password')
              .oneOf([Yup.ref('password')])
          : field
      ),
    });

    await schema.isValid(req.body, { abortEarly: false });

    return next();
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'Validation fails', messages: err.inner });
  }
};
