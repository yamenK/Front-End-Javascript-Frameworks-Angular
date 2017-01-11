/* tslint:disable:no-unused-variable */

import { TestBed, async, getTestBed } from '@angular/core/testing';
import { MenuService } from './menu.service';
import {BaseRequestOptions, Http, Response, ResponseOptions, XHRBackend} from '@angular/http'

import {MockBackend, MockConnection}from '@angular/http/testing';
var responseBody = {
  body: [
    {
      id: 0,
      name: "Uthapizza",
      image: "images/uthapizza.png",
      category: "mains",
      label: "Hot",
      price: 4.99,
      description: "A",
      comments:[{}]
    },
    {
      id: 1,
      name: "Zucchipakoda",
      image: "images/zucchipakoda.png",
      category: "mains",
      label: "New",
      price: "4.99",
      description: "A",
      comments:[{}]
    }
  ],
  status: 200
}

describe('MenuService', () => {
  let backend: MockBackend;
  let service: MenuService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        BaseRequestOptions,
        MockBackend,
        MenuService,
        {
          deps: [
            MockBackend,
            BaseRequestOptions
          ],
          provide: Http,
          useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
        }
      ]
    });

    const testbed = getTestBed();
    backend = testbed.get(MockBackend);
    service = testbed.get(MenuService);

  }));

  it('should create service ...', () => {
    expect(service).toBeTruthy();
  });

  it('should return the dishes...', () => {
    backend.connections.subscribe((connection: MockConnection) => {
      if (connection.request.url.endsWith('/dishes')) {
        const responseOptions = new ResponseOptions(responseBody);
        const response :Response = new Response(responseOptions);
        connection.mockRespond(response);
      }
    });

      service.getDishes().then(dishes =>expect(dishes.length).toBe(2));
  });
});
