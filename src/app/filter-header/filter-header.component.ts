import {Component, OnInit} from '@angular/core';
import {APIURLS} from '../utils/APIURLS';
import {Router} from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
    selector:'filter-header-comp',
    templateUrl:'./filter-header.component.html',
    styleUrls:['./filter-header.component.css'],
    providers:[DatePipe]
})
export class FilterHeaderComponent implements OnInit{
    today: any  = new Date();
    constructor(public apis:APIURLS, public router:Router)
    {

    }
    ngOnInit()
    {

    }
}