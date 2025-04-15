import { FormWrapper, FormSection, InputBlock, SelectBlock, TextareaBlock } from '../FormBlocks/FormBlocks';

function FormNewAnimal() {
    return (
        <FormWrapper>
            <FormSection title='dados iniciais'>
                <InputBlock  labelValue='data'        inputType='date' id='date'/>
                <SelectBlock labelValue='fazenda'     options={['fazenda01', 'fazenda02', 'fazenda03', 'fazenda04']} id='farm'/>
                <SelectBlock labelValue='lote'        options={['lote01', 'lote02', 'lote03', 'lote04', 'lote05', 'lote06']} id='batch'/>
                <SelectBlock labelValue='categoria'   options={['categoria01', 'categoria02', 'categoria03']} id='category'/>
                <SelectBlock labelValue='inseminador' options={['inseminador01', 'inseminador02']} id='worker'/>
            </FormSection>
            
            <FormSection title='dados da mãe'>
                <SelectBlock labelValue='dg'                  options={['prenha', 'vazia']} id='dg'/>
                <SelectBlock labelValue='tipo de implante'    options={['monodose']} id='implant'/>
                <SelectBlock labelValue='nome do touro'       options={['touro01', 'touro02', 'touro03']} id='bull'/>
                <InputBlock  labelValue='ecc'                 inputType='number' inputPlaceholder={3.5}   id='ecc'/>
                <InputBlock  labelValue='partida' step="0.01" inputType='number' inputPlaceholder={12345} id='exit'/>
            </FormSection>
            
            <FormSection title='dados da matriz'>
                <SelectBlock labelValue='raça da matriz'     options={['raça01', 'raça02', 'raça03', 'raça04']} id='calf-breed'/>
                <SelectBlock labelValue='gênero da matriz'   options={['monodose']} id='calf-gender'/>
                <InputBlock  labelValue='data de nascimento' inputType='date'       id='calf-date'/>
                <InputBlock  labelValue='peso da matriz'     inputType='number' inputPlaceholder={450} id='calf-weight'/>
            </FormSection>
            
            <FormSection title='finalizar'>
                <SelectBlock   labelValue='protocolo'   options={['protocolo01', 'protocolo02', 'protocolo03']} id='protocol'/>
                <TextareaBlock labelValue='observações' textareaPlaceholder='escreva as observações aqui.'  id='observations'/>
                <InputBlock    inputType='submit'       inputText='cadastrar animal' id='animal-submit'/>
            </FormSection>
    
        </FormWrapper>
    );
}

export { FormNewAnimal };