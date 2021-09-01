import {Component, OnInit} from '@angular/core';
import {APIURLS} from '../utils/APIURLS';
import {Router} from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
    selector:'date-slide-header-comp',
    templateUrl:'./date-slide-header.component.html',
    styleUrls:['./date-slide-header.component.css'],
    providers:[DatePipe]
})
export class DateSlideHeaderComponent implements OnInit{
    
    today: any  = new Date();
    yesterday: any = this.today.setDate(this.today.getDate()-1);
    tomorrow: any = this.today.setDate(this.today.getDate()+1);// issue in display date.
    dateArray: Array<any> = [this.yesterday, this.today, this.tomorrow];

    constructor(public apis:APIURLS, public router:Router, public datePipe: DatePipe)
    {

    }
    nextDate()
    {

    }
    previousDate()
    {

    }
    ngOnInit()
    {

    }
}