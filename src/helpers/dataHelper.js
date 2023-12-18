
/* Direcciones*/

const directionsContact = {
    "value": [
        {
            "AddressDescription": "Contoso Entertainment System USA",
            "FormattedAddress": "123 Coffee Street\nSuite 300\nRedmond, WA 98052 \nUSA",
            "AddressLocationRoles": "Business",
            "IsRoleHome": "No",
            // "@odata.etag": "W/\"JzAsMjI1NjU0MjQyOTkn\"",
            // "PersonnelNumber": "000020",
            // "AddressLocationId": "000000034",
            // "Effective": "2012-09-11T18:48:45Z",
            // "AddressBuilding": "",
            // "IsPrivate": "No",
            // "IsPrimary": "No",
            // "AddressStreetInKana": "",
            // "AddressDistrictName": "",
            // "IsPrivatePostalAddress": "No",
            // "AddressCountryRegionISOCode": "US",
            // "IsRoleDelivery": "No",
            // "IsPrimaryTaxRegistration": "No",
            // "IsRoleBusiness": "Yes",
            // "AddressCountyId": "",
            // "IsPostalAddress": "Yes",
            // "AddressStreetNumber": "",
            // "DunsNumber": "",
            // "BuildingCompliment": "",
            // "AddressCity": "Redmond",
            // "AddressApartment": "",
            // "IsLocationOwner": "No",
            // "AddressPostBox": "",
            // "AddressLongitude": 0,
            // "AddressZipCode": "98052",
            // "AddressStreet": "123 Coffee Street\nSuite 300",
            // "AddressLatitude": 0,
            // "AddressCountryRegionId": "USA",
            // "AddressTimeZone": null,
            // "IsRoleInvoice": "No",
            // "AddressCityInKana": "",
            // "AttentionToAddressLine": "",
            // "Expiration": "2154-12-31T23:59:59Z",
            // "AddressState": "WA"
        },
        {
            "AddressDescription": "Home address",
            "FormattedAddress": "1613 5th Ave\nDuvall, WA 98033 \nUSA",
            "AddressLocationRoles": "Home",
            "IsRoleHome": "Yes",
            // "@odata.etag": "W/\"JzAsMjI1NjU0MjYxMDkn\"",
            // "PersonnelNumber": "000020",
            // "AddressLocationId": "000000598",
            // "Effective": "2012-09-20T21:25:38Z",
            // "AddressBuilding": "",
            // "IsPrivate": "No",
            // "IsPrimary": "Yes",
            // "AddressStreetInKana": "",
            // "AddressDistrictName": "",
            // "IsPrivatePostalAddress": "Yes",
            // "AddressCountryRegionISOCode": "US",
            // "IsRoleDelivery": "No",
            // "IsPrimaryTaxRegistration": "No",
            // "IsRoleBusiness": "No",
            // "AddressCountyId": "KING",
            // "IsPostalAddress": "Yes",
            // "AddressStreetNumber": "",
            // "DunsNumber": "",
            // "BuildingCompliment": "",
            // "AddressCity": "Duvall",
            // "AddressApartment": "",
            // "IsLocationOwner": "Yes",
            // "AddressPostBox": "",
            // "AddressLongitude": 0,
            // "AddressZipCode": "98033",
            // "AddressStreet": "1613 5th Ave",
            // "AddressLatitude": 0,
            // "AddressCountryRegionId": "USA",
            // "AddressTimeZone": null,
            // "IsRoleInvoice": "No",
            // "AddressCityInKana": "",
            // "AttentionToAddressLine": "",
            // "Expiration": "2154-12-31T23:59:59Z",
            // "AddressState": "WA"
        }
    ]
};

/*Detalles de Contacto*/

const detailsContact = {
    "@odata.context": "https://usnconeboxax1aos.cloud.onebox.dynamics.com/data/$metadata#WorkerContacts",
    "value": [
        {
            "Type": "Phone",
            "Locator": "425-555-5053",
            "Description": "Work",
            "LocatorExtension": "5053",
            "IsPrimary": "Yes",
            "IsPrivate": "No",
            "Purpose": "Home",
            // "@odata.etag": "W/\"JzAsMjI1NjU0MjQzMjYn\"",
            // "PersonnelNumber": "000020",
            // "IsMobilePhone": "No",
            // "CountryRegionCode": "",
            // "LocationId": "000000060",
        },
        {
            "Description": "Work",
            "Type": "Email",
            "Locator": "julia@contoso.com",
            "LocatorExtension": "",
            "IsPrimary": "Yes",
            "IsPrivate": "No",
            "Purpose": "Home",
            // "LocationId": "000000060",
            // "@odata.etag": "W/\"JzAsMjI1NjU0MjQzMjYn\"",
            // "PersonnelNumber": "000020",
            // "IsMobilePhone": "No",
            // "CountryRegionCode": "",
        }
    ]
};


/*Contactos Personales*/
const contactPersonal = {
    "@odata.context": "https://usnconeboxax1aos.cloud.onebox.dynamics.com/data/$metadata#PersonalContactPeople",
    "value": [
        {
            "ContactFirstName": "Juana",
            "ContactMiddleName": "Maria",
            "ContactLastName": "Ramos",
            "Name": "Juana Maria Ramos",
            "RelationshipType": "FamilyContact",
            "IsEmergencyContact": "Yes",
            "IsDependent": "No",
            "IsBeneficiary": "Yes",
            // "@odata.etag": "W/\"JzEsNjg3MTk1MjE5NTU7MSw2ODcxOTQ4MTg5NDsxLDY4NzE5NTE1NjI5OzEsNjg3MTk0NzY3NTE7MSw2ODcxOTQ3Njc1MTsxLDY4NzE5NDc2NzQyOzAsMCc=\"",
            // "WorkerPersonnelNumber": "000020",
            // "ContactPersonPartyNumber": "000002680",
            // "RelationshipValidFrom": "2023-12-13T20:25:54Z",
            // "Gender": "None",
            // "DependentCourtOrderedExpirationDate": "1900-01-01T12:00:00Z",
            // "DisabledVerificationDate": "1900-01-01T12:00:00Z",
            // "ContactLastNamePrefix": "RM",
            // "BirthDate": "1900-01-01T12:00:00Z",
            // "IsDependentDomesticPartnerVerified": "No",
            // "IsDisabled": "No",
            // "IsFulltimeStudent": "No",
            // "EmergencyContactPrimarySecondary": "Primary",
            // "RelationshipValidTo": "2154-12-31T23:59:59Z",
            // "IsDependentCourtOrdered": "No",
        }
    ]
};


