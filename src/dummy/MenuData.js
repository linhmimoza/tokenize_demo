const ParentProduct = [
  { name: 'Thông tin sản phẩm', ic: require('../../assets/icons/info_outline.png') },
  { name: 'Nhập số IMEI', ic: require('../../assets/icons/imei_2.png'), nameNormal: 'Số lượng', icNormal: require('../../assets/icons/quantity.png') },
  { name: 'Chiết khấu', ic: require('../../assets/icons/money.png') },
  { name: 'Ghi chú nội bộ', ic: require('../../assets/icons/note_2.png') },
  { name: 'Thêm quà tặng kèm', ic: require('../../assets/icons/add_circle.png') },
  { name: 'Xóa sản phẩm', ic: require('../../assets/icons/trash_grey.png') },
];

const ChildrenProduct = [
  { name: 'Thông tin sản phẩm', ic: require('../../assets/icons/info_outline.png') },
  { name: 'Số lượng', ic: require('../../assets/icons/quantity.png'), nameContrast: 'Nhập số IMEI', icContrast: require('../../assets/icons/imei_2.png') },
  { name: 'Sửa giá thu lại', ic: require('../../assets/icons/money.png') },
  { name: 'Thu lại quà', ic: require('../../assets/icons/return.png'), nameContrast: 'Lấy quà', icContrast: require('../../assets/icons/giftcard_2.png') },
  { name: 'Xóa quà tặng kèm', ic: require('../../assets/icons/trash_grey.png'), nameContrast: 'Xóa phụ kiện', },
];

const OrderMenu = [
  { name: 'Đổi trạng thái', ic: require('../../assets/icons/done_all.png') },
  { name: 'Tạo hóa đơn bán lẻ', ic: require('../../assets/icons/bill_2.png') },
];

const SearchOrdersMenu = [
  { name: 'Mã đơn hàng' },
  { name: 'Số điện thoại' },
];

export default {
  ParentProduct,
  ChildrenProduct,
  OrderMenu,
  SearchOrdersMenu,
};