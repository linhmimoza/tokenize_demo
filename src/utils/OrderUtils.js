
const getStatusName = (statusId) => {
  switch (statusId) {
    case 1:
      return 'Mới';
    case 2:
      return 'Đang xác nhận';
    case 3:
      return 'Đã xác nhận';
    case 4:
      return 'Đã chuẩn bị hàng';
    case 5:
      return 'Đang đóng gói';
    case 6:
      return 'Thành công';
    case 7:
      return 'Khách hủy';
    case 8:
      return 'Hệ thống hủy';
    case 9:
      return 'Đã chuyển hoàn';
    default:
      return '';
  }
};


const getFilterType = (id) => {
  switch (id) {
    case 1:
      return 'Mua tại quầy';
    case 2:
      return 'Đặt trước';
    case 3:
      return 'Chuyển hàng';
    default:
      return 'Tất cả loại';
  }
};

const getFilterStatus = (statusId) => {
  switch (statusId) {
    case 3:
      return 'Đã xác nhận';
    case 4:
      return 'Đã chuẩn bị hàng';
    case 5:
      return 'Đang đóng gói';
    case 6:
      return 'Thành công';
    case 7:
      return 'Khách hủy';
    case 8:
      return 'Hệ thống hủy';
    case 9:
      return 'Đã chuyển hoàn';
    default:
      return 'Tất cả trạng thái';
  }
};

const getOrderType = (id) => {
  switch (id) {
    case 1:
      return 'Mua tại quầy';
    case 2:
      return 'Đặt trước';
    case 3:
      return 'Chuyển hàng';
    default:
      return '';
  }
};

const getBillType = (id) => {
  switch (id) {
    case 1:
      return 'Bán lẻ';
    case 2:
      return 'Bán buôn';
    case 3:
      return 'Trả hàng';
    default:
      return '';
  }
};

const getCancelStatus = (id) => {
  switch (id) {
    case 1:
      return 'Đã mua tại quầy';
    case 2:
      return 'Đơn trùng';
    case 3:
      return 'Đã mua nơi khác';
    case 4:
      return 'Không liên hệ được khách hàng';
    case 5:
      return 'Khách suy nghĩ thêm';
    case 6:
      return 'Hết hàng';
    case 7:
      return 'Lý do khác';
    default:
      return '';
  }
};

export default {
  getStatusName,
  getFilterType,
  getFilterStatus,
  getOrderType,
  getCancelStatus,
  getBillType,
};