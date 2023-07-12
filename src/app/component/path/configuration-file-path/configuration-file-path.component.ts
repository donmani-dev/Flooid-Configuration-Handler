import { Component } from '@angular/core';

@Component({
  selector: 'app-configuration-file-path',
  templateUrl: './configuration-file-path.component.html',
  styleUrls: ['./configuration-file-path.component.css']
})
export class ConfigurationFilePathComponent {

  protected filePath: string = "";

  setFilePath(event: any)
  {
    this.filePath = event.target.value;
  }
}
