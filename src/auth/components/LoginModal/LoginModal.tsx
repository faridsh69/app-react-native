import { useEffect } from 'react'
import { useCrudAuthUserEmailAvailability } from '@/apis/useCruds/authCruds'
import { authAtom } from '@/auth/atoms/authAtom'
import { AUTH_STEPS } from '@/auth/constants/auth.constants'
import { useAuthLogin } from '@/auth/hooks/useAuthLogin'
import { useAtom } from '@/core/lib/jotai'
import {
  Button,
  FontsEnum,
  Form,
  InputComponentsEnum,
  Label,
  Popup,
  SCHEMAS,
  type FormInput,
} from '@/ui'
import { LOGIN_SCHEMA, validateFormData } from '@/ui/Form/schemas'
import { SizesEnum, TextAlignEnum, VariantsEnum } from '@/ui/theme/themeEnums'
import { ScrollView, View } from 'react-native'

import { authModalAtom, DEFAULT_AUTH_MODAL_ATOM } from '../../atoms/authModalAtom'
import { ProfilePage } from '../ProfilePage'

const PASSWORD_SCHEMA = SCHEMAS.wrapper({
  password: SCHEMAS.requiredString,
})

const emailInputs: FormInput[] = [
  {
    name: 'email',
    component: InputComponentsEnum.Text,
    placeholder: 'Email address',
    autoFocus: true,
    keyboardType: 'email-address',
    autoCapitalize: 'none',
  },
]

const passwordInputs: FormInput[] = [
  {
    name: 'password',
    component: InputComponentsEnum.Text,
    placeholder: 'Password',
    autoFocus: true,
    autoCapitalize: 'none',
    autoCorrect: false,
    secureTextEntry: true,
    passwordToggle: true,
  },
]