/*Numeros de identificacion*/
const numbersIds = {
    "@odata.context": "https://usnconeboxax1aos.cloud.onebox.dynamics.com/data/$metadata#PersonIdentificationNumbers",
    "value": [
        {
            "IdentificationTypeId": "SSN",
            "IdentificationNumber": "999-99-9999",
            "Description": "SSN",
            "EntryType": "",
            "IsPrimary": "No",
            "IssuingAgencyId": "Government",
            "IssuedDate": "1900-01-01T12:00:00Z",
            "ExpirationDate": "1900-01-01T12:00:00Z"
            // "@odata.etag": "W/\"JzAsNTYzNzE0NTExOCc=\"",
            // "PartyNumber": "000000050",
        },
        {
            "IdentificationTypeId": "Passport",
            "IdentificationNumber": "7799897897987",
            "Description": "",
            "EntryType": "",
            "IsPrimary": "No",
            "IssuingAgencyId": "Government",
            "IssuedDate": "2017-05-17T12:00:00Z",
            "ExpirationDate": "2027-05-17T12:00:00Z"
            // "@odata.etag": "W/\"JzAsNjg3MTk0NzY5MDcn\"",
            // "PartyNumber": "000000050",
        }
    ]
};

/*Metodos de pago*/

const paymentMethods = {
    "@odata.context": "https://usnconeboxax1aos.cloud.onebox.dynamics.com/data/$metadata#WorkerBankAccounts",
    "value": [
        {
            "AccountIdentification": "Checking1",
            "Name": "CheckingDbt",
            "BankAccountType": "SavingsAccount",
            "BankAccountNumber": "999999",
            "Mount": "",
            "Rest": "",
            "Status": "",
            // "@odata.etag": "W/\"JzE4OTQ5MDM2NzYsMjI1NjU0MjEyMzA7MCwwJw==\"",
            // "PersonnelNumber": "000020",
            // "AddressBuildingCompliment": "",
            // "Extension": "",
            // "AddressDistrictName": "",
            // "AddressCountryRegionISOCode": "",
            // "AddressDescription": "",
            // "BankIBAN": "",
            // "TelexNumber": "",
            // "BranchName": "mercantil",
            // "AddressStreetNumber": "",
            // "SWIFTNo": "4555",
            // "NameOfPerson": "",
            // "AddressCity": "",
            // "RoutingNumberType": "Code_None",
            // "RoutingNumber": "974628565",
            // "AddressValidTo": "1900-01-01T00:00:00Z",
            // "AddressPostBox": "",
            // "AddressLocationId": "",
            // "AddressCounty": "",
            // "Email": "",
            // "AccountHolder": "Julia",
            // "Fax": "",
            // "AddressZipCode": "",
            // "AddressStreet": "",
            // "BranchNumber": "1",
            // "AddressCountryRegionId": "",
            // "InternetAddress": "",
            // "MobilePhone": "",
            // "BankLocationCode": "10118",
            // "AddressState": "",
            // "Telephone": "",
            // "AddressValidFrom": "1900-01-01T00:00:00Z"
        }
    ]
};

