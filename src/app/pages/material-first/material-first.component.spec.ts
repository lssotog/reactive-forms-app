import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialFirstComponent } from './material-first.component';

describe('MaterialFirstComponent', () => {
  let component: MaterialFirstComponent;
  let fixture: ComponentFixture<MaterialFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialFirstComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
