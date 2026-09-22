import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZocalonosotrosComponent } from './zocalonosotros.component';

describe('ZocalonosotrosComponent', () => {
  let component: ZocalonosotrosComponent;
  let fixture: ComponentFixture<ZocalonosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZocalonosotrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZocalonosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
