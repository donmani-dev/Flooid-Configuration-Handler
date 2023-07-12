import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationFilePathComponent } from './configuration-file-path.component';

describe('ConfigurationFilePathComponent', () => {
  let component: ConfigurationFilePathComponent;
  let fixture: ComponentFixture<ConfigurationFilePathComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigurationFilePathComponent]
    });
    fixture = TestBed.createComponent(ConfigurationFilePathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
