import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .min(2, "Nome deve conter ao menos 2 caracteres")
    .required("Prencha o formulário com o nome"),
  email: yup
    .string()
    .email("Email deve ser um email válido")
    .required("Preencha o email corretamente"),
});
