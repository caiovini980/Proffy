import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './Landing';
import TeacherList from './TeacherList';
import TeacherForm from './TeacherForm';
import Teste from './Teste';

function Routes()
{
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/teste" component={Teste} />
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />
        </BrowserRouter>
    ) 
}  

export default Routes;