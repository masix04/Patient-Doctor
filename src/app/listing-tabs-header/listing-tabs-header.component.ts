import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
// import { SlugifyPipe } from '../utils/slugify.pipe';
import { APIURLS } from '../utils/APIURLS';
import { Router } from '@angular/router';

@Component({
    selector: 'listing-tabs-header-comp',
    templateUrl: './listing-tabs-header.component.html',
    styleUrls: ['./listing-tabs-header.component.css'],
    providers: [DatePipe]
})
export class ListingTabsHeaderComponent implements OnInit{

    constructor(public apis: APIURLS, public datePipe: DatePipe, public router: Router)
    {
    }
    ngOnInit()
    {

    }
}