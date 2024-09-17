import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CredentialService } from './credential.service';

describe('CredentialService', () => {
  let service: CredentialService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CredentialService]
    });
    service = TestBed.inject(CredentialService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch credentials', () => {
    const mockResponse = { credential: 'credentialData' };
    const customerName = 'John Doe';
    const countryCode = 'US';
    const customerDID = 'did:example:123';

    service.getCredential(customerName, countryCode, customerDID).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${service['baseUrl']}?name=${customerName}&country=${countryCode}&did=${customerDID}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
