import { useState } from 'react'
import {
  Button,
  Form,
  InputComponentsEnum,
  SCHEMAS,
  type FormInput,
  type FormSchemaType,
} from '@/ui'
import { StyleSheet, Text, View } from 'react-native'

import { Story } from './Story'

export const FormStory = () => {
  const [isValid, setIsValid] = useState(false)
  const [formData] = useState({
    first_name: 'Farid',
    last_name: 'Shahidi',
    bio: 'This is my own bio',
    gender: 'male',
    salary: 123000,
    job: 'IT',
    role: '',
    accept_term_and_conditions: ['accept'],
    email: 'Dear customer manager, ....',
    family: [{ first_name: 'Farid', last_name: 'Shahidi' }],
  })

  const TEST_SCHEMA: FormSchemaType = SCHEMAS.wrapper({
    first_name: SCHEMAS.requiredString.min(6),
    last_name: SCHEMAS.requiredString.min(6),
    bio: SCHEMAS.requiredString,
    gender: SCHEMAS.mixed(['male']),
    role: SCHEMAS.mixed(['admin']),
  })

  const onChangeInput = (formData: any) => {
    console.log(formData)
  }

  const inputs: FormInput[] = [
    {
      name: 'first_name',
      label: 'First name',
      columns: 6,
      component: InputComponentsEnum.Text,
    },
    {
      name: 'last_name',
      label: 'Last name',
      columns: 6,
      component: InputComponentsEnum.Text,
      placeholder: 'Last name (with placeholder, required, debounce time)',
      required: true,
    },
    {
      name: 'salary',
      label: 'Salary',
      columns: 12,
      component: InputComponentsEnum.Text,
      unit: '$',
      keyboardType: 'numeric',
    },
    {
      name: 'bio',
      columns: 12,
      component: InputComponentsEnum.Textarea,
    },
    {
      name: 'role',
      columns: 12,
      component: InputComponentsEnum.Select,
      multiple: false,
      options: [
        {
          value: 'admin',
          label: 'Admin',
        },
        {
          value: 'guest',
          label: 'Guest',
        },
        {
          value: '3',
          label: 'User',
        },
      ],
    },
    {
      name: 'birth_date',
      columns: 12,
      component: InputComponentsEnum.Date,
    },
    {
      name: 'gender',
      columns: 12,
      component: InputComponentsEnum.RadioList,
      options: [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
      ],
    },
    {
      name: 'accept_term_and_conditions',
      columns: 12,
      component: InputComponentsEnum.Checkbox,
    },
    {
      name: 'Are you happy?',
      columns: 12,
      component: InputComponentsEnum.Toggle,
    },
    {
      name: 'family',
      label: 'Add new family members',
      noItemsLabel: 'No family member added yet',
      columns: 12,
      component: InputComponentsEnum.Group,
      inputs: [
        {
          name: 'first_name',
          label: 'First name',
          columns: 12,
          component: InputComponentsEnum.Text,
        },
        {
          name: 'last_name',
          label: 'Last name',
          columns: 12,
          component: InputComponentsEnum.Text,
        },
      ],
    },
  ]

  const handleSubmit = () => {
    console.log('submitted', formData)
  }

  return (
    <Story>
      <Text style={styles.h4}>Form</Text>
      <View>
        <Form
          inputs={inputs}
          schema={TEST_SCHEMA}
          defaultValues={formData}
          onChangeInput={onChangeInput}
          setIsValid={setIsValid}
          showErrorOnMount={true}
          showValidationBar={false}
        />
        <Button onPress={handleSubmit} label='Submit' disabled={!isValid} />
      </View>
    </Story>
  )
}

const styles = StyleSheet.create({
  h4: { fontSize: 18, fontWeight: '600' },
})
