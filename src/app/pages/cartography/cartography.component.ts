import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { FamilyprocService } from 'app/services/family_process/familyproc.service';
import { first } from 'rxjs/operators';
@Component({
    selector: 'cartography-cmp',
    moduleId: module.id,
    templateUrl: 'cartography.component.html'
})

export class CartographyComponent implements OnInit {
    private items: MenuItem[];
    home: MenuItem;
    id: string;
    private sub: any;
    ref:string;
    version:string;
    constructor(private router: Router,private procService: FamilyprocService) { }

    goToProductDetails(id,idd) {
        console.log(idd)
        this.router.navigate(['Home/cartography/Process_Sheet',id,idd]);
      }
    loadPage(){

     
            
                this.router.navigate(['/','notification']);
              
 
        
    }
    ngOnInit(){
        this.items = [
            {label:'Categories'},
            {label:'Sports'},
            {label:'Football'},
            {label:'Countries'},
            {label:'Spain'},
            {label:'F.C. Barcelona'},
            {label:'Squad'},
            {label:'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'}
        ];
        this.home = {icon: 'pi pi-home'};


        
    this.procService.getRefCart()
    .pipe(first())
    .subscribe(
      (data: any) => {
       
      this.ref=data['Reference'];

      this.version=data['Version'];

      });
    }
}
