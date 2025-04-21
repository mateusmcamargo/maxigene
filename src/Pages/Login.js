import { auth } from '../Config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FormSection, FormWrapper, InputBlock } from "../Components/FormBlocks/FormBlocks";

export function Login() {
    return (
        <FormWrapper>
            <FormSection title='login'>
                <InputBlock
                    labelValue='email'
                    inputPlaceholder='seuemail@dominio.com'
                    inputType='email'
                    id='login-email'
                />
                <InputBlock
                    labelValue='senha'
                    inputPlaceholder='digite a senha'
                    inputType='password'
                    id='login-password'
                />
                <InputBlock
                    inputText='entrar'
                    inputType='submit'
                    id='login-submit'
                />
            </FormSection>
        </FormWrapper>
    )
}