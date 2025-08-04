import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Flower } from './flower';

describe('Flower', () => {
  let component: Flower;
  let fixture: ComponentFixture<Flower>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Flower]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Flower);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
