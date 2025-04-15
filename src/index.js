import React                    from 'react';
import ReactDOM                 from 'react-dom/client';
import reportWebVitals          from './reportWebVitals';
import { ShowAlert }            from './Components/Alerts/Alerts';
import { ButtonReturn }         from './Components/Buttons/Buttons';
import { Reveal }               from './Animations/Animations';
import { TitleBlock, Footer }   from './Components/PageSections/PageSections';
import { FormNewAnimal }        from './Components/Forms/Forms';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<React.StrictMode>

<Reveal>
    <ButtonReturn/>
</Reveal>

<ShowAlert alert={1} labelText='leia ou digite o código' buttonText='cadastrar' inputPlaceholder={123456} inputType='number' id='code-reader'/>

<TitleBlock title='novo animal'/>

<FormNewAnimal/>

<Footer left='MaxiGene™' center='59035SP / 8570MS' right='Três Lagoas, MS'/>

</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();