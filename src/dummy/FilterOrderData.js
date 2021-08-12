const OrderTypeData = [
  { value: 2, name: 'Đặt trước', ic: require('../../assets/icons/shopping_basket.png') },
  { value: 4, name: 'Đơn đặt qua API', ic: require('../../assets/icons/code.png'), nameNormal: 'Số lượng', icNormal: require('../../assets/icons/quantity.png') },
  { value: 1, name: 'Mua tại quầy', ic: require('../../assets/icons/shopping_cart.png') },
  { value: 3, name: 'Chuyển hàng', ic: require('../../assets/icons/local_shipping.png') },
  { value: '', name: 'Tất cả loại', ic: require('../../assets/icons/category.png') },
];

const OrderStatusData = [
  { value: 3, name: 'Đã xác nhận' },
  { value: 4, name: 'Đã chuẩn bị hàng' },
  { value: 5, name: 'Đang đóng gói' },
  { value: 7, name: 'Khách hủy' },
  { value: 8, name: 'Hệ thống hủy' },
  { value: '', name: 'Tất cả trạng thái' },
];

const OrderTimeData = [
  { value: 1, name: 'Hôm nay' },
  { value: '', name: '3 ngày trước' },
  { value: 2, name: 'Hơn 3 ngày trước' },
];

export default {
  OrderTypeData,
  OrderStatusData,
  OrderTimeData
}; 