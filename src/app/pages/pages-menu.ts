import { NbMenuItem } from '@nebular/theme';
import { environment } from 'src/environments/environment';

export const MENU_ITEMS: NbMenuItem[] = [
  { title: 'Quy hoạch khu chức năng', link: '/quy-hoach-khu-chuc-nang' },
  { title: 'Đồ án quy hoạch chi tiết', link: '/do-an-qhct' },
  {
    title: 'Hạ tầng kỹ thuật',
    children: [
      { title: 'Hiện trạng', link: '/hien-trang-htkt' },
      { title: 'Quy hoạch', link: '/quy-hoach-htkt' },
    ],
  },
  { title: 'Xuất báo cáo', link: '/xuat-bao-cao' },
];
