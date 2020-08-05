import React, { useState } from 'react';

import './styles.css';

import PageHeader from '../../Components/PageHeader';
import Input from '../../Components/Input';
import Textarea from '../../Components/Textarea';
import Select from '../../Components/Select';

import warningIcon from '../../Assets/images/icons/warning.svg';


function TeacherForm()
{

    const [scheduleItens, setScheduleItens] = useState([
        { week_day: 0, from: '', to: '' }
    ])

    function addNewScheduleItem(){
        setScheduleItens([
            ...scheduleItens,
            { week_day: 0, from: '', to: '' }
        ])
        scheduleItens.push()
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrível que você quer dar aulas." 
                description="O primeiro passo é preencher esse formulário de inscrição."
            />
            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input name="name" label="Nome completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="WhatsApp" />
                    <Textarea name="bio" label="Biografia" />
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Select 
                        name="subject" 
                        label="Matéria" 
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'História', label: 'História' },
                            { value: 'Português', label: 'Português' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Química', label: 'Quimica' },
                            { value: 'Filosofia', label: 'Filosofia' },
                            { value: 'Educação física', label: 'Educação física' },
                        ]}
                    />

                    <Input name="cost" label="Custo da sua hora por aula" />
                </fieldset>

                <fieldset>
                    <legend>
                        Horários disponíveis
                        <button type="button" onClick={addNewScheduleItem}>
                            + Novo horário
                        </button>
                    </legend>

                    {scheduleItens.map(scheduleItem =>{
                        return (
                            <div key={scheduleItem.week_day} className="schedule-item">
                                <Select 
                                    name="week_day" 
                                    label="Dia da semana" 
                                    options={[
                                        { value: '0', label: 'Domingo' },
                                        { value: '1', label: 'Segunda-feira' },
                                        { value: '2', label: 'Terça-feira' },
                                        { value: '3', label: 'Quarta-feira' },
                                        { value: '4', label: 'Quinta-feira' },
                                        { value: '5', label: 'Sexta-feira' },
                                        { value: '6', label: 'Sábado' },
                                    ]}
                                />
                                <Input name="from" label="Das" type="time" />
                                <Input name="to" label="Até" type="time" />
                            </div>
                        );
                    })}
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante"/>
                        Importante! <br/>
                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm;