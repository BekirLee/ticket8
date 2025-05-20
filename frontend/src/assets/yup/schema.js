import * as yup from 'yup'

let schemaProduct = yup.object({
    name: yup.string().required(),
    image: yup.string().required(),
    price: yup.number().required(),
    description: yup.string().required(),
})

export default schemaProduct;