/*Payments*/
const payments = {
    "@odata.context": "https://usnconeboxax1aos.cloud.onebox.dynamics.com/data/$metadata#MyPayStatementDetails",
    "value": [
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00002710",
            "LineNum": 12,
            "PersonnelNumber": "000020",
            "Amount": 533.79,
            "Description": "FICA",
            "Type": "Taxes",
            "PaymentDate": "2016-01-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00002710",
            "LineNum": 13,
            "PersonnelNumber": "000020",
            "Amount": 1603.92,
            "Description": "Federal Income Tax",
            "Type": "Taxes",
            "PaymentDate": "2016-01-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00002710",
            "LineNum": 14,
            "PersonnelNumber": "000020",
            "Amount": 124.84,
            "Description": "Medicare",
            "Type": "Taxes",
            "PaymentDate": "2016-01-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00002710",
            "LineNum": 16,
            "PersonnelNumber": "000020",
            "Amount": 47.58,
            "Description": "Alaska SUI",
            "Type": "Taxes",
            "PaymentDate": "2016-01-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00002816",
            "LineNum": 12,
            "PersonnelNumber": "000020",
            "Amount": 533.79,
            "Description": "FICA",
            "Type": "Taxes",
            "PaymentDate": "2016-02-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00002816",
            "LineNum": 13,
            "PersonnelNumber": "000020",
            "Amount": 1603.92,
            "Description": "Federal Income Tax",
            "Type": "Taxes",
            "PaymentDate": "2016-02-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00002816",
            "LineNum": 14,
            "PersonnelNumber": "000020",
            "Amount": 124.84,
            "Description": "Medicare",
            "Type": "Taxes",
            "PaymentDate": "2016-02-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00002816",
            "LineNum": 16,
            "PersonnelNumber": "000020",
            "Amount": 47.58,
            "Description": "Alaska SUI",
            "Type": "Taxes",
            "PaymentDate": "2016-02-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00002922",
            "LineNum": 12,
            "PersonnelNumber": "000020",
            "Amount": 533.8,
            "Description": "FICA",
            "Type": "Taxes",
            "PaymentDate": "2016-02-28T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00002922",
            "LineNum": 13,
            "PersonnelNumber": "000020",
            "Amount": 1603.92,
            "Description": "Federal Income Tax",
            "Type": "Taxes",
            "PaymentDate": "2016-02-28T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00002922",
            "LineNum": 14,
            "PersonnelNumber": "000020",
            "Amount": 124.84,
            "Description": "Medicare",
            "Type": "Taxes",
            "PaymentDate": "2016-02-28T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00002922",
            "LineNum": 16,
            "PersonnelNumber": "000020",
            "Amount": 47.58,
            "Description": "Alaska SUI",
            "Type": "Taxes",
            "PaymentDate": "2016-02-28T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003028",
            "LineNum": 12,
            "PersonnelNumber": "000020",
            "Amount": 533.79,
            "Description": "FICA",
            "Type": "Taxes",
            "PaymentDate": "2016-03-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003028",
            "LineNum": 13,
            "PersonnelNumber": "000020",
            "Amount": 1603.92,
            "Description": "Federal Income Tax",
            "Type": "Taxes",
            "PaymentDate": "2016-03-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003028",
            "LineNum": 14,
            "PersonnelNumber": "000020",
            "Amount": 124.84,
            "Description": "Medicare",
            "Type": "Taxes",
            "PaymentDate": "2016-03-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003028",
            "LineNum": 16,
            "PersonnelNumber": "000020",
            "Amount": 32.85,
            "Description": "Alaska SUI",
            "Type": "Taxes",
            "PaymentDate": "2016-03-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003134",
            "LineNum": 12,
            "PersonnelNumber": "000020",
            "Amount": 533.8,
            "Description": "FICA",
            "Type": "Taxes",
            "PaymentDate": "2016-03-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003134",
            "LineNum": 13,
            "PersonnelNumber": "000020",
            "Amount": 1603.92,
            "Description": "Federal Income Tax",
            "Type": "Taxes",
            "PaymentDate": "2016-03-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003134",
            "LineNum": 14,
            "PersonnelNumber": "000020",
            "Amount": 124.83,
            "Description": "Medicare",
            "Type": "Taxes",
            "PaymentDate": "2016-03-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003240",
            "LineNum": 12,
            "PersonnelNumber": "000020",
            "Amount": 533.79,
            "Description": "FICA",
            "Type": "Taxes",
            "PaymentDate": "2016-04-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003240",
            "LineNum": 13,
            "PersonnelNumber": "000020",
            "Amount": 1603.92,
            "Description": "Federal Income Tax",
            "Type": "Taxes",
            "PaymentDate": "2016-04-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003240",
            "LineNum": 14,
            "PersonnelNumber": "000020",
            "Amount": 124.84,
            "Description": "Medicare",
            "Type": "Taxes",
            "PaymentDate": "2016-04-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003346",
            "LineNum": 12,
            "PersonnelNumber": "000020",
            "Amount": 533.79,
            "Description": "FICA",
            "Type": "Taxes",
            "PaymentDate": "2016-04-30T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003346",
            "LineNum": 13,
            "PersonnelNumber": "000020",
            "Amount": 1603.92,
            "Description": "Federal Income Tax",
            "Type": "Taxes",
            "PaymentDate": "2016-04-30T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003346",
            "LineNum": 14,
            "PersonnelNumber": "000020",
            "Amount": 124.84,
            "Description": "Medicare",
            "Type": "Taxes",
            "PaymentDate": "2016-04-30T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003452",
            "LineNum": 12,
            "PersonnelNumber": "000020",
            "Amount": 533.8,
            "Description": "FICA",
            "Type": "Taxes",
            "PaymentDate": "2016-05-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003452",
            "LineNum": 13,
            "PersonnelNumber": "000020",
            "Amount": 1603.92,
            "Description": "Federal Income Tax",
            "Type": "Taxes",
            "PaymentDate": "2016-05-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003452",
            "LineNum": 14,
            "PersonnelNumber": "000020",
            "Amount": 124.84,
            "Description": "Medicare",
            "Type": "Taxes",
            "PaymentDate": "2016-05-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003609",
            "LineNum": 12,
            "PersonnelNumber": "000020",
            "Amount": 533.79,
            "Description": "FICA",
            "Type": "Taxes",
            "PaymentDate": "2016-05-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003609",
            "LineNum": 13,
            "PersonnelNumber": "000020",
            "Amount": 1603.92,
            "Description": "Federal Income Tax",
            "Type": "Taxes",
            "PaymentDate": "2016-05-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003609",
            "LineNum": 14,
            "PersonnelNumber": "000020",
            "Amount": 124.84,
            "Description": "Medicare",
            "Type": "Taxes",
            "PaymentDate": "2016-05-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003715",
            "LineNum": 12,
            "PersonnelNumber": "000020",
            "Amount": 533.8,
            "Description": "FICA",
            "Type": "Taxes",
            "PaymentDate": "2016-06-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00002577",
            "LineNum": 17,
            "PersonnelNumber": "000020",
            "Amount": 45,
            "Description": "Alaska SUI",
            "Type": "Taxes",
            "PaymentDate": "2016-01-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00002577",
            "LineNum": 15,
            "PersonnelNumber": "000020",
            "Amount": 118.09,
            "Description": "Medicare",
            "Type": "Taxes",
            "PaymentDate": "2016-01-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00002577",
            "LineNum": 14,
            "PersonnelNumber": "000020",
            "Amount": 1477.51,
            "Description": "Federal Income Tax",
            "Type": "Taxes",
            "PaymentDate": "2016-01-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00002577",
            "LineNum": 13,
            "PersonnelNumber": "000020",
            "Amount": 504.94,
            "Description": "FICA",
            "Type": "Taxes",
            "PaymentDate": "2016-01-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003715",
            "LineNum": 13,
            "PersonnelNumber": "000020",
            "Amount": 1603.92,
            "Description": "Federal Income Tax",
            "Type": "Taxes",
            "PaymentDate": "2016-06-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003715",
            "LineNum": 14,
            "PersonnelNumber": "000020",
            "Amount": 124.84,
            "Description": "Medicare",
            "Type": "Taxes",
            "PaymentDate": "2016-06-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003821",
            "LineNum": 12,
            "PersonnelNumber": "000020",
            "Amount": 533.79,
            "Description": "FICA",
            "Type": "Taxes",
            "PaymentDate": "2016-06-30T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003821",
            "LineNum": 13,
            "PersonnelNumber": "000020",
            "Amount": 1603.92,
            "Description": "Federal Income Tax",
            "Type": "Taxes",
            "PaymentDate": "2016-06-30T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003821",
            "LineNum": 14,
            "PersonnelNumber": "000020",
            "Amount": 124.84,
            "Description": "Medicare",
            "Type": "Taxes",
            "PaymentDate": "2016-06-30T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003927",
            "LineNum": 12,
            "PersonnelNumber": "000020",
            "Amount": 533.79,
            "Description": "FICA",
            "Type": "Taxes",
            "PaymentDate": "2016-07-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003927",
            "LineNum": 13,
            "PersonnelNumber": "000020",
            "Amount": 1603.92,
            "Description": "Federal Income Tax",
            "Type": "Taxes",
            "PaymentDate": "2016-07-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003927",
            "LineNum": 14,
            "PersonnelNumber": "000020",
            "Amount": 124.84,
            "Description": "Medicare",
            "Type": "Taxes",
            "PaymentDate": "2016-07-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004033",
            "LineNum": 12,
            "PersonnelNumber": "000020",
            "Amount": 436.54,
            "Description": "FICA",
            "Type": "Taxes",
            "PaymentDate": "2016-07-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004033",
            "LineNum": 13,
            "PersonnelNumber": "000020",
            "Amount": 1603.92,
            "Description": "Federal Income Tax",
            "Type": "Taxes",
            "PaymentDate": "2016-07-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004033",
            "LineNum": 14,
            "PersonnelNumber": "000020",
            "Amount": 124.84,
            "Description": "Medicare",
            "Type": "Taxes",
            "PaymentDate": "2016-07-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004166",
            "LineNum": 11,
            "PersonnelNumber": "000020",
            "Amount": 1603.92,
            "Description": "Federal Income Tax",
            "Type": "Taxes",
            "PaymentDate": "2016-08-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004166",
            "LineNum": 12,
            "PersonnelNumber": "000020",
            "Amount": 124.83,
            "Description": "Medicare",
            "Type": "Taxes",
            "PaymentDate": "2016-08-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004272",
            "LineNum": 11,
            "PersonnelNumber": "000020",
            "Amount": 1603.92,
            "Description": "Federal Income Tax",
            "Type": "Taxes",
            "PaymentDate": "2016-08-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004272",
            "LineNum": 12,
            "PersonnelNumber": "000020",
            "Amount": 124.84,
            "Description": "Medicare",
            "Type": "Taxes",
            "PaymentDate": "2016-08-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004378",
            "LineNum": 11,
            "PersonnelNumber": "000020",
            "Amount": 1603.92,
            "Description": "Federal Income Tax",
            "Type": "Taxes",
            "PaymentDate": "2016-09-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004378",
            "LineNum": 12,
            "PersonnelNumber": "000020",
            "Amount": 124.84,
            "Description": "Medicare",
            "Type": "Taxes",
            "PaymentDate": "2016-09-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004484",
            "LineNum": 11,
            "PersonnelNumber": "000020",
            "Amount": 1603.92,
            "Description": "Federal Income Tax",
            "Type": "Taxes",
            "PaymentDate": "2016-09-30T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004484",
            "LineNum": 12,
            "PersonnelNumber": "000020",
            "Amount": 124.84,
            "Description": "Medicare",
            "Type": "Taxes",
            "PaymentDate": "2016-09-30T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004590",
            "LineNum": 11,
            "PersonnelNumber": "000020",
            "Amount": 1603.92,
            "Description": "Federal Income Tax",
            "Type": "Taxes",
            "PaymentDate": "2016-10-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004590",
            "LineNum": 12,
            "PersonnelNumber": "000020",
            "Amount": 124.84,
            "Description": "Medicare",
            "Type": "Taxes",
            "PaymentDate": "2016-10-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004747",
            "LineNum": 11,
            "PersonnelNumber": "000020",
            "Amount": 1603.92,
            "Description": "Federal Income Tax",
            "Type": "Taxes",
            "PaymentDate": "2016-10-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004747",
            "LineNum": 12,
            "PersonnelNumber": "000020",
            "Amount": 124.84,
            "Description": "Medicare",
            "Type": "Taxes",
            "PaymentDate": "2016-10-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004853",
            "LineNum": 11,
            "PersonnelNumber": "000020",
            "Amount": 1603.92,
            "Description": "Federal Income Tax",
            "Type": "Taxes",
            "PaymentDate": "2016-11-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004853",
            "LineNum": 12,
            "PersonnelNumber": "000020",
            "Amount": 124.84,
            "Description": "Medicare",
            "Type": "Taxes",
            "PaymentDate": "2016-11-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004959",
            "LineNum": 11,
            "PersonnelNumber": "000020",
            "Amount": 1603.92,
            "Description": "Federal Income Tax",
            "Type": "Taxes",
            "PaymentDate": "2016-11-30T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004959",
            "LineNum": 12,
            "PersonnelNumber": "000020",
            "Amount": 124.84,
            "Description": "Medicare",
            "Type": "Taxes",
            "PaymentDate": "2016-11-30T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00005065",
            "LineNum": 11,
            "PersonnelNumber": "000020",
            "Amount": 1603.92,
            "Description": "Federal Income Tax",
            "Type": "Taxes",
            "PaymentDate": "2016-12-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00005065",
            "LineNum": 12,
            "PersonnelNumber": "000020",
            "Amount": 124.84,
            "Description": "Medicare",
            "Type": "Taxes",
            "PaymentDate": "2016-12-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00005171",
            "LineNum": 11,
            "PersonnelNumber": "000020",
            "Amount": 1603.92,
            "Description": "Federal Income Tax",
            "Type": "Taxes",
            "PaymentDate": "2016-12-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00005171",
            "LineNum": 12,
            "PersonnelNumber": "000020",
            "Amount": 124.83,
            "Description": "Medicare",
            "Type": "Taxes",
            "PaymentDate": "2016-12-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00005171",
            "LineNum": 13,
            "PersonnelNumber": "000020",
            "Amount": 55.48,
            "Description": "Additional Medicare Tax for High Income",
            "Type": "Taxes",
            "PaymentDate": "2016-12-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00002816",
            "LineNum": 1,
            "PersonnelNumber": "000020",
            "Amount": 8758.33,
            "Description": "Regular",
            "Type": "Earnings",
            "PaymentDate": "2016-02-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00002710",
            "LineNum": 1,
            "PersonnelNumber": "000020",
            "Amount": 8758.33,
            "Description": "Regular",
            "Type": "Earnings",
            "PaymentDate": "2016-01-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00002577",
            "LineNum": 1,
            "PersonnelNumber": "000020",
            "Amount": 8292.88,
            "Description": "Regular",
            "Type": "Earnings",
            "PaymentDate": "2016-01-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00005171",
            "LineNum": 1,
            "PersonnelNumber": "000020",
            "Amount": 8758.33,
            "Description": "Regular",
            "Type": "Earnings",
            "PaymentDate": "2016-12-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00005065",
            "LineNum": 1,
            "PersonnelNumber": "000020",
            "Amount": 8758.33,
            "Description": "Regular",
            "Type": "Earnings",
            "PaymentDate": "2016-12-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004959",
            "LineNum": 1,
            "PersonnelNumber": "000020",
            "Amount": 8758.33,
            "Description": "Regular",
            "Type": "Earnings",
            "PaymentDate": "2016-11-30T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004853",
            "LineNum": 1,
            "PersonnelNumber": "000020",
            "Amount": 8758.33,
            "Description": "Regular",
            "Type": "Earnings",
            "PaymentDate": "2016-11-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004747",
            "LineNum": 1,
            "PersonnelNumber": "000020",
            "Amount": 8758.33,
            "Description": "Regular",
            "Type": "Earnings",
            "PaymentDate": "2016-10-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004590",
            "LineNum": 1,
            "PersonnelNumber": "000020",
            "Amount": 8758.33,
            "Description": "Regular",
            "Type": "Earnings",
            "PaymentDate": "2016-10-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004484",
            "LineNum": 1,
            "PersonnelNumber": "000020",
            "Amount": 8758.33,
            "Description": "Regular",
            "Type": "Earnings",
            "PaymentDate": "2016-09-30T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004378",
            "LineNum": 1,
            "PersonnelNumber": "000020",
            "Amount": 8758.33,
            "Description": "Regular",
            "Type": "Earnings",
            "PaymentDate": "2016-09-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004272",
            "LineNum": 1,
            "PersonnelNumber": "000020",
            "Amount": 8758.33,
            "Description": "Regular",
            "Type": "Earnings",
            "PaymentDate": "2016-08-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004166",
            "LineNum": 1,
            "PersonnelNumber": "000020",
            "Amount": 8758.33,
            "Description": "Regular",
            "Type": "Earnings",
            "PaymentDate": "2016-08-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004033",
            "LineNum": 1,
            "PersonnelNumber": "000020",
            "Amount": 8758.33,
            "Description": "Regular",
            "Type": "Earnings",
            "PaymentDate": "2016-07-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003927",
            "LineNum": 1,
            "PersonnelNumber": "000020",
            "Amount": 8758.33,
            "Description": "Regular",
            "Type": "Earnings",
            "PaymentDate": "2016-07-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003821",
            "LineNum": 1,
            "PersonnelNumber": "000020",
            "Amount": 8758.33,
            "Description": "Regular",
            "Type": "Earnings",
            "PaymentDate": "2016-06-30T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003715",
            "LineNum": 1,
            "PersonnelNumber": "000020",
            "Amount": 8758.33,
            "Description": "Regular",
            "Type": "Earnings",
            "PaymentDate": "2016-06-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003609",
            "LineNum": 1,
            "PersonnelNumber": "000020",
            "Amount": 8758.33,
            "Description": "Regular",
            "Type": "Earnings",
            "PaymentDate": "2016-05-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003452",
            "LineNum": 1,
            "PersonnelNumber": "000020",
            "Amount": 8758.33,
            "Description": "Regular",
            "Type": "Earnings",
            "PaymentDate": "2016-05-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003346",
            "LineNum": 1,
            "PersonnelNumber": "000020",
            "Amount": 8758.33,
            "Description": "Regular",
            "Type": "Earnings",
            "PaymentDate": "2016-04-30T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003240",
            "LineNum": 1,
            "PersonnelNumber": "000020",
            "Amount": 8758.33,
            "Description": "Regular",
            "Type": "Earnings",
            "PaymentDate": "2016-04-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003134",
            "LineNum": 1,
            "PersonnelNumber": "000020",
            "Amount": 8758.33,
            "Description": "Regular",
            "Type": "Earnings",
            "PaymentDate": "2016-03-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003028",
            "LineNum": 1,
            "PersonnelNumber": "000020",
            "Amount": 8758.33,
            "Description": "Regular",
            "Type": "Earnings",
            "PaymentDate": "2016-03-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00002922",
            "LineNum": 1,
            "PersonnelNumber": "000020",
            "Amount": 8758.33,
            "Description": "Regular",
            "Type": "Earnings",
            "PaymentDate": "2016-02-28T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00002577",
            "LineNum": 2,
            "PersonnelNumber": "000020",
            "Amount": 248.79,
            "Description": "401k",
            "Type": "Benefits",
            "PaymentDate": "2016-01-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00002577",
            "LineNum": 4,
            "PersonnelNumber": "000020",
            "Amount": 20,
            "Description": "Dental",
            "Type": "Benefits",
            "PaymentDate": "2016-01-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00002577",
            "LineNum": 6,
            "PersonnelNumber": "000020",
            "Amount": 118.75,
            "Description": "Medical HMO",
            "Type": "Benefits",
            "PaymentDate": "2016-01-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00002577",
            "LineNum": 8,
            "PersonnelNumber": "000020",
            "Amount": 10,
            "Description": "Vision",
            "Type": "Benefits",
            "PaymentDate": "2016-01-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00002710",
            "LineNum": 2,
            "PersonnelNumber": "000020",
            "Amount": 262.75,
            "Description": "401k",
            "Type": "Benefits",
            "PaymentDate": "2016-01-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00002710",
            "LineNum": 4,
            "PersonnelNumber": "000020",
            "Amount": 20,
            "Description": "Dental",
            "Type": "Benefits",
            "PaymentDate": "2016-01-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00002710",
            "LineNum": 6,
            "PersonnelNumber": "000020",
            "Amount": 118.75,
            "Description": "Medical HMO",
            "Type": "Benefits",
            "PaymentDate": "2016-01-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00002710",
            "LineNum": 8,
            "PersonnelNumber": "000020",
            "Amount": 10,
            "Description": "Vision",
            "Type": "Benefits",
            "PaymentDate": "2016-01-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00002816",
            "LineNum": 2,
            "PersonnelNumber": "000020",
            "Amount": 262.75,
            "Description": "401k",
            "Type": "Benefits",
            "PaymentDate": "2016-02-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00002816",
            "LineNum": 4,
            "PersonnelNumber": "000020",
            "Amount": 20,
            "Description": "Dental",
            "Type": "Benefits",
            "PaymentDate": "2016-02-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00002816",
            "LineNum": 6,
            "PersonnelNumber": "000020",
            "Amount": 118.75,
            "Description": "Medical HMO",
            "Type": "Benefits",
            "PaymentDate": "2016-02-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00002816",
            "LineNum": 8,
            "PersonnelNumber": "000020",
            "Amount": 10,
            "Description": "Vision",
            "Type": "Benefits",
            "PaymentDate": "2016-02-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00002922",
            "LineNum": 2,
            "PersonnelNumber": "000020",
            "Amount": 262.75,
            "Description": "401k",
            "Type": "Benefits",
            "PaymentDate": "2016-02-28T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00002922",
            "LineNum": 4,
            "PersonnelNumber": "000020",
            "Amount": 20,
            "Description": "Dental",
            "Type": "Benefits",
            "PaymentDate": "2016-02-28T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00002922",
            "LineNum": 6,
            "PersonnelNumber": "000020",
            "Amount": 118.75,
            "Description": "Medical HMO",
            "Type": "Benefits",
            "PaymentDate": "2016-02-28T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00002922",
            "LineNum": 8,
            "PersonnelNumber": "000020",
            "Amount": 10,
            "Description": "Vision",
            "Type": "Benefits",
            "PaymentDate": "2016-02-28T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003028",
            "LineNum": 2,
            "PersonnelNumber": "000020",
            "Amount": 262.75,
            "Description": "401k",
            "Type": "Benefits",
            "PaymentDate": "2016-03-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003028",
            "LineNum": 4,
            "PersonnelNumber": "000020",
            "Amount": 20,
            "Description": "Dental",
            "Type": "Benefits",
            "PaymentDate": "2016-03-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003028",
            "LineNum": 6,
            "PersonnelNumber": "000020",
            "Amount": 118.75,
            "Description": "Medical HMO",
            "Type": "Benefits",
            "PaymentDate": "2016-03-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003028",
            "LineNum": 8,
            "PersonnelNumber": "000020",
            "Amount": 10,
            "Description": "Vision",
            "Type": "Benefits",
            "PaymentDate": "2016-03-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003134",
            "LineNum": 2,
            "PersonnelNumber": "000020",
            "Amount": 262.75,
            "Description": "401k",
            "Type": "Benefits",
            "PaymentDate": "2016-03-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003134",
            "LineNum": 4,
            "PersonnelNumber": "000020",
            "Amount": 20,
            "Description": "Dental",
            "Type": "Benefits",
            "PaymentDate": "2016-03-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003134",
            "LineNum": 6,
            "PersonnelNumber": "000020",
            "Amount": 118.75,
            "Description": "Medical HMO",
            "Type": "Benefits",
            "PaymentDate": "2016-03-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003134",
            "LineNum": 8,
            "PersonnelNumber": "000020",
            "Amount": 10,
            "Description": "Vision",
            "Type": "Benefits",
            "PaymentDate": "2016-03-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003240",
            "LineNum": 2,
            "PersonnelNumber": "000020",
            "Amount": 262.75,
            "Description": "401k",
            "Type": "Benefits",
            "PaymentDate": "2016-04-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003240",
            "LineNum": 4,
            "PersonnelNumber": "000020",
            "Amount": 20,
            "Description": "Dental",
            "Type": "Benefits",
            "PaymentDate": "2016-04-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003240",
            "LineNum": 6,
            "PersonnelNumber": "000020",
            "Amount": 118.75,
            "Description": "Medical HMO",
            "Type": "Benefits",
            "PaymentDate": "2016-04-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003240",
            "LineNum": 8,
            "PersonnelNumber": "000020",
            "Amount": 10,
            "Description": "Vision",
            "Type": "Benefits",
            "PaymentDate": "2016-04-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003346",
            "LineNum": 2,
            "PersonnelNumber": "000020",
            "Amount": 262.75,
            "Description": "401k",
            "Type": "Benefits",
            "PaymentDate": "2016-04-30T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003346",
            "LineNum": 4,
            "PersonnelNumber": "000020",
            "Amount": 20,
            "Description": "Dental",
            "Type": "Benefits",
            "PaymentDate": "2016-04-30T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003346",
            "LineNum": 6,
            "PersonnelNumber": "000020",
            "Amount": 118.75,
            "Description": "Medical HMO",
            "Type": "Benefits",
            "PaymentDate": "2016-04-30T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003346",
            "LineNum": 8,
            "PersonnelNumber": "000020",
            "Amount": 10,
            "Description": "Vision",
            "Type": "Benefits",
            "PaymentDate": "2016-04-30T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003452",
            "LineNum": 2,
            "PersonnelNumber": "000020",
            "Amount": 262.75,
            "Description": "401k",
            "Type": "Benefits",
            "PaymentDate": "2016-05-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003452",
            "LineNum": 4,
            "PersonnelNumber": "000020",
            "Amount": 20,
            "Description": "Dental",
            "Type": "Benefits",
            "PaymentDate": "2016-05-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003452",
            "LineNum": 6,
            "PersonnelNumber": "000020",
            "Amount": 118.75,
            "Description": "Medical HMO",
            "Type": "Benefits",
            "PaymentDate": "2016-05-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003452",
            "LineNum": 8,
            "PersonnelNumber": "000020",
            "Amount": 10,
            "Description": "Vision",
            "Type": "Benefits",
            "PaymentDate": "2016-05-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003609",
            "LineNum": 2,
            "PersonnelNumber": "000020",
            "Amount": 262.75,
            "Description": "401k",
            "Type": "Benefits",
            "PaymentDate": "2016-05-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003609",
            "LineNum": 4,
            "PersonnelNumber": "000020",
            "Amount": 20,
            "Description": "Dental",
            "Type": "Benefits",
            "PaymentDate": "2016-05-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003609",
            "LineNum": 6,
            "PersonnelNumber": "000020",
            "Amount": 118.75,
            "Description": "Medical HMO",
            "Type": "Benefits",
            "PaymentDate": "2016-05-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003609",
            "LineNum": 8,
            "PersonnelNumber": "000020",
            "Amount": 10,
            "Description": "Vision",
            "Type": "Benefits",
            "PaymentDate": "2016-05-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003715",
            "LineNum": 2,
            "PersonnelNumber": "000020",
            "Amount": 262.75,
            "Description": "401k",
            "Type": "Benefits",
            "PaymentDate": "2016-06-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003715",
            "LineNum": 4,
            "PersonnelNumber": "000020",
            "Amount": 20,
            "Description": "Dental",
            "Type": "Benefits",
            "PaymentDate": "2016-06-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003715",
            "LineNum": 6,
            "PersonnelNumber": "000020",
            "Amount": 118.75,
            "Description": "Medical HMO",
            "Type": "Benefits",
            "PaymentDate": "2016-06-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003715",
            "LineNum": 8,
            "PersonnelNumber": "000020",
            "Amount": 10,
            "Description": "Vision",
            "Type": "Benefits",
            "PaymentDate": "2016-06-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003821",
            "LineNum": 2,
            "PersonnelNumber": "000020",
            "Amount": 262.75,
            "Description": "401k",
            "Type": "Benefits",
            "PaymentDate": "2016-06-30T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003821",
            "LineNum": 4,
            "PersonnelNumber": "000020",
            "Amount": 20,
            "Description": "Dental",
            "Type": "Benefits",
            "PaymentDate": "2016-06-30T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003821",
            "LineNum": 6,
            "PersonnelNumber": "000020",
            "Amount": 118.75,
            "Description": "Medical HMO",
            "Type": "Benefits",
            "PaymentDate": "2016-06-30T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003821",
            "LineNum": 8,
            "PersonnelNumber": "000020",
            "Amount": 10,
            "Description": "Vision",
            "Type": "Benefits",
            "PaymentDate": "2016-06-30T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003927",
            "LineNum": 2,
            "PersonnelNumber": "000020",
            "Amount": 262.75,
            "Description": "401k",
            "Type": "Benefits",
            "PaymentDate": "2016-07-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003927",
            "LineNum": 4,
            "PersonnelNumber": "000020",
            "Amount": 20,
            "Description": "Dental",
            "Type": "Benefits",
            "PaymentDate": "2016-07-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003927",
            "LineNum": 6,
            "PersonnelNumber": "000020",
            "Amount": 118.75,
            "Description": "Medical HMO",
            "Type": "Benefits",
            "PaymentDate": "2016-07-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00003927",
            "LineNum": 8,
            "PersonnelNumber": "000020",
            "Amount": 10,
            "Description": "Vision",
            "Type": "Benefits",
            "PaymentDate": "2016-07-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004033",
            "LineNum": 2,
            "PersonnelNumber": "000020",
            "Amount": 262.75,
            "Description": "401k",
            "Type": "Benefits",
            "PaymentDate": "2016-07-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004033",
            "LineNum": 4,
            "PersonnelNumber": "000020",
            "Amount": 20,
            "Description": "Dental",
            "Type": "Benefits",
            "PaymentDate": "2016-07-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004033",
            "LineNum": 6,
            "PersonnelNumber": "000020",
            "Amount": 118.75,
            "Description": "Medical HMO",
            "Type": "Benefits",
            "PaymentDate": "2016-07-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004033",
            "LineNum": 8,
            "PersonnelNumber": "000020",
            "Amount": 10,
            "Description": "Vision",
            "Type": "Benefits",
            "PaymentDate": "2016-07-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004166",
            "LineNum": 2,
            "PersonnelNumber": "000020",
            "Amount": 262.75,
            "Description": "401k",
            "Type": "Benefits",
            "PaymentDate": "2016-08-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004166",
            "LineNum": 4,
            "PersonnelNumber": "000020",
            "Amount": 20,
            "Description": "Dental",
            "Type": "Benefits",
            "PaymentDate": "2016-08-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004166",
            "LineNum": 6,
            "PersonnelNumber": "000020",
            "Amount": 118.75,
            "Description": "Medical HMO",
            "Type": "Benefits",
            "PaymentDate": "2016-08-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004166",
            "LineNum": 8,
            "PersonnelNumber": "000020",
            "Amount": 10,
            "Description": "Vision",
            "Type": "Benefits",
            "PaymentDate": "2016-08-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004272",
            "LineNum": 2,
            "PersonnelNumber": "000020",
            "Amount": 262.75,
            "Description": "401k",
            "Type": "Benefits",
            "PaymentDate": "2016-08-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004272",
            "LineNum": 4,
            "PersonnelNumber": "000020",
            "Amount": 20,
            "Description": "Dental",
            "Type": "Benefits",
            "PaymentDate": "2016-08-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004272",
            "LineNum": 6,
            "PersonnelNumber": "000020",
            "Amount": 118.75,
            "Description": "Medical HMO",
            "Type": "Benefits",
            "PaymentDate": "2016-08-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004272",
            "LineNum": 8,
            "PersonnelNumber": "000020",
            "Amount": 10,
            "Description": "Vision",
            "Type": "Benefits",
            "PaymentDate": "2016-08-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004378",
            "LineNum": 2,
            "PersonnelNumber": "000020",
            "Amount": 262.75,
            "Description": "401k",
            "Type": "Benefits",
            "PaymentDate": "2016-09-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004378",
            "LineNum": 4,
            "PersonnelNumber": "000020",
            "Amount": 20,
            "Description": "Dental",
            "Type": "Benefits",
            "PaymentDate": "2016-09-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004378",
            "LineNum": 6,
            "PersonnelNumber": "000020",
            "Amount": 118.75,
            "Description": "Medical HMO",
            "Type": "Benefits",
            "PaymentDate": "2016-09-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004378",
            "LineNum": 8,
            "PersonnelNumber": "000020",
            "Amount": 10,
            "Description": "Vision",
            "Type": "Benefits",
            "PaymentDate": "2016-09-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004484",
            "LineNum": 2,
            "PersonnelNumber": "000020",
            "Amount": 262.75,
            "Description": "401k",
            "Type": "Benefits",
            "PaymentDate": "2016-09-30T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004484",
            "LineNum": 4,
            "PersonnelNumber": "000020",
            "Amount": 20,
            "Description": "Dental",
            "Type": "Benefits",
            "PaymentDate": "2016-09-30T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004484",
            "LineNum": 6,
            "PersonnelNumber": "000020",
            "Amount": 118.75,
            "Description": "Medical HMO",
            "Type": "Benefits",
            "PaymentDate": "2016-09-30T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004484",
            "LineNum": 8,
            "PersonnelNumber": "000020",
            "Amount": 10,
            "Description": "Vision",
            "Type": "Benefits",
            "PaymentDate": "2016-09-30T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004590",
            "LineNum": 2,
            "PersonnelNumber": "000020",
            "Amount": 262.75,
            "Description": "401k",
            "Type": "Benefits",
            "PaymentDate": "2016-10-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004590",
            "LineNum": 4,
            "PersonnelNumber": "000020",
            "Amount": 20,
            "Description": "Dental",
            "Type": "Benefits",
            "PaymentDate": "2016-10-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004590",
            "LineNum": 6,
            "PersonnelNumber": "000020",
            "Amount": 118.75,
            "Description": "Medical HMO",
            "Type": "Benefits",
            "PaymentDate": "2016-10-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004590",
            "LineNum": 8,
            "PersonnelNumber": "000020",
            "Amount": 10,
            "Description": "Vision",
            "Type": "Benefits",
            "PaymentDate": "2016-10-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004747",
            "LineNum": 2,
            "PersonnelNumber": "000020",
            "Amount": 262.75,
            "Description": "401k",
            "Type": "Benefits",
            "PaymentDate": "2016-10-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004747",
            "LineNum": 4,
            "PersonnelNumber": "000020",
            "Amount": 20,
            "Description": "Dental",
            "Type": "Benefits",
            "PaymentDate": "2016-10-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004747",
            "LineNum": 6,
            "PersonnelNumber": "000020",
            "Amount": 118.75,
            "Description": "Medical HMO",
            "Type": "Benefits",
            "PaymentDate": "2016-10-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004747",
            "LineNum": 8,
            "PersonnelNumber": "000020",
            "Amount": 10,
            "Description": "Vision",
            "Type": "Benefits",
            "PaymentDate": "2016-10-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004853",
            "LineNum": 2,
            "PersonnelNumber": "000020",
            "Amount": 262.75,
            "Description": "401k",
            "Type": "Benefits",
            "PaymentDate": "2016-11-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004853",
            "LineNum": 4,
            "PersonnelNumber": "000020",
            "Amount": 20,
            "Description": "Dental",
            "Type": "Benefits",
            "PaymentDate": "2016-11-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004853",
            "LineNum": 6,
            "PersonnelNumber": "000020",
            "Amount": 118.75,
            "Description": "Medical HMO",
            "Type": "Benefits",
            "PaymentDate": "2016-11-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004853",
            "LineNum": 8,
            "PersonnelNumber": "000020",
            "Amount": 10,
            "Description": "Vision",
            "Type": "Benefits",
            "PaymentDate": "2016-11-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004959",
            "LineNum": 2,
            "PersonnelNumber": "000020",
            "Amount": 262.75,
            "Description": "401k",
            "Type": "Benefits",
            "PaymentDate": "2016-11-30T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004959",
            "LineNum": 4,
            "PersonnelNumber": "000020",
            "Amount": 20,
            "Description": "Dental",
            "Type": "Benefits",
            "PaymentDate": "2016-11-30T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004959",
            "LineNum": 6,
            "PersonnelNumber": "000020",
            "Amount": 118.75,
            "Description": "Medical HMO",
            "Type": "Benefits",
            "PaymentDate": "2016-11-30T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00004959",
            "LineNum": 8,
            "PersonnelNumber": "000020",
            "Amount": 10,
            "Description": "Vision",
            "Type": "Benefits",
            "PaymentDate": "2016-11-30T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00005065",
            "LineNum": 2,
            "PersonnelNumber": "000020",
            "Amount": 262.75,
            "Description": "401k",
            "Type": "Benefits",
            "PaymentDate": "2016-12-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00005065",
            "LineNum": 4,
            "PersonnelNumber": "000020",
            "Amount": 20,
            "Description": "Dental",
            "Type": "Benefits",
            "PaymentDate": "2016-12-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00005065",
            "LineNum": 6,
            "PersonnelNumber": "000020",
            "Amount": 118.75,
            "Description": "Medical HMO",
            "Type": "Benefits",
            "PaymentDate": "2016-12-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00005065",
            "LineNum": 8,
            "PersonnelNumber": "000020",
            "Amount": 10,
            "Description": "Vision",
            "Type": "Benefits",
            "PaymentDate": "2016-12-15T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00005171",
            "LineNum": 2,
            "PersonnelNumber": "000020",
            "Amount": 262.75,
            "Description": "401k",
            "Type": "Benefits",
            "PaymentDate": "2016-12-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00005171",
            "LineNum": 4,
            "PersonnelNumber": "000020",
            "Amount": 20,
            "Description": "Dental",
            "Type": "Benefits",
            "PaymentDate": "2016-12-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00005171",
            "LineNum": 6,
            "PersonnelNumber": "000020",
            "Amount": 118.75,
            "Description": "Medical HMO",
            "Type": "Benefits",
            "PaymentDate": "2016-12-31T12:00:00Z"
        },
        {
            "dataAreaId": "usmf",
            "PayStatementNumber": "USMF-00005171",
            "LineNum": 8,
            "PersonnelNumber": "000020",
            "Amount": 10,
            "Description": "Vision",
            "Type": "Benefits",
            "PaymentDate": "2016-12-31T12:00:00Z"
        }
    ]
};

