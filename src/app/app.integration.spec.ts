import { Component, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";


@Component({
  selector: 'app-people'
})
class PeopleComponent {}

@Component({
  selector: 'app-others'
})
class OthersComponent {}

@Component({
  selector: 'app-pico-preview'
})
class PicoPreviewComponent {}

const routes = [
  {
    path: 'pico-preview',
    component: PicoPreviewComponent
  },
  {
    path: 'people',
    component: PeopleComponent
  },
  {
    path: 'others',
    component: OthersComponent
  },
]

fdescribe('App Integration test', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [
        AppComponent,
        PeopleComponent,
        PicoPreviewComponent,
        OthersComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(fakeAsync(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // providers
    router = TestBed.inject(Router);

    router.initialNavigation();

    tick(); // wait while nav...
    fixture.detectChanges();
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

});
