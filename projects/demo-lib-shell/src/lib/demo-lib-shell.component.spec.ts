import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoLibShellComponent } from './demo-lib-shell.component';

describe('DemoLibShellComponent', () => {
  let component: DemoLibShellComponent;
  let fixture: ComponentFixture<DemoLibShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoLibShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoLibShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
