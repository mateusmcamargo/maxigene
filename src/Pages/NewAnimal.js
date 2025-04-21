import { ShowAlert }            from '../Components/Alerts/Alerts';
import { FormNewAnimal }        from '../Components/Forms/Forms';
import { SectionContent, SectionTitle, WrapperFlex } from '../Components/Blocks/Blocks';

export function NewAnimal() {
    return (
        <main>
            {/* <Reveal>
                <ButtonReturn/>
            </Reveal> */}

            <ShowAlert alert={1} labelText='leia ou digite o código' buttonText='cadastrar' inputPlaceholder={123456} inputType='number' id='code-reader' submitText='cadastrar código'/>

            <WrapperFlex styling='flex row align-center justify-center'>
                <SectionTitle  hasIcon={true} icon='arrow-left' title='cadastrar novo animal' goto='maxigene/animals'/>
                <SectionContent>
                    <FormNewAnimal/>
                </SectionContent>
            </WrapperFlex>

            {/* <Footer left='MaxiGene™' center='59035SP / 8570MS' right='Três Lagoas, MS'/> */}
        </main>
    );
}