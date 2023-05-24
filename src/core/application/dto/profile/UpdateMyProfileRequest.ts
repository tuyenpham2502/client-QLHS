// export class AddressRequest {
//     address:string="";
//     isDefault:boolean=false;
//     latitude:string="";
//     longitude:string="";
//     subTitle:string="";
//     title:string="";

//     constructor(
//         address:string, 
//         isDefault:boolean, 
//         title:string, 
//         latitude?:string, 
//         longitude?:string, 
//         subTitle?:string, 

//         ) {
//         this.address=address;
//         this.isDefault=isDefault;
//         this.latitude=latitude;
//         this.longitude=longitude;
//         this.subTitle=subTitle;
//         this.title=title;
//     }
// }

export class UpdateMyProfileRequest {
    avatarPhoto: string;
    coverPhoto: string;
    firstName: string;
    gender: string;
    lastName: string;
    middleName: string;
    nickName: string;
    phoneNumber: string;
    companyName: string;
    companyAddress: string;
    dateOfBirth: string;
    taxCode: string;
    cMND: string;
    supplyDate: string;
    supplyLocation: string;
    // nameContact: string;
    // fullNameContact: string;
    // addressContact: string;
    // phoneNumberContact: string;
    // emailContact: string;
    // landlineNumberContact: string;
    // bankAccountNumber: string;
    // bankName: string;
    // branch: string;

    constructor(
        avatarPhoto: string,
        coverPhoto: string,
        firstName: string,
        gender: string,
        lastName: string,
        middleName: string,
        nickName: string,
        phoneNumber: string,
        companyName: string,
        companyAddress: string,
        dateOfBirth: string,
        taxCode: string,
        cMND: string,
        supplyDate: string,
        supplyLocation: string,
        // nameContact: string,
        // fullNameContact: string,
        // addressContact: string,
        // phoneNumberContact: string,
        // emailContact: string,
        // landlineNumberContact: string,
        // bankAccountNumber: string,
        // bankName: string,
        // branch: string,
    ) {
        this.avatarPhoto = avatarPhoto;
        this.coverPhoto = coverPhoto;
        this.firstName = firstName;
        this.gender = gender;
        this.lastName = lastName;
        this.middleName = middleName;
        this.nickName = nickName;
        this.phoneNumber = phoneNumber;
        this.companyName = companyName;
        this.companyAddress = companyAddress;
        this.dateOfBirth = dateOfBirth;
        this.taxCode = taxCode;
        this.cMND = cMND;
        this.supplyDate = supplyDate;
        this.supplyLocation = supplyLocation;
        // this.nameContact = nameContact;
        // this.fullNameContact = fullNameContact;
        // this.addressContact = addressContact;
        // this.phoneNumberContact = phoneNumberContact;
        // this.emailContact = emailContact;
        // this.landlineNumberContact = landlineNumberContact;
        // this.bankAccountNumber = bankAccountNumber;
        // this.bankName = bankName;
        // this.branch = branch;
    }
}

export class UpdateMyProfileVer2Request {
    address: string;
    avatarPhoto: string;
    bankAccounts: Array<UserBankAccountEntityInput>;
    contactProfiles: Array<UserContactProfileEntityInput>;
    cMND: string;
    coverPhoto: string;
    dateOfBirth: string;
    eInvoiceRecipient: EInvoiceRecipientEntityInput;
    fax: string;
    fieldOfActivity: string;
    gender: string;
    isPersonal: boolean;
    landlinePhone: string;
    name: string;
    note: string;
    otherAddress: string;
    phoneNumber: string;
    position: string;
    sourceFrom: string;
    supplyDate: string;
    supplyLocation: string;
    taxCode: string;
    website: string;

    constructor(
        address: string,
        avatarPhoto: string,
        bankAccounts: Array<UserBankAccountEntityInput>,
        contactProfiles: Array<UserContactProfileEntityInput>,
        coverPhoto: string,
        cMND: string,
        dateOfBirth: string,
        eInvoiceRecipient: EInvoiceRecipientEntityInput,
        fax: string,
        fieldOfActivity: string,
        gender: string,
        isPersonal: boolean,
        landlinePhone: string,
        name: string,
        note: string,
        otherAddress: string,
        phoneNumber: string,
        position: string,
        sourceFrom: string,
        supplyDate: string,
        supplyLocation: string,
        taxCode: string,
        website: string,
    ) {
        this.address = address
        this.avatarPhoto = avatarPhoto;
        this.bankAccounts = bankAccounts;
        this.contactProfiles = contactProfiles;
        this.coverPhoto = coverPhoto;
        this.cMND = cMND;
        this.dateOfBirth = dateOfBirth;
        this.eInvoiceRecipient = eInvoiceRecipient;
        this.fax = fax;
        this.fieldOfActivity = fieldOfActivity;
        this.gender = gender;
        this.isPersonal = isPersonal;
        this.landlinePhone = landlinePhone;
        this.name = name;
        this.note = note;
        this.otherAddress = otherAddress;
        this.phoneNumber = phoneNumber;
        this.position = position;
        this.sourceFrom = sourceFrom;
        this.supplyDate = supplyDate;
        this.supplyLocation = supplyLocation;
        this.taxCode = taxCode;
        this.website = website
    }
}

export class UserBankAccountEntityInput {
    accountNumber: string;
    accountOwner: string;
    bankName: string;
    branch: string;
    province: string;
    constructor(
        accountNumber: string,
        accountOwner: string,
        bankName: string,
        branch: string,
        province: string,
    ) {
        this.accountNumber = accountNumber;
        this.accountOwner = accountOwner;
        this.bankName = bankName;
        this.branch = branch;
        this.province = province;
    }
}

export class UserContactProfileEntityInput {
    email: string;
    fullName: string;
    phoneNumber: string;
    position: string;
    title: string;
    constructor(
        email: string,
        fullName: string,
        phoneNumber: string,
        position: string,
        title: string,
    ) {
        this.email = email;
        this.fullName = fullName;
        this.phoneNumber = phoneNumber;
        this.position = position;
        this.title = title;
    }
}

export class EInvoiceRecipientEntityInput {
    eInvoiceRecipientEmail: string;
    eInvoiceRecipientName: string;
    eInvoiceRecipientPhoneNumber: string;
    constructor(
        eInvoiceRecipientEmail: string,
        eInvoiceRecipientName: string,
        eInvoiceRecipientPhoneNumber: string,
    ) {
        this.eInvoiceRecipientEmail = eInvoiceRecipientEmail;
        this.eInvoiceRecipientName = eInvoiceRecipientName;
        this.eInvoiceRecipientPhoneNumber = eInvoiceRecipientPhoneNumber;
    }
}
