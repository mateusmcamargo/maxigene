import { ShowAlert }            from '../Components/Alerts/Alerts';
import { TitleBlock, Footer }   from '../Components/PageSections/PageSections';
import { FormNewAnimal }        from '../Components/Forms/Forms';

function NewAnimal() {
    return (
        <main>
            {/* <Reveal>
                <ButtonReturn/>
            </Reveal> */}

            <ShowAlert alert={1} labelText='leia ou digite o código' buttonText='cadastrar' inputPlaceholder={123456} inputType='number' id='code-reader' submitText='cadastrar código'/>

            <TitleBlock title='novo animal'/>

            <FormNewAnimal/>

            {/* <Footer left='MaxiGene™' center='59035SP / 8570MS' right='Três Lagoas, MS'/> */}
        </main>
    );
}

export { NewAnimal };