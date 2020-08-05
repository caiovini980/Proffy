import React from 'react';

import './styles.css';

import PageHeader from '../../Components/PageHeader';
import TeacherItem from '../../Components/TeacherItem';
import Input from '../../Components/Input';
import Select from '../../Components/Select';

function TeacherList()
{
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os Proffys disponíveis">
                <form id="search-teachers">
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
                    <Input type="time" name="time" label="Hora" />
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList;