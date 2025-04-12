import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {FormWrapper, FormSection, TextareaBlock, InputBlock, SelectBlock} from './FormBlocks/FormBlocks';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  <FormWrapper>
    <FormSection title='dados iniciais'>
      <InputBlock  labelValue='data'        inputType='date' id='date'/>
      <SelectBlock labelValue='fazenda'     options={['fazenda01', 'fazenda02', 'fazenda03', 'fazenda04']} id='farm'/>
      <SelectBlock labelValue='lote'        options={['lote01', 'lote02', 'lote03', 'lote04', 'lote05', 'lote06']} id='batch'/>
      <SelectBlock labelValue='categoria'   options={['categoria01', 'categoria02', 'categoria03']} id='category'/>
      <SelectBlock labelValue='inseminador' options={['inseminador01', 'inseminador02']} id='worker'/>
    </FormSection>

    <FormSection title='dados da mãe'>
      <SelectBlock labelValue='dg'  options={['prenha', 'vazia']} id='dg'/>
      <InputBlock  labelValue='ecc' inputType='number' id='ecc'/>
      <SelectBlock labelValue='tipo de implante' options={['monodose']} id='implant'/>
      <SelectBlock labelValue='nome do touro'    options={['touro01', 'touro02', 'touro03']} id='bull'/>
      <InputBlock  labelValue='partida'          inputType='number' id='exit'/>
    </FormSection>

    <FormSection title='dados da matriz'>
      <SelectBlock labelValue='raça da matriz'     options={['raça01', 'raça02', 'raça03', 'raça04']} id='calf-breed'/>
      <InputBlock  labelValue='peso da matriz'     inputType='number'     id='calf-weight'/>
      <SelectBlock labelValue='gênero da matriz'   options={['monodose']} id='calf-gender'/>
      <InputBlock  labelValue='data de nascimento' inputType='date'       id='calf-date'/>
    </FormSection>

    <FormSection title='finalizar'>
      <SelectBlock   labelValue='protocolo'   options={['protocolo01', 'protocolo02', 'protocolo03']} id='protocol'/>
      <TextareaBlock labelValue='observações' textareaPlaceholder='escreva as observações aqui.'  id='observations'/>
      <InputBlock    inputType='submit'       inputText='cadastrar animal' id='animal-submit'/>
    </FormSection>

  </FormWrapper>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
