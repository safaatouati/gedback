import { Component, OnInit } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import { first } from 'rxjs/operators';
import { FamilyprocService } from '../../services/family_process/familyproc.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Route, ActivatedRoute, Router } from '@angular/router';
import * as fileSaver from 'file-saver';
import { HttpResponse } from '@angular/common/http';
import { MenuItem } from 'primeng/api';

//import 'rxjs/Rx' ;
@Component({
  selector: 'Process_Sheet-cmp',
  moduleId: module.id,
  templateUrl: 'Process_Sheet.component.html'
})

export class NotificationsComponent implements OnInit {
  base64:string;
  f:string;
  id: string;
  idd: string;
  private sub: any;
  colorCC: string
  data: any;
  pilot: string;
  family: string;
  purpose: string;
  name: string;
  indicators: [];
  inputs: [];
  outputs: [];
  upstreams: [];
  downstreams: [];
  proceds:[];
  idp: string;
  version:string;
  ref:string;
  tt:boolean;
  private items: MenuItem[];
  home: MenuItem;
  constructor(private toastr: ToastrService, private procService: FamilyprocService, private route: ActivatedRoute, private getProcess: FamilyprocService,private router: Router) { }
  ProgressSpinnerDlg:boolean;
  ngOnInit() {
this.ProgressSpinnerDlg=true
    this.items = [
      {label:'Cartography', url: '/#/Home/cartography'},
      {label:'Process Sheet'},
 

  ];
  this.home = {label:'Home', url: '/#/Home',icon: 'pi pi-home'};
   this.tt=true;
    this.sub = this.route.params.subscribe(params => {

      /*       if(params['id']=='IM'){
              this.colorCC='';
            }else if(params['id']=='IM'){
      
              }
            } */


      this.id = params['id'];
      this.idd = params['idd'];
      console.log(this.id)


      if (this.id == 'Management') {
        this.colorCC = '#FFD54F';
      } else if (this.id == 'Support') {
        this.colorCC = '#BDD7EE';
      } else if (this.id == 'Marketing') {
        this.colorCC = '#A591BD';
      } else {
        this.colorCC = '#D5EAC8';
      }


    });


    this.procService.getprocessDetails(this.idd)
      .pipe(first())
      .subscribe(
        (data: any) => {
          this.data = data;
        this.idp=data['id'];
          this.pilot = data['pilot'];
          this.purpose = data['purpose'];
        this.indicators = data['indicators'];
        this.upstreams = data['upstream'];
        this.downstreams = data['downstream'];
        this.inputs = data['inputs'];
        this.outputs = data['outputs'];
        this.proceds = data['proceds'];
        this.version = data['version'];
        this.ref = data['ref'];
      
          console.log(this.data)
    
this.ProgressSpinnerDlg=false
        });
      //  location.reload();
//this.goProcess('true');
  }
  showTools(id){
    console.log(id);
    this.router.navigate(['/Home/cartography/../table/',id]);
  }

  showNoti() {
    this.procService.getProcess()
      .pipe(first())
      .subscribe(
        (data: any) => { console.log(data) });
  }

  goTable(a,b,c) {
    let st='/Home/cartography/'+a+'/'+b+'/table/'+c;
    console.log(a,b,c);
    this.router.navigate(["/Home/cartography/Process_Sheet/"+a+"/"+b+"/table/",c]);
  }
  goProcess(a,b){
    console.log()

    let id;
    this.procService.getprocessDetails(a)
    .pipe(first())
    .subscribe(
      (data: any) => {
        this.data = data;
        this.f=data['family'];
        this.idp=data['id'];
        this.pilot = data['pilot'];
        this.purpose = data['purpose'];
      this.indicators = data['indicators'];
      this.upstreams = data['upstream'];
      this.downstreams = data['downstream'];
      this.inputs = data['inputs'];
      this.outputs = data['outputs'];
      this.proceds = data['proceds'];
      this.version = data['version'];
      this.ref = data['ref'];
      console.log(this.f)
      this.router.navigate(['/Home/cartography/Process_Sheet',b,a]);

      });  
     // this.router.navigate(['Home/cartography/Process_Sheet','Management','IM']);
     
  
  }


getIndica(id){


  this.procService.getIndicator(id)
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


  getRisk(id){



    this.procService.getcontent(id)
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




//       console.log(data['content']);
// this.base64=data['content']
//window.open("C:\Users\safa.touati\Documents\Skills_matrix.xlsx", null);    

/* 
  
const linkSource =  'application/xlsx'+this.base64.toString();
const downloadLink = document.createElement("a");
const fileName = "ST_MNG_IM_GU005 Process_Risks_Mapping.xlsx";

downloadLink.href = linkSource;
downloadLink.download = fileName;
downloadLink.click(); 
 */

//const byteArray = new Uint8Array(atob(data['content']).split('').map(char => char.charCodeAt(0)));
//const b= new Blob([byteArray], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});

// Here is your URL you can use
 //onst url = window.URL.createObjectURL(b);

// i.e. display the PDF content via iframe
//document.querySelector("iframe").src = url;
/* const blob = new Blob(["C:\Users\safa.touati\Documents\Skills_matrix.xlsx"], { type: '"application/ms-excel"' });
const url= window.URL.createObjectURL(blob);
window.open(url);*/

              }) 


  }
  showFile(id): void {
    // window.open("/../assets/web/MS_Training_S2007.pdf",'_blank');
    this.procService.getProcedureDetails(id)
      .pipe(first())
      .subscribe(
        (data: any) => {
console.log(id)
          /*           console.log(data[0]['content']);
                  const linkSource = 'data:application/pdf;base64,' + data[0]['content'];
                  const downloadLink = document.createElement("a");
                  const fileName = "sample.pdf";
          
                  downloadLink.href = linkSource;
                  downloadLink.download = fileName;
                  //window.open(atob(data[0]['content']),'_blank');
                  downloadLink.click(); */
          // response.data -> response data base64 encoded
          // decoding the data via atob()
          /* 
          const byteArray = new Uint8Array(atob(data[0]['content']).split('').map(char => char.charCodeAt(0)));
          const b= new Blob([byteArray], {type: 'application/pdf'}); */

          // Here is your URL you can use
          // const url = window.URL.createObjectURL(b);

          // i.e. display the PDF content via iframe
          //document.querySelector("iframe").src = url;



          let html = '';
          html += "<html>";
          html += '<body style="margin:0!important">';
          html += '<embed width="100%" height="100%" src="data:application/pdf;base64,' + data['content'] + '" type="application/pdf" />';
          html += "</body>";
          html += "</html>";
          const win = window.open('', "_blank");
          win.document.write(html);
        });

  }
 
}
