import * as Yup from 'yup';

const schema = Yup.object().shape({
  banner_id: Yup.number()
    .transform(value => (!value ? undefined : value))
    .required('Banner é obrigatório'),
  title: Yup.string().required('Titlo é obrigatório'),
  description: Yup.string().required('Descrição é obrigatório'),
  date: Yup.string().required('Data é obrigatório'),
  location: Yup.string().required('Localização é obrigatório'),
});

export default schema;
