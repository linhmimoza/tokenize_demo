
const customer = {
  phoneNo: "",
  fullName: "",
  gender: 1,
  address: "",
  city: null,
  district: null,
  ward: null,
  email: null,
  type: 1,
  dateOfBirth: null
};

const bill = {
  customerNote: "",
  saleNote: "",
  discountType: 1,
  discountAmount: 0,
  transferAmount: 0,
  creditAmount: 0,
  creditCode: "",
  installedMoneyAmount: 0,
  cashAmount: 0,
  technicalId: 1,
  cashierId: 1,
  transferAccountId: 1,
  creditAccountId: 1,
  cashAccountID: 1,
  installmentAccountId: 1,
  installMoneyCode: "",
  orderSourceId: 1,
  billItems: [
    // {
    //   productId: "53cfefdc-e9f5-4c4a-a48a-1900ab6a936b",
    //   quantity: 1,
    //   sellingPrice: 1100000,
    //   discountAmount: 10000,
    //   imeiNo: ""
    // },
    // {
    //   productId: "0081d7aa-f3b4-404b-aeab-e18acf263771",
    //   quantity: 2,
    //   sellingPrice: 18900000,
    //   discountAmount: 1,
    //   imeiNo: "356420092036755"
    // }
  ]
};


export default {
  customer, bill
};