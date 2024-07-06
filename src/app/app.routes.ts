import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { XOButtonComponent } from './component/x-o-button/x-o-button.component';
import { BoardComponent } from './component/board/board.component';

export const routes: Routes = [
    {

        path:'', component:BoardComponent
    }
];
