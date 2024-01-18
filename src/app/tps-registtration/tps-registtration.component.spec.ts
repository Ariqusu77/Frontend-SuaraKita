import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpsRegisttrationComponent } from './tps-registtration.component';

describe('TpsRegisttrationComponent', () => {
  let component: TpsRegisttrationComponent;
  let fixture: ComponentFixture<TpsRegisttrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TpsRegisttrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TpsRegisttrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
