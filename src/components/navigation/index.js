import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
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
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="route-name"
        component={StartUpScreen}
        options={{
          headerShown: false,
        }}
      />
           <Stack.Screen
        name="Intro"
        component={Intro}
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="HomeDangNhap"
        component={HomeDangNhap}
        options={{
          headerShown: false,
        }}
      />
         <Stack.Screen
        name="DangKy"
        component={DangKy}
        options={{
          headerShown: false,
        }}
      />
            <Stack.Screen
        name="DangNhap"
        component={DangNhap}
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="HomeApp"
        component={HomeApp}
        options={{
          headerShown: false,
        }}
      />
             <Stack.Screen
        name="DanhSachCauHoi"
        component={DanhSachCauHoi}
        options={{
          headerShown: false,
        }}
      />


<Stack.Screen
        name="ChiTietCauHoi"
        component={ChiTietCauHoi}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DatCauHoi"
        component={DatCauHoi}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ThongBaoThanhCong"
        component={ThongBaoThanhCong}
        options={{
          headerShown: false,
        }}
      />
           <Stack.Screen
        name="LichSuCauHoi"
        component={LichSuCauHoi}
        options={{
          headerShown: false,
        }}
      />

<Stack.Screen
        name="DanhsachBacSi"
        component={DanhsachBacSi}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChietTietBacSi"
        component={ChietTietBacSi}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen
        name="Chat"
        component={Chat}
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="DanhSachTinTuc"
        component={DanhSachTinTuc}
        options={{
          headerShown: false,
        }}
      />

<Stack.Screen
        name="ChiTietTinTuc"
        component={ChiTietTinTuc}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
