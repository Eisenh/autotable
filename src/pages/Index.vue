/* eslint-disable object-curly-newline */
<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >
    <EasyTable v-bind="easyTableProps" />
  </q-page>
</template>

<script>
var rows = [
  {
    title: 'Mathematica',
    subject: 'We will look at Mathematica √/%^×-+÷',
    img:
      'https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=160',
    grade: 90000,
    passing: true,
    created: new Date(),
    classes: [{ label: 'One', value: '1' }]
  },
  {
    title: 'Films',
    subject: 'We will look at the split of the Films √/%^×-+÷',
    img:
      'https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=160',
    grade: 80000,
    passing: false,
    created: new Date('2020/01/01'),
    classes: [{ label: 'One', value: '1' }]
  },
  {
    title: 'Winds',
    subject: 'We will look at the north of the Winds √/%^×-+÷',
    img:
      'https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=160',
    grade: 120000,
    passing: false,
    created: new Date(),
    classes: [{ label: 'Two', value: '2' }]
  },
  {
    title: 'Apps',
    topic: 'hotdog',
    subject: 'We will look at Apps √/%^×-+÷',
    img:
      'https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=160',
    grade: 25,
    passing: true,
    created: new Date('1990-01-01'),
    classes: [
      { label: 'One', value: '1' },
      { label: 'Two', value: '2' }
    ]
  }
]

var easyTableProps = {
  title: 'My Lessons',
  rows,
  schemaColumns: [
    {
      id: 'title',
      label: 'Lesson Title',
      component: 'QInput'
    },
    {
      id: 'subject',
      label: 'Subject',
      component: 'QInput'
    },
    {
      id: 'img',
      label: 'Image',
      component: 'QImg',
      mode: 'view',
      evaluatedProps: ['src'],
      internalErrors: true,
      // component props:
      src: val => val
    },
    {
      id: 'grade',
      label: 'Grade',
      component: 'QInput',
      // component props:
      type: 'number'
    },
    {
      id: 'passing',
      label: 'Passing',
      component: 'QToggle',
      default: false
    },
    {
      id: 'created',
      label: 'Created at',
      component: 'QInput',
      parseInput: val => new Date(val),
      dateFormat: 'YYYY/MM/DD',
      valueType: 'date',
      // component props:
      mask: '####/##/##',
      placeholder: 'YYYY/MM/DD'
    },
    {
      id: 'classes',
      label: 'Classes',
      component: 'QSelect',
      // component props:
      multiple: true,
      options: [
        { label: 'One', value: '1' },
        { label: 'Two', value: '2' },
        { label: 'Three', value: '3' }
      ]
    }
  ],
  get schemaGrid () {
    return this.schemaColumns
  }
}
console.log(easyTableProps)

var newRow =
  {
    title: 'Computers',
    topic: 'hardware',
    subject: 'We will look at Computers ',
    img:
      'https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=160',
    grade: 0,
    passing: false,
    created: new Date(),
    classes: [{ label: 'One', value: '1' }]
  }

easyTableProps.rows.data = easyTableProps.rows.push(newRow)
console.log(easyTableProps)
export default {
  name: 'PageIndex',
  data () {
    return {
      easyTableProps
    }
  }
}

</script>
