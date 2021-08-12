import { VND, DiscountType } from "common/AppConst";
import currencyFormatter from "currency-formatter";
import _ from 'lodash';

const formatCurrency = (product_price) => {
  if (product_price < 0) return 0 + ' ' + VND;
  return currencyFormatter.format(product_price, { code: 'VND' });
};

const calculateTotal = (data) => {
  try {
    let total = 0;
    data?.map(e => {
      total = total + e.sellingPrice * (e?.quantity || 1) - (e?.discountAmount || 0);
      if (e?.productType !== 3) {
        e?.gifts?.map(i => {
          if (!i?.isGiftTaken) total = total - (i?.repurchasePrice || 0) * (i?.quantity || 1);
        });
        e?.attachs?.map(j => {
          if (j?.isGiftTaken) total = total + (j?.repurchasePrice || j?.sellingPrice) * (j?.quantity || 1);
        });
        e?.warranty?.map(k => {
          if (k?.isGiftTaken) total = total + (k?.repurchasePrice || k?.sellingPrice) * (k?.quantity || 1);
        });
      }
    });
    // if (parseInt(billDiscount)) total = total - billDiscount;
    return total;
  } catch (error) {
    return 0;
  }
};

const calculateItemsDiscount = (data, isCheckType) => {
  try {
    let total = 0;
    data.map(e => {
      if (isCheckType) {
        total = total + (e?.sellingPrice - calculateDiscount(e?.sellingPrice, e?.discountType, e?.discountAmount, e?.quantity));
      }
      else total = total + (e?.discountAmount || 0);
    });
    return total;
  } catch {
    return 0;
  }
};

const calculateInventory = (data) => {
  try {
    let total = 0;
    data.map(e => {
      e?.gifts.map(i => {
        if (!i?.isGiftTaken) total = total + (i?.repurchasePrice || 0) * (i?.quantity || 1);
      });
    });
    return total;
  } catch {
    return 0;
  }
};

const calculateDiscount = (oldPrice, type, amount, quantity) => {
  amount = Math.abs(amount);
  if (type === DiscountType.PERCENT) {
    return (oldPrice * quantity - (oldPrice * quantity * amount / 100)) > 0 ?
      oldPrice * quantity - (oldPrice * quantity * amount / 100) : 0;
  } else if (type === DiscountType.AMOUNT) {
    return (oldPrice * quantity - amount) > 0 ? (oldPrice * quantity - amount) : 0;
  } else if (type === DiscountType.OTHER_AMOUNT) {
    return amount > oldPrice * quantity ? oldPrice * quantity : amount;
  }
};

const unMaskedCurrency = (text) => {
  text = text.replaceAll('.', '');
  return text;
};

const checkDuplicateImei = (listItem, imei) => {
  let item = listItem.find(e => (e?.imeiNo === imei && e.productType === 2 && !_.isEmpty(e?.imeiNo)));
  if (item) return true;
  return false;
};

const reCalculateDiscount = (sellingPrice, discountAmount = 0, discountType, quantity) => {
  if (discountType === DiscountType.PERCENT) {
    return discountAmount / quantity * 100 / sellingPrice;
  } else if (discountType === DiscountType.AMOUNT) {
    return discountAmount;
  } else if (discountType === DiscountType.OTHER_AMOUNT) {
    return sellingPrice * quantity - discountAmount;
  }
};

const billProductsCount = (data) => {
  let count = 0;
  data?.map(e => {
    count += e?.quantity;
  });
  return count;
};

export default {
  formatCurrency,
  calculateTotal,
  calculateDiscount,
  calculateItemsDiscount,
  calculateInventory,
  unMaskedCurrency,
  checkDuplicateImei,
  reCalculateDiscount,
  billProductsCount,
};