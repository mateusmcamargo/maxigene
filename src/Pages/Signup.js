import { useState } from 'react';
import { auth } from '../Config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FormSection, FormWrapper, InputBlock } from "../Components/FormBlocks/FormBlocks";
import { SectionContent, SectionTitle, WrapperFlex } from '../Components/Blocks/Blocks';
import { FormSignUp } from '../Components/Forms/Forms';

export function Signup() {

    // will be called whenever the user presses the submit button
    // const signIn = () => {
    //     const [email,    setEmail]    = useState("");
    //     const [password, setPassword] = useState("");
    // }

    return (
        <main>
            <WrapperFlex styling='flex row align-center justify-center'>
                <SectionTitle title='criar conta'/>
                <SectionContent>
                    <FormSignUp/>
                </SectionContent>
            </WrapperFlex>
        </main>
    )
}