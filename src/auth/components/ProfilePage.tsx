'use client'

import { useState } from 'react'
import {
  Button,
  FontsEnum,
  Form,
  InputComponentsEnum,
  Label,
  SizesEnum,
  TabItems,
  VariantsEnum,
} from '@/ui'

import { useAuthLogout } from '../hooks/useAuthLogout'

export const ProfilePage = () => {
  const PROFILE_TABS = {
    profile: 'Profile',
    myOrders: 'My Orders',
    history: 'Search History',
    favorites: 'Favorites',
    changePassword: 'Change Password',
    privacy: 'Privacy Settings',
  }

  const POST_REVIEW_PRIVACY_OPTIONS = [
    { label: 'Everybody can see my reviews or posts', value: 'public' },
    {
      label: 'Only people I follow and follow me can see my reviews or posts',
      value: 'friends',
    },
    { label: 'Nobody can see my reviews or posts', value: 'private' },
  ]
  const PRONOUNS = ['He/Him', 'She/Her', 'They/Them', 'Other']

  const tabOptions = Object.values(PROFILE_TABS).map(tab => ({
    label: tab,
    value: tab,
  }))

  const [tab, setTab] = useState<string>(PROFILE_TABS.profile)

  const handleTabChange = (value: any) => {
    setTab(value)
  }

  const { handleLogout } = useAuthLogout()

  return (
    <div className='container'>
      {/* <Breadcrumb
        options={[
          {
            href: PAGE_PATHS.home,
            label: 'home',
          },
          {
            href: PAGE_PATHS.profile,
            label: 'Profile Settings',
          },
        ]}
      /> */}
      <Label label='Profile Settings' font={FontsEnum.Label40} />

      <TabItems options={tabOptions} onChange={handleTabChange} value={tab} />
      <Form
        inputs={[
          {
            name: 'avatar',
            component: InputComponentsEnum.Uploader,
          },
          {
            name: 'username',
            component: InputComponentsEnum.Text,
            placeholder: 'username',
          },
          {
            name: 'Your wine experience',
            component: InputComponentsEnum.Textarea,
          },
          {
            name: 'dob',
            component: InputComponentsEnum.Date,
            multiple: false,
          },
          {
            name: 'pronouns',
            component: InputComponentsEnum.Select,
            multiple: false,
            options: PRONOUNS.map(pronoun => ({
              label: pronoun,
              value: pronoun,
            })),
          },
          {
            name: 'privacy',
            component: InputComponentsEnum.Select,
            multiple: false,
            options: POST_REVIEW_PRIVACY_OPTIONS,
          },
        ]}
      />
      <Button label='Save Changes' />
      <Button
        size={SizesEnum.S}
        onPress={handleLogout}
        label='logout'
        variant={VariantsEnum.Text}
      />
    </div>
  )
}
