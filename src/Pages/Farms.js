import { TitleBlock }  from '../Components/PageSections/PageSections';
import { DivContentSquare, DivInfoSquare, SectionContent, SectionTitle, WrapperFlex } from '../Components/Blocks/Blocks';

export function Farms() {
    return (
        <main>
            <WrapperFlex>
                <SectionTitle title='propriedades'/>
                <SectionContent>
                    <DivContentSquare icon='tractor' h3Text='fazenda01' pText='14 animais'/>
                    <DivInfoSquare    icon='add'     h3Text='adicionar' pText='nova fazenda'/>
                </SectionContent>
            </WrapperFlex>
        </main>
    );
}