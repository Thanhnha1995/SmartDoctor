import * as React from "react";
import {createAppContainer} from 'react-navigation'; // 1.0.0-beta.27
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import StartUpScreen from "../../contants/StartUpScreen";
import Intro from "../../contants/Intro";
import HomeDangNhap from "../../contants/HomeDangNhap";
import DangKy from "../../contants/Auth/DangKy";
import DangNhap from "../../contants/Auth/DangNhap";
import HomeApp from "../../contants/Auth/HomeApp";
import DanhSachCauHoi from "../../contants/DatCauHoiBacSi/DanhSachCauHoi";
import ChiTietCauHoi from "../../contants/DatCauHoiBacSi/ChiTietCauHoi";
import DatCauHoi from "../../contants/DatCauHoiBacSi/DatCauHoi";
import ThongBaoThanhCong from "../../contants/DatCauHoiBacSi/ThongBaoThanhCong";
import LichSuCauHoi from "../../contants/DatCauHoiBacSi/LichSuCauHoi";
import DanhsachBacSi from "../../contants/BacSi/DanhSachBacSi";
import ChietTietBacSi from "../../contants/BacSi/ChietTierBacSi";
import Chat from "../../contants/BacSi/Chat";
import DanhSachTinTuc from "../../contants/TinTuc/DanhSachTinTuc";
import ChiTietTinTuc from "../../contants/TinTuc/ChiTietTinTuc";

const TabNavigator = createBottomTabNavigator({
  HomeApp: HomeApp,
 
});

const TAB = createAppContainer(TabNavigator);
const RootStack = createStackNavigator(
  {
    Init: {
      screen: StartUpScreen,
    },
    Intro:{
      screen: Intro,
    },
    HomeDangNhap:{
      screen: HomeDangNhap,
    },
    DangKy:{
      screen: DangKy,
    },
    DangNhap:{
      screen: DangNhap,
    },
    HomeApp:{
      screen: TAB,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);





export default createAppContainer(RootStack);