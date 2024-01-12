import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCardBaseComponent } from './select-card-base.component';

describe('SelectCardBaseComponent', () => {
  let component: SelectCardBaseComponent;
  let fixture: ComponentFixture<SelectCardBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectCardBaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectCardBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
