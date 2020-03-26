import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FamilyprocService } from 'app/services/family_process/familyproc.service';
import {HttpErrorResponse} from '@angular/common/http';
import { first } from 'rxjs/operators';
import { from } from 'rxjs';
import { Car } from 'app/models/car';
import { SelectItem } from 'primeng/primeng';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { LazyLoadEvent } from 'primeng/api';
import { FilterMetadata } from 'primeng/api';
import { MenuItem } from 'primeng/api';


declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'Tools-cmp',
    moduleId: module.id,
    templateUrl: 'Tools.component.html',

})

export class TableComponent implements OnInit{
    constructor(private carService: FamilyprocService,private router: Router, private route: ActivatedRoute,) { }
    cols: any[];
path:string;

    Company: SelectItem[];
    Family: SelectItem[];

    Process: SelectItem[];
    Type: SelectItem[];


    brands: SelectItem[];

    colors: SelectItem[];

    yearFilter: number;
    sub :any
    yearTimeout: any;
    cars: Car[];
    public tableData1: TableData;
    public tableData2: TableData;
    id:any;
    c:any;
    private items: MenuItem[];
    home: MenuItem;
    fam:string;
    abre:string;
    ngOnInit(){




  




      this.sub = this.route.params.subscribe(params => {

    
      
            this.c = params['c'];});
            console.log(this.c+'cc')
            this.carService.getprocTool(this.c)
            .pipe(first())
            .subscribe(
              (data: any) => {
          
        this.fam=data['fam'];
        this.abre=data['abre'];
          console.log(this.fam);
          this.path='/#/Home/cartography/Process_Sheet/'+this.fam +'/'+this.abre;
          this.items = [
            {label:'Cartography', url: '/#/Home/cartography'},
            {label:'Process Sheet',url:this.path},
            {label:'Tools'},
      
        ];
        this.home = {label:'Home', url: '/#/Home',icon: 'pi pi-home'};   
              });
      
        this.carService.gettoolsDetails(this.c)
        .pipe(first())
        .subscribe(
          (data: any) => {
             // console.log(data);
            this.cars =data

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
        this.carService.gettools()
        .pipe(first())
        .subscribe(
          (data: any) => {
              //console.log(data);
            this.cars =data['Tools'];
            console.log( data['Companys']);
            
            this.Company=data['Companys'];
            this.Company.push({ label: 'All Companies', value: null })

            this.Family = data['Familys'];
            
            this.Process = data['Procs'];
            this.Type =  data['Types'];
            this.Type.push({ label: 'All Types', value: null })

          });
    }


    getTool(id){
     // console.log(id+'id');
     
  this.carService.getToolContent(id)
  .pipe(first())
     .subscribe(
      (data: any) => {
        
/*    const blob = new Blob(data['content'], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url= window.URL.createObjectURL(blob);
    window.open(url); */


    const b64toBlob = (b64Data, contentType='', sliceSize=512) => {
      const byteCharacters = atob(b64Data);
      const byteArrays = [];
    
      for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);
    
        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }
    
        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
      }
        
      const blob = new Blob(byteArrays, {type: contentType});
      return blob;
    }
    
    const contentType = data['type'];
    const b64Data = data['content'];
    const downloadLink = document.createElement("a");
    downloadLink.href = window.URL.createObjectURL(b64toBlob(b64Data, contentType));;
    downloadLink.download = data['name'];
    downloadLink.click(); 




              }) 

    }
}
