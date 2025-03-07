const image = 'https://tdesign.gtimg.com/miniprogram/images/example2.png';
const items = new Array(12).fill({ label: '标题文字', image }, 0, 12);

Page({
  offsetTopList: [],
  data: {
    sideBarIndex: 1,
    scrollTop: 0,
    categories: [
      {
        label: '选项',
        title: '标题',
        badgeProps: {},
        items,
      },
      {
        label: '选项',
        title: '标题',
        badgeProps: {
          dot: true,
        },
        items: items.slice(0, 10),
      },
      {
        label: '选项',
        title: '标题',
        badgeProps: {},
        items: items.slice(0, 6),
      },
      {
        label: '选项',
        title: '标题',
        badgeProps: {
          count: 8,
        },
        items: items.slice(0, 8),
      },
      {
        label: '选项',
        title: '标题',
        badgeProps: {},
        disabled: true,
        items: [],
      },
    ],
  },
  onSideBarChange(e) {
    const { value } = e.detail;

    this.setData({ sideBarIndex: value });
  },
});
