
const getFilterTime = (statusId) => {
  switch (statusId) {
    case 1:
      return 'Hôm nay';
    case 2:
      return '3 ngày trước';
    case 3:
      return 'Hơn 3 ngày trước';
    default:
      return 'Tất cả';
  }
};

const getFilterType = (id) => {
  switch (id) {
    case 1:
      return 'Bán lẻ';
    case 2:
      return 'Bán buôn';
    case 3:
      return 'Trả hàng';
    default:
      return 'Tất cả trạng thái';
  }
};

export default {
  getFilterTime,
  getFilterType,
};