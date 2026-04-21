import { useEffect } from 'react'
import { useCrudAuthRegister, useCrudAuthUserEmailAvailability } from '@/apis/useCruds/authCruds'
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
import { ColorsEnum, SizesEnum, TextAlignEnum, VariantsEnum } from '@/ui/theme/themeEnums'
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
    autoCorrect: false,
    textContentType: 'emailAddress',
    autoComplete: 'email',
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

const registerInputs: FormInput[] = [
  {
    name: 'username',
    label: 'Name',
    placeholder: 'Name',
    component: InputComponentsEnum.Text,
  },
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
  {
    name: 'age',
    label: "I'm 21+ years old",
    component: InputComponentsEnum.Toggle,
  },
  {
    name: 'newsletter',
    label: 'Yes, I want to receive email updates, special offers, and personalized recommendations',
    component: InputComponentsEnum.Toggle,
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
        console.log('1 data', data)
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

  const { createMutation: registerMutatution } = useCrudAuthRegister()
  const handleRegister = () => {
    registerMutatution.mutate({
      data: {
        dob: '2000-01-01T00:00:00.000Z',
        username: authModal.username,
        email: authModal.email,
        password: authModal.password,
        // email_subscriptions: []
      },
    })
  }

  const bodyByStep = {
    [AUTH_STEPS.enterEmail]: (
      <View className='flex flex-col gap-10'>
        <View className='gap-3'>
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
        <View className='flex flex-col content-center items-center gap-5'>
          <View className='gap-2'>
            <Label
              label='Welcome back'
              font={FontsEnum.Label30}
              textAlign={TextAlignEnum.Center}
              linesCount={2}
            />
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
          <View className='flex flex-col items-center gap-5'>
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
              label='This email does not have an account yet.'
              font={FontsEnum.Text16}
              textAlign={TextAlignEnum.Center}
              linesCount={3}
            />
          </View>
        </View>

        <View className='flex flex-col gap-5'>
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
        <div>
          <Button label='Create an account' width={'100%'} />
          <Label
            font={FontsEnum.Text12}
            label='By creating an account, you agree to the VinoVoss'
            textAlign={TextAlignEnum.Center}
            color={ColorsEnum.Grey600}
          />
          <Label
            font={FontsEnum.Text12}
            label='Terms of Use, Privacy Policy & Content Policy'
            textAlign={TextAlignEnum.Center}
          />
        </div>

        <div style={{ gap: 16, display: 'flex', flexDirection: 'column' }}>
          Create account
          <Label
            font={FontsEnum.Text16}
            linesCount={3}
            textAlign='center'
            label='Welcome to VinoVoss! You must be of legal drinking age to create an account.'
          />
          <View className='flex flex-col gap-5'>
            <View className='rounded-[20px] border border-neutral-200 bg-white p-4'>
              <Form
                inputs={registerInputs}
                defaultValues={{}}
                onChangeInput={data => setAuthModal(prev => ({ ...prev, ...data }))}
                schema={PASSWORD_SCHEMA}
              />
            </View>
          </View>
          <Button
            variant={VariantsEnum.Primary}
            size={SizesEnum.M}
            label={isLoading ? 'Signing in...' : 'Create an account'}
            width='100%'
            disabled={!password?.trim() || isLoading}
            onPress={handleRegister}
          />
        </div>
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
