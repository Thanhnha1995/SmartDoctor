import * as React from "react";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Image} from 'react-native';
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
import HomeThongBao from "../../contants/ThongBao/Home";
import Messages from '../../contants/BacSi/Chat';
import ThongBaoTuVanHoiDap from '../../contants/ThongBao/ThongBaoTuVanHoiDap';
//Datlichxn 
import Chonchucnang from '../../contants/Datlichxn/Chonchucnang';
import Chonbenhvien from '../../contants/Datlichxn/Chonbenhvien';
import Lichsuxetnghiem from '../../contants/Datlichxn/Lichsuxetnghiem';

const TabNavigator = createBottomTabNavigator(
  {
    HomeApp: {
      screen: HomeApp,
      navigationOptions: {
        tabBarLabel: "Trang Chủ",
        tabBarIcon: ({ focused }) => (
          <>
            {focused ? (
              <Image
                source={require("../../assets/icon/ic_homeEnable.png")}
                style={{ width: 20, height: 20 }}
              />
            ) : (
              <Image
                source={require("../../assets/icon/ic_homeDisable.png")}
                style={{ width: 20, height: 20 }}
              />
            )}
          </>
        ),
      },
    },
    CongDong: {
      screen: DanhSachCauHoi,
      navigationOptions: {
        tabBarLabel: "Cộng Đồng",
        tabBarIcon: ({ focused }) => (
          <>
            {focused ? (
              <Image
                source={require("../../assets/icon/ic_congdong_ds.png")}
                style={{ width: 20, height: 20 }}
              />
            ) : (
              <Image
                source={require("../../assets/icon/ic_congdong_en.png")}
                style={{ width: 20, height: 20 }}
              />
            )}
          </>
        ),
      },
    },
      ThongBao: {
      screen: HomeThongBao,
      navigationOptions: {
        tabBarLabel: "Thông Báo",
        tabBarIcon: ({ focused }) => (
          <>
            {focused ? (
              <Image
                source={require("../../assets/icon/ic_notiEnable.png")}
                style={{ width: 20, height: 20 }}
              />
            ) : (
              <Image
                source={require("../../assets/icon/ic_notiDisable.png")}
                style={{ width: 20, height: 20 }}
              />
            )}
          </>
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "#4390DF",
      inactiveTintColor: "#707070",
      style: {
        paddingTop: 11,
        paddingBottom: 10,
        height: 63,
      },
    },
  }
);
const TAB = createAppContainer(TabNavigator);
const RootStack = createStackNavigator(
  {
    Init: {
      screen: StartUpScreen,
    },
    Intro: {
      screen: Intro,
    },
    HomeDangNhap: {
      screen: HomeDangNhap,
    },
    DangKy: {
      screen: DangKy,
    },
    DangNhap: {
      screen: DangNhap,
    },
    HomeApp: {
      screen: TAB,
    },
    DanhSachCauHoi: {
      screen: DanhSachCauHoi,
    },
    ChiTietCauHoi: {
      screen: ChiTietCauHoi,
    },
    DatCauHoi: {
      screen: DatCauHoi,
    },
    ThongBaoTuVanHoiDap:{
      screen:ThongBaoTuVanHoiDap
    },
    ThongBaoThanhCong:{
      screen:ThongBaoThanhCong
    },
    DanhsachBacSi:{
      screen:DanhsachBacSi
    },
    ChietTietBacSi:{
      screen:ChietTietBacSi
    },
    Messages:{
      screen:Messages
    },
    DanhSachTinTuc:{
      screen: DanhSachTinTuc
    },
    ChiTietTinTuc:{
      screen: ChiTietTinTuc
    },
    LichSuCauHoi:{
      screen: LichSuCauHoi
    },
    Chat:{
      screen: Chat
    },
    ChonchucnangScreen:{
      screen: Chonchucnang
    },
    ChonbenhvienScreen:{
      screen: Chonbenhvien
    },
    LichsxetnghiemScreen:{
      screen: Lichsuxetnghiem
    }
  },
  {
    mode: "modal",
    headerMode: "none",
  }
);

export default createAppContainer(RootStack);
