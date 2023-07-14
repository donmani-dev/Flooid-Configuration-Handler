import { Component } from '@angular/core';
import { PropertiesService } from 'src/app/providers/properties/properties.service';

@Component({
  selector: 'app-configuration-file-path',
  templateUrl: './configuration-file-path.component.html',
  styleUrls: ['./configuration-file-path.component.css']
})
export class ConfigurationFilePathComponent {

  protected filePath: string = "";
  protected error: string = "";
  protected result:any;

  constructor( private propertiesService:PropertiesService) { }

  showAllProperties()
  { 
    this.propertiesService.getProperties().subscribe(
      (result: any) => {
        if (result != null) {
          this.result=result;

          console.log(result);
        } else {
          this.error = "No Data";
        }
      },
      (error: any) => {
      }
    );
  }

  updateProperty()
  { 
    this.propertiesService.getProperties().subscribe(
      (result: any) => {
        if (result != null) {
          this.result=result;
          
          console.log(result);
        } else {
          this.error = "No Data";
        }
      },
      (error: any) => {
      }
    );
  }
  
}