export const LoginModal = () => {
  const [authModal, setAuthModal] = useAtom(authModalAtom)
  const [auth] = useAtom(authAtom)
  const { isOpen, step, email, password, formIsValid } = authModal

  useEffect(() => {
    validateFormData(LOGIN_SCHEMA, { email }).then(nextIsValid => {
      setAuthModal(prev => ({ ...prev, formIsValid: nextIsValid }))
    })
  }, [email, setAuthModal])

  const { createMutation: checkEmailMutation } = useCrudAuthUserEmailAvailability()
  const { handleLogin, isLoading } = useAuthLogin(email, password)

  const handleClose = () => {
    setAuthModal(DEFAULT_AUTH_MODAL_ATOM)
  }

  const handleCheckEmail = () => {
    setAuthModal(prev => ({ ...prev, step: AUTH_STEPS.checkEmail }))

    checkEmailMutation.mutate({
      data: { email },
      onSuccess: data => {
        setAuthModal(prev => ({
          ...prev,
          step: data.is_available ? AUTH_STEPS.register : AUTH_STEPS.login,
        }))
      },
      onError: () => {
        setAuthModal(prev => ({ ...prev, step: AUTH_STEPS.enterEmail }))
      },
    })
  }

  const bodyByStep = {
    [AUTH_STEPS.enterEmail]: (
      <View className='gap-5'>
        <View className='items-center gap-3'>
          <View className='gap-2'>
            <Label
              label='Log in or create your account'
              font={FontsEnum.Label30}
              textAlign={TextAlignEnum.Center}
              linesCount={2}
            />
            <Label
              label='Start with your email and we will guide you to the right next step.'
              font={FontsEnum.Text16}
              textAlign={TextAlignEnum.Center}
              linesCount={3}
            />
          </View>
        </View>

        <View className='rounded-[20px] border border-neutral-200 bg-white p-4'>
          <Form
            inputs={emailInputs}
            defaultValues={{ email }}
            onChangeInput={data => setAuthModal(prev => ({ ...prev, email: data.email ?? '' }))}
            schema={LOGIN_SCHEMA}
          />
        </View>
      </View>
    ),
    [AUTH_STEPS.login]: (
      <View className='gap-5'>
        <View className='items-center gap-3'>
          <View className='gap-2'>
            <Label label='Welcome back' font={FontsEnum.Label30} textAlign={TextAlignEnum.Center} />
            <Label
              label={email}
              font={FontsEnum.Label20}
              textAlign={TextAlignEnum.Center}
              linesCount={2}
            />
            <Label
              label='Enter your password to continue to your account.'
              font={FontsEnum.Text16}
              textAlign={TextAlignEnum.Center}
              linesCount={2}
            />
          </View>
        </View>

        <View className='rounded-[20px] border border-neutral-200 bg-white p-4'>
          <Form
            inputs={passwordInputs}
            defaultValues={{ password }}
            onChangeInput={data =>
              setAuthModal(prev => ({ ...prev, password: data.password ?? '' }))
            }
            schema={PASSWORD_SCHEMA}
          />
        </View>
      </View>
    ),
    [AUTH_STEPS.register]: (
      <View className='gap-5'>
        <View className='items-center gap-3'>
          <View className='rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5'>
            <Label label='New here' font={FontsEnum.Text14} />
          </View>
          <View className='gap-2'>
            <Label
              label='You are one step away'
              font={FontsEnum.Label30}
              textAlign={TextAlignEnum.Center}
            />
            <Label
              label={email}
              font={FontsEnum.Label20}
              textAlign={TextAlignEnum.Center}
              linesCount={2}
            />
            <Label
              label='This email does not have an account yet. Connect your registration flow here to finish sign up.'
              font={FontsEnum.Text16}
              textAlign={TextAlignEnum.Center}
              linesCount={3}
            />
          </View>
        </View>

        <View className='rounded-[20px] border border-dashed border-sky-300 bg-sky-50 p-4'>
          <Label
            label='Registration API is not wired in this component yet, but the modal is now ready for that next step.'
            font={FontsEnum.Text14}
            textAlign={TextAlignEnum.Center}
            linesCount={4}
          />
        </View>
      </View>
    ),
    [AUTH_STEPS.checkEmail]: (
      <View className='gap-4'>
        <View className='items-center gap-3'>
          <View className='rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1.5'>
            <Label label='Checking email' font={FontsEnum.Text14} />
          </View>
          <Label
            label='We are looking up your account and preparing the next step.'
            font={FontsEnum.Text16}
            textAlign={TextAlignEnum.Center}
            linesCount={3}
          />
        </View>
      </View>
    ),
  } as const

  const actionsByStep = {
    [AUTH_STEPS.enterEmail]: (
      <View className='w-full gap-3'>
        <Button
          variant={VariantsEnum.Primary}
          size={SizesEnum.M}
          label={checkEmailMutation.isPending ? 'Checking...' : 'Continue with email'}
          width='100%'
          disabled={!formIsValid || checkEmailMutation.isPending}
          onPress={handleCheckEmail}
        />
      </View>
    ),
    [AUTH_STEPS.login]: (
      <View className='w-full gap-3'>
        <Button
          variant={VariantsEnum.Primary}
          size={SizesEnum.M}
          label={isLoading ? 'Signing in...' : 'Login'}
          width='100%'
          disabled={!password?.trim() || isLoading}
          onPress={handleLogin}
        />
        <Button
          variant={VariantsEnum.Text}
          size={SizesEnum.M}
          label='Use another email'
          width='100%'
          onPress={() =>
            setAuthModal(prev => ({
              ...prev,
              step: AUTH_STEPS.enterEmail,
              password: '',
            }))
          }
        />
      </View>
    ),
    [AUTH_STEPS.register]: (
      <View className='w-full gap-3'>
        <Button
          variant={VariantsEnum.Primary}
          size={SizesEnum.M}
          label='Use another email'
          width='100%'
          onPress={() =>
            setAuthModal(prev => ({
              ...prev,
              step: AUTH_STEPS.enterEmail,
            }))
          }
        />
      </View>
    ),
    [AUTH_STEPS.checkEmail]: (
      <View className='w-full gap-3'>
        <Button
          variant={VariantsEnum.Text}
          size={SizesEnum.M}
          label='Close'
          width='100%'
          onPress={handleClose}
        />
      </View>
    ),
  } as const

  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        paddingVertical: 24,
        gap: 16,
      }}
    >
      {auth.isLoggedIn && <Label label={`Welcome  ${auth.user?.email}`} font={FontsEnum.Label30} />}
      {auth.isLoggedIn && <ProfilePage />}

      {!auth.isLoggedIn && <Label label={'you are not signed in'} font={FontsEnum.Label30} />}
      {!auth.isLoggedIn && (
        <Button
          variant={VariantsEnum.Primary}
          size={SizesEnum.M}
          label='Login'
          width='100%'
          onPress={() => {
            setAuthModal(prev => ({
              ...prev,
              step: AUTH_STEPS.enterEmail,
              isOpen: true,
            }))
          }}
        />
      )}

      <Popup
        isOpen={isOpen}
        setIsOpen={nextIsOpen => {
          if (!nextIsOpen) handleClose()
        }}
        body={bodyByStep[step]}
        actions={actionsByStep[step]}
        width={480}
        bodyPadding
        closeOnClickOutside
        snapPoints={['70%']}
        enablePanDownToClose
      />
    </ScrollView>
  )
}
