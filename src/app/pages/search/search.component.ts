import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FamilyprocService } from 'app/services/family_process/familyproc.service';
import {HttpErrorResponse} from '@angular/common/http';
import { first } from 'rxjs/operators';
import { from } from 'rxjs';
import { Car } from 'app/models/car';
import { SelectItem} from 'primeng/primeng';
import { LazyLoadEvent } from 'primeng/api';
import { FilterMetadata } from 'primeng/api';
import { MenuItem } from 'primeng/api';

@Component({
    moduleId: module.id,
    selector: 'search-cmp',
    templateUrl: 'search.component.html'
})
export class MapsComponent implements OnInit {
    constructor(private carService: FamilyprocService) { }
    private items: MenuItem[];
    home: MenuItem;
    Company: SelectItem[];
    Family: SelectItem[];

    Process: SelectItem[];
    Type: SelectItem[];
    datasource: Car[];

    cars: Car[];

    totalRecords: number;

    cols: any[];

    loading: boolean;
    id:any;
    ngOnInit() {
        this.items = [
            {label:'Tools Search',url:'/#/search'},
    
        ];
        this.home = {label:'Home',url:'/#/Home',icon: 'pi pi-home'};

        this.carService.gettools()
        .pipe(first())
        .subscribe(
          (data: any) => {
              //console.log(data);
            this.cars =data['Tools'];
            this.totalRecords = this.cars.length;
            console.log( data['Companys']);
            
            this.Company=data['Companys'];
            this.Company.push({ label: 'All companies', value: null })

            this.Family = data['Familys'];
            this.Family.push({ label: 'All families', value: null })

            this.Process = data['Procs'];
            this.Process.push({ label: 'All Process', value: null })

            this.Type =  data['Types'];
            this.Type.push({ label: 'All Types', value: null })

          });

          this.cols = [
            { field: 'id', header: '#' },
            { field: 'Reference', header: 'Reference' },
            { field: 'Name', header: 'Name' },
            { field: 'Company', header: 'Company' },
            { field: 'Family', header: 'Family' },
            { field: 'Process', header: 'Process' },
            { field: 'Type', header: 'Type' },
            { field: 'Version', header: 'Version' },
          
        ];

        this.loading = true;


    }

    loadCarsLazy(event: LazyLoadEvent) {
        this.loading = true;


        //in a real application, make a remote request to load data using state metadata from event
     // event.first = 1
        //event.rows = Number of rows per page
        //event.sortField = Field name to sort with
        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

        //imitate db connection over a network
  
        setTimeout(() => {
            if (this.datasource) {
    
                this.cars = this.datasource.slice(event.first, (event.first + event.rows));
             
                this.loading = false;
            }
        }, 1000);
    }

}
