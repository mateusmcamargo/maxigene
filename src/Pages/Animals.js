import { TitleBlock }  from '../Components/PageSections/PageSections';
import { DivContentSquare, DivInfoSquare, SectionContent, SectionTitle, SectionTitleBack, WrapperFlex } from '../Components/Blocks/Blocks';
import { NavLink } from 'react-router-dom';

export function Animals() {
    return (
        <main>
            <WrapperFlex>
                <SectionTitle title='animais'/>
                <SectionContent>
                    <DivContentSquare icon='cow' h3Text='gerenciar' pText='14 animais'/>

                    <NavLink to='./newanimal'>
                        <DivInfoSquare    icon='add'     h3Text='adicionar' pText='novo animal'/>
                    </NavLink>
                </SectionContent>
            </WrapperFlex>
        </main>
    );
}