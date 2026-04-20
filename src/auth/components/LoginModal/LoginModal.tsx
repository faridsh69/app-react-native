import { useEffect } from 'react'
import { useCrudAuthUserEmailAvailability } from '@/apis/useCruds/authCruds'
import { AUTH_STEPS } from '@/auth/constants/auth.constants'
import { useAuthLogin } from '@/auth/hooks/useAuthLogin'
import { Button, FontsEnum, Form, InputComponentsEnum, Label } from '@/ui'
import { LOGIN_SCHEMA, validateFormData } from '@/ui/Form/schemas'
import { SizesEnum, TextAlignEnum, VariantsEnum } from '@/ui/theme/themeEnums'
import { useAtom } from 'jotai'
import { View } from 'react-native'

import { authModalAtom, DEFAULT_AUTH_MODAL_ATOM } from '../../atoms/authModalAtom'

export const LoginModal = () => {
  const [authModal, setAuthModal] = useAtom(authModalAtom)
  const { isOpen, step, email, password, formIsValid } = authModal

  useEffect(() => {
    validateFormData(LOGIN_SCHEMA, { email }).then(formIsValid => {
      setAuthModal(p => ({ ...p, formIsValid }))
    })
  }, [email])

  const { createMutation: checkEmailMutation } = useCrudAuthUserEmailAvailability()

  const handleCheckEmail = () => {
    setAuthModal(p => ({ ...p, step: AUTH_STEPS.checkEmail }))

    checkEmailMutation.mutate({
      data: { email },
      onSuccess: data => {
        if (data.is_available) {
          // proceed to register
        } else {
          setAuthModal(p => ({ ...p, step: AUTH_STEPS.login }))
        }
      },
    })
  }

  const { handleLogin, isLoading } = useAuthLogin(email, password)

  const handleClose = () => {
    setAuthModal(DEFAULT_AUTH_MODAL_ATOM)
  }

  if (step === AUTH_STEPS.login) {
    return (
      <View
        title={`Welcome`}
        body={
          <div className='flexColumnCenter'>
            <br />
            <Label
              font={FontsEnum.Label20}
              linesCount={2}
              textAlign={TextAlignEnum.Center}
              label={email}
            />
            <Label
              font={FontsEnum.Text16}
              linesCount={2}
              textAlign={TextAlignEnum.Center}
              label='Please enter your password for your account.'
            />
            <Form
              inputs={[
                {
                  name: 'password',
                  component: InputComponentsEnum.Text,
                  hideable: true,
                  placeholder: 'Password',
                  autoFocus: true,
                },
              ]}
              defaultValues={{ password }}
              onChangeInput={data => setAuthModal(p => ({ ...p, password: data.password }))}
              schema={LOGIN_SCHEMA}
            />
          </div>
        }
        actions={
          <div className='flexColumn'>
            <Button
              variant={VariantsEnum.Primary}
              size={SizesEnum.M}
              label='Login'
              width={'100%'}
              disabled={!password}
              onPress={handleLogin}
              // isLoading={isLoading}
            />
          </div>
        }
      />
    )
  }

  if (step === AUTH_STEPS.enterEmail) {
    return (
      <View
        title='Login / Register'
        body={
          <div className='flexColumnCenter'>
            <br />
            <Label
              font={FontsEnum.Label20}
              linesCount={2}
              textAlign={TextAlignEnum.Center}
              label='Get started by entering your email.'
            />
            <Form
              inputs={[
                {
                  name: 'email',
                  component: InputComponentsEnum.Text,
                  placeholder: 'Email address',
                  autoFocus: true,
                },
              ]}
              defaultValues={{ email }}
              onChangeInput={data => setAuthModal(p => ({ ...p, email: data.email }))}
              schema={LOGIN_SCHEMA}
            />
          </div>
        }
        actions={
          <div className='flexColumn'>
            <Button
              variant={VariantsEnum.Primary}
              size={SizesEnum.M}
              label='Continue with email'
              width={'100%'}
              disabled={!formIsValid}
              onPress={handleCheckEmail}
              // isLoading={checkEmailMutation.isPending}
            />
          </div>
        }
      />
    )
  }
}
