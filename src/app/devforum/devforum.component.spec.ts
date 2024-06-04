import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevforumComponent } from './devforum.component';

describe('DevforumComponent', () => {
  let component: DevforumComponent;
  let fixture: ComponentFixture<DevforumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevforumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevforumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
