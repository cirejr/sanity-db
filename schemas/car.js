export default {
  name: 'car',
  type: 'document',
  title: 'Car',
  fields: [
    {
      name: 'carName',
      type: 'string',
      title: 'Car Name',
    },
    {
      name: 'carImage',
      type: 'image',
      title: 'Car Image',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'brandImage',
      type: 'image',
      title: 'Brand Image',
    },
    {
      name: 'seats',
      type: 'number',
      title: 'Nombre of seats',
    },
    {
      name: 'pricing',
      type: 'string',
      title: 'Pricing',
    },
  ],
}
