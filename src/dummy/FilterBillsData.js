const BillsTypeData = [
  { value: 1, name: 'Bán lẻ', ic: require('../../assets/icons/shopping_basket.png') },
  { value: 2, name: 'Bán buôn', ic: require('../../assets/icons/code.png') },
  { value: 3, name: 'Trả hàng', ic: require('../../assets/icons/shopping_cart.png') },
  { value: '', name: 'Tất cả loại', ic: require('../../assets/icons/category.png') },
];

const BillsTimeData = [
  { value: '', name: 'Tất cả' },
  { value: 1, name: 'Hôm nay' },
  { value: 2, name: '3 ngày trước' },
  { value: 3, name: 'Hơn 3 ngày trước' },
];

const ImeiHistoryStatus = [
  { value: 1, name: 'Mới', ic: require('../../assets/icons/shopping_basket.png') },
  { value: 2, name: 'Đã bán', ic: require('../../assets/icons/shopping_basket.png') },
  { value: 3, name: 'Đang vận chuyển', ic: require('../../assets/icons/shopping_basket.png') },
  { value: 4, name: 'Lỗi', ic: require('../../assets/icons/shopping_basket.png') },
  { value: 5, name: 'Đã trả NCC', ic: require('../../assets/icons/shopping_basket.png') },
  { value: 6, name: 'Đang chuyển kho', ic: require('../../assets/icons/shopping_basket.png') },
];

export default {
  BillsTypeData,
  BillsTimeData,
  ImeiHistoryStatus,
}; 