/*Home*/

const homeData = {
    "@odata.context": "https://usnconeboxax1aos.cloud.onebox.dynamics.com/data/$metadata#EssLeaveTimeOffDates",
    "value": [
        {
            "@odata.etag": "W/\"JzAsNTYzNzE0NTMzOSc=\"",
            "dataAreaId": "usmf",
            "LeaveDate": "2017-01-02T12:00:00Z",
            "PersonnelNumber": "000020",
            "LeaveTypeId": "PTO",
            "Amount": 8,
            "HalfDayDefinition": "None"
        },
        {
            "@odata.etag": "W/\"JzAsNTYzNzE0NTMzOSc=\"",
            "dataAreaId": "usmf",
            "LeaveDate": "2017-01-03T12:00:00Z",
            "PersonnelNumber": "000020",
            "LeaveTypeId": "PTO",
            "Amount": 8,
            "HalfDayDefinition": "None"
        },
        {
            "@odata.etag": "W/\"JzAsNTYzNzE0NTMzOSc=\"",
            "dataAreaId": "usmf",
            "LeaveDate": "2017-01-04T12:00:00Z",
            "PersonnelNumber": "000020",
            "LeaveTypeId": "PTO",
            "Amount": 8,
            "HalfDayDefinition": "None"
        },
        {
            "@odata.etag": "W/\"JzAsNTYzNzE0NTMzOSc=\"",
            "dataAreaId": "usmf",
            "LeaveDate": "2017-01-05T12:00:00Z",
            "PersonnelNumber": "000020",
            "LeaveTypeId": "PTO",
            "Amount": 8,
            "HalfDayDefinition": "None"
        },
        {
            "@odata.etag": "W/\"JzAsNTYzNzE0NTMzOSc=\"",
            "dataAreaId": "usmf",
            "LeaveDate": "2017-01-06T12:00:00Z",
            "PersonnelNumber": "000020",
            "LeaveTypeId": "PTO",
            "Amount": 8,
            "HalfDayDefinition": "None"
        },
        {
            "@odata.etag": "W/\"JzAsNTYzNzE0NTM0MCc=\"",
            "dataAreaId": "usmf",
            "LeaveDate": "2017-01-30T12:00:00Z",
            "PersonnelNumber": "000020",
            "LeaveTypeId": "Sick",
            "Amount": 8,
            "HalfDayDefinition": "None"
        },
        {
            "@odata.etag": "W/\"JzAsNTYzNzE0NTM0MCc=\"",
            "dataAreaId": "usmf",
            "LeaveDate": "2017-01-31T12:00:00Z",
            "PersonnelNumber": "000020",
            "LeaveTypeId": "Sick",
            "Amount": 8,
            "HalfDayDefinition": "None"
        },
        {
            "@odata.etag": "W/\"JzAsNTYzNzE0NTM0MCc=\"",
            "dataAreaId": "usmf",
            "LeaveDate": "2017-02-01T12:00:00Z",
            "PersonnelNumber": "000020",
            "LeaveTypeId": "Sick",
            "Amount": 8,
            "HalfDayDefinition": "None"
        }
    ]
};

export {
    directionsContact,
    detailsContact,
    contactPersonal,
    numbersIds,
    paymentMethods,
    payments,
    homeData,
}