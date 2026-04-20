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
import { View } from 'react-native'

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
    <View className='w-full max-w-5xl self-center px-4 py-6'>
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
      <View className='gap-5'>
        <Label label='Profile Settings' font={FontsEnum.Label40} />

        <TabItems options={tabOptions} onChange={handleTabChange} value={tab} />

        <View className='rounded-[24px] border border-neutral-200 bg-white p-4'>
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
        </View>

        <View className='gap-3'>
          <Button label='Save Changes' />
          <Button
            size={SizesEnum.S}
            onPress={handleLogout}
            label='Logout'
            variant={VariantsEnum.Text}
          />
        </View>
      </View>
    </View>
  )
}
