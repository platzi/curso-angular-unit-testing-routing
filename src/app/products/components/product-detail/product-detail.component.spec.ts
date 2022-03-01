import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ActivatedRouteStub, mockObservable } from '../../../../testing';
import { ProductsService } from '../../../services/product.service';
import { generateOneProduct } from '../../../models/product.mock';

import { ProductDetailComponent } from './product-detail.component';

fdescribe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;
  let route: ActivatedRouteStub;
  let productsService: jasmine.SpyObj<ProductsService>;
  let location: jasmine.SpyObj<Location>;

  beforeEach(async () => {
    const routeStub = new ActivatedRouteStub();
    const productServiceSpy = jasmine.createSpyObj('ProductsService', ['getOne']);
    const locationSpy = jasmine.createSpyObj('Location', ['back']);

    await TestBed.configureTestingModule({
      declarations: [ ProductDetailComponent ],
      providers: [
        { provide:  ActivatedRoute, useValue: routeStub },
        { provide:  ProductsService, useValue: productServiceSpy },
        { provide:  Location, useValue: locationSpy },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    route = TestBed.inject(ActivatedRoute) as unknown as ActivatedRouteStub;
    productsService = TestBed.inject(ProductsService) as jasmine.SpyObj<ProductsService>;
    location = TestBed.inject(Location) as jasmine.SpyObj<Location>;

    const productId = '1';
    route.setParamMap({ id: productId });

    const productMock = {
      ...generateOneProduct(),
      id: productId,
    }

    productsService.getOne.and.returnValue(mockObservable(productMock));

    fixture.detectChanges(); //ngOnInit
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
