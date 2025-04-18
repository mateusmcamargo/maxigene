import { TitleBlock }  from '../Components/PageSections/PageSections';
import { FormNewFarm } from '../Components/Forms/Forms';
import { FluctuatingDiv } from '../Components/Blocks/Blocks';

function Farms() {
    return (
        <main>
            <TitleBlock title='propriedades'/>

            <FormNewFarm/>

            <section className='section-list'>
                <FluctuatingDiv h3Text='fazenda01' pText='12 animais'/>
                <FluctuatingDiv h3Text='fazenda02' pText='97 animais'/>
                <FluctuatingDiv h3Text='fazenda03' pText='34 animais'/>
            </section>
        </main>
    );
}

export { Farms };