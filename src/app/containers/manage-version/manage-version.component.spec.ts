import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVersionComponent } from './manage-version.component';

describe('ManageVersionComponent', () => {
  let component: ManageVersionComponent;
  let fixture: ComponentFixture<ManageVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageVersionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
