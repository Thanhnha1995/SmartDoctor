-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 18, 2020 at 11:53 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `apiedoctor`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `matkhau` varchar(255) NOT NULL,
  `hovaten` text NOT NULL,
  `ngaysinh` date NOT NULL,
  `diachi` text NOT NULL,
  `sodienthoai` text NOT NULL,
  `gioitinh` int(11) NOT NULL,
  `idchucvu` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `email`, `matkhau`, `hovaten`, `ngaysinh`, `diachi`, `sodienthoai`, `gioitinh`, `idchucvu`) VALUES
(1, 'admin@gmail.com', '4297f44b13955235245b2497399d7a93', 'tran ngoc hiu', '2019-06-25', 'chua cap nhat', '0392307840', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `bacsi`
--

CREATE TABLE `bacsi` (
  `idbacsi` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `matkhau` text NOT NULL,
  `idchuyenkhoa` int(11) NOT NULL,
  `idbenhvien` int(11) NOT NULL,
  `hinhanh` text NOT NULL,
  `tenbacsi` text NOT NULL,
  `sobenhnhandagiup` text NOT NULL,
  `namkinhnghiem` text NOT NULL,
  `catuvan` text NOT NULL,
  `thongtin` text NOT NULL,
  `trinhdohocvan` text NOT NULL,
  `bangcapchungchi` text NOT NULL,
  `iddichvu` int(11) NOT NULL,
  `iddanhmuccauhoi` int(11) NOT NULL,
  `idtrangthaihethong` int(11) NOT NULL,
  `sodienthoai` text NOT NULL,
  `ngaysinh` date NOT NULL,
  `idgioitinh` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `bacsi`
--

INSERT INTO `bacsi` (`idbacsi`, `email`, `matkhau`, `idchuyenkhoa`, `idbenhvien`, `hinhanh`, `tenbacsi`, `sobenhnhandagiup`, `namkinhnghiem`, `catuvan`, `thongtin`, `trinhdohocvan`, `bangcapchungchi`, `iddichvu`, `iddanhmuccauhoi`, `idtrangthaihethong`, `sodienthoai`, `ngaysinh`, `idgioitinh`) VALUES
(6, 'tnhieu123@gmail.com', '4297f44b13955235245b2497399d7a93', 1, 1, 'bacsi.jpg', 'Nguyễn Thiện Thanh', '5', '5', '22', 'Bác sĩ chuyên khoa lồng ngực', 'Đại học y dược', 'Chứng chỉ về bác sĩ chuyên khoa', 0, 2, 0, '0392300000', '1975-06-07', 1),
(7, 'pmkhoa@gmail.com', '4297f44b13955235245b2497399d7a93', 2, 1, 'bacsi2.jpg', 'Phạm Đức Đạt', '22', '11', '23', 'Kinh nghiệm: \r\n\r\n- Từ năm 1998 - 2010: Bác sĩ khoa Tim Mạch can Thiệp, Bệnh viện Nhân dân 115\r\n\r\n- Từ năm 2010 - 2013: Bác sĩ Phó khoa Tim Mạch can thiệp, Bệnh viện Nhân dân 115\r\n\r\n- Từ năm 2013 đến nay: Trưởng khoa Tim Mạch can thiệp, Bệnh viện Nhân dân 115\r\n\r\nKhen thưởng: \r\n\r\n- Danh hiệu chiến sĩ thi đua các năm 2011, 2012, 2013, 2014, 2015, 2016\r\n\r\n- Bằng khen UBND Thành phố năm 2010, 2014\r\n\r\n- Huy hiệu Thành phố năm 2015', 'Tốt nghiệp Trường Đại học Y dược TP Hồ Chí Minh năm 1997', '- Bằng bác sĩ chuyên khoa I\r\n\r\n- Bằng bác sĩ chuyên khoa II', 1, 1, 1, '0366652555', '1971-04-07', 1),
(8, 'maiyen@gmail.com', 'ds6a54d11332121332c123x313c2xzc132zx', 2, 3, 'mai-yen.jpg', 'Thái Thị Mai Yến', '54', '4', '15', 'Quá trình công tác: \r\n\r\n- Phó Trưởng khoa Tim mạch tổng quát - Bệnh viện Nhân dân 115 từ 2001\r\n\r\nHội viên các hội chuyên ngành:\r\n\r\n- Hội viên Hội Tim mạch Việt Nam\r\n\r\n- Hội viên Hội Tim mạch TP Hồ Chí Minh\r\n\r\n- Hội viên Hội SAT TP Hồ Chí Minh\r\n\r\n- Hội viên Hội Lão khoa TP Hồ Chí Minh\r\n\r\nKhen thưởng:\r\n\r\n- Chiến sĩ thi đua cơ sở nhiều năm\r\n\r\n- Bằng khen của UBND Thành phố\r\n\r\nCông trình khoa học:\r\n\r\n- Khảo sát kết quả tức thì của nong van 2 lá bằng bóng Inore năm 2004\r\n\r\n- Phân tầng nguy cơ Tim mạch tiên phát ở nhân viên Bệnh viện Nhân dân 115 từ 45 tuổi trở lên 2008\r\n\r\n- Đặc điểm lâm sàng và CLS của NMCT cấp trên bệnh nhân đột quỵ thiếu máu não cục bộ cấp', 'Tốt nghiệp trường Đại học Y dược TP Hồ Chí Minh năm 199', '- Tốt nghiệp Thạc sĩ y khoa Đại học Y dược TP Hồ Chí Minh năm 2004\r\n\r\n- Tốt nghiệp bằng bác sĩ chuyên khoa II tại trường Đại học Y khoa Phạm Ngọc Thạch năm 2016\r\n', 3, 2, 1, '0975845210', '1975-06-04', 2),
(9, 'tule@gmail.com', '@798dfuoasdjf094lnjkljljlkdf', 1, 3, '12-BS-Le-Minh-TuHoi-sucTim-mach.jpg', 'Lê Minh Tú', '21', '2', '12', 'Kinh nghiệm:\r\n\r\n- Từ năm 1995 - 1997: Bác sĩ cấp cứu và ngoại khoa trung tâm y tế huyện Bình Chánh, TP Hồ Chí Minh\r\n\r\n- Từ năm 1997 - 1999: Bác sĩ Ngoại Tổng quát - Bệnh viện Trưng Vương, TP Hồ Chí Minh,\r\n\r\n- Từ năm 1999 - 2002: Bác sĩ khoa Cấp cứu tổng hợp, khoa Hồi sức tích cực - Bệnh viện Nhân dân 115, TP Hồ Chí Minh\r\n\r\n- Từ năm 2002 - 2007: Bác sĩ khoa Tim mạch tổng quát - Bệnh viện Nhân dân 115, TP Hồ Chí Minh\r\n\r\n- Từ năm 2007 - đến nay: Hồi sức Tim mạch bệnh viện Nhân dân 115, TP Hồ Chí Minh\r\n\r\nHội viên Hội chuyên ngành:\r\n\r\n- Hội viên hội Tim mạch Việt Nam\r\n\r\nKhen thưởng:\r\n\r\n- Chiến sĩ thi đua cơ sở các năm 2012, 2013, 2016', 'Tốt nghiệp trường Đại học Y TP Hồ Chí Minh năm 1995', '- Thạc sĩ Y học Nội Tim mạch, trường Đại Học Y TP Hồ Chí Minh\r\n\r\n- Học viên chuyên khoa 2 nội Tim mạch năm thứ 2, trường Đại Học Y Phạm Ngọc Thạch', 3, 1, 1, '0975451254', '1975-06-01', 1);

-- --------------------------------------------------------

--
-- Table structure for table `benhvien`
--

CREATE TABLE `benhvien` (
  `idbenhvien` int(11) NOT NULL,
  `tenbenhvien` text NOT NULL,
  `diachi` text NOT NULL,
  `dienthoai` text NOT NULL,
  `hinhanh` text NOT NULL,
  `gioithieu` text NOT NULL,
  `iddichvu` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `benhvien`
--

INSERT INTO `benhvien` (`idbenhvien`, `tenbenhvien`, `diachi`, `dienthoai`, `hinhanh`, `gioithieu`, `iddichvu`) VALUES
(1, 'Trung tâm y khoa Mèic - Hoà Hảo', '254 Hoà Hảo, Phường 4, Quận 10, Hồ Chí Minh\r\n', '028 3834 9593', 'hoahao.png', 'Với đội ngũ chuyên gia nhiều năm kinh nghiệm, đã từng công tác tại phòng xét nghiệm của Trung tâm chẩn đoán y khoa Hòa Hảo (MEDIC), Bệnh viện đa khoa', 0),
(3, 'Bệnh viện Nhân Dân 11500', '527 Sư Vạn Hạnh, Phường 12, Quận 10, Thành phố Hồ Chí Minh', '028 3865 2368 - 028 3865 4139 - 028 3865 5110', '115.png', 'Chưa cập nhật', 0),
(4, 'BỆNH VIỆN AN BÌNH', '146 AN BÌNH, P.7, Q.5, TP. HCM', '(08)9234260', 'bvanbinh.png', 'Bệnh viện An Bình được thành lập vào tháng 01/2001 với tên chính thức là Bệnh Viện Đa Khoa An Bình.\r\n\r\nKhởi thuỷ của bệnh viện An Bình ngày nay là một ngôi chùa của đồng bào người Hoa, được xây cất từ năm 1892. Tại nay, vào năm 1885 đã có những hoạt động y tế nhân đạo: khám bệnh và điều trị miễn phí dựa trên nền tảng y học cổ truyền.\r\n\r\nDo nhu cầu về y tế của nhân dân ngày một tăng nên bệnh viện đã bắt đầu được xây dựng từ năm 1916. Đến năm 1945 bệnh viện đưa vào sử dụng Tây y và lấy tên là Bệnh Viện Triều Châu. Sau nhiều lần kiến thiết hiện đại, bệnh viện đẽ có bộ mặt như ngày nay vào năm 1970.\r\n\r\nNăm 1978 bệnh viện được công lập hoá, trở thành bệnh viện An Bình, là bệnh viện đa khoa do Sở Y tế TP.HCM quản lí trực tiếp.\r\n\r\nTrải qua quá trình phát triển không ngừng, đặc biệt là gần 20 năm qua, bệnh viện được Thành phố liên tục giao nhiệm vụ thí điểm từ 1972 - 1994 là bệnh viện thí điểm thu phí một phần.\r\n\r\nNgày 19/5/1994 bệnh viện An Bình được vinh dự nhận trách nhiệm do Đảng bộ và chính quyền TP giao: ”Chăm lo sức khoẻ cho nhân dân lao động nghèo của TP.HCM”. Từ đó bệnh viện mang tên mới là Bệnh Viện miễn phí An Bình.\r\n\r\nVà đến tháng 01/2001, bệnh viện đã trở lại mang tên là Bệnh Viện Đa Khoa An Bình.', 0),
(5, 'BỆNH VIỆN ĐA KHOA TƯ NHÂN AN SINH', '10 TRẦN HUY LIỆU, P.12, Q.PN, TP. HCM', '08)8457777', '', '', 0),
(6, 'BỆNH VIỆN QUÂN DÂN MIỀN ĐÔNG', '50 LÊ VĂN VIỆT, P.HIỆP PHÚ, Q.9, TP. HCM', '08)7307125', 'bvmiendong.jpeg', '', 0),
(7, 'BỆNH VIỆN UNG BƯỚU TP.HCM', '3 NƠ TRANG LONG, P.7, Q.BT, TP. HCM', '(08)8433021', 'bvuubuu.png', '', 0),
(8, 'BỆNH VIỆN CHẤN THƯƠNG CHỈNH HÌNH', '929 TRẦN HƯNG ĐẠO, P.1, Q.5, TP. HCM', '08)9235791', 'bvchinhhinh.png', '', 0),
(9, 'BỆNH VIỆN Y HỌC CỔ TRUYỀN', '179 NAM KỲ KHỞI NGHĨA, P.7, Q.3, TP. HCM', '(08)9326579', 'bvmiendong.jpeg', '', 0);

-- --------------------------------------------------------

--
-- Table structure for table `ca`
--

CREATE TABLE `ca` (
  `idca` int(11) NOT NULL,
  `iddatlich` int(11) NOT NULL,
  `thoigian` varchar(200) NOT NULL,
  `soluong` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ca`
--

INSERT INTO `ca` (`idca`, `iddatlich`, `thoigian`, `soluong`) VALUES
(6, 1, '9h-9h15', 3),
(7, 1, '9h15-9h30', 3),
(8, 1, '9h30-9h45', 3),
(9, 1, '9h45-10h', 3),
(10, 1, '10h-10h15', 3),
(11, 1, '10h15-10h30', 3),
(12, 1, '10h30-10h45', 3),
(13, 1, '11h-11h15', 3),
(14, 1, '11h15-11h30', 3),
(15, 2, '9h-9h15', 3),
(16, 2, '9h-9h15', 3),
(17, 5, '9h30-9h45', 3),
(18, 5, '9h45-10h', 3),
(19, 5, '10h15-10h30', 3),
(20, 5, '10h30-10h45', 3),
(21, 5, '10h45-11h', 3),
(22, 5, '11h-11h15', 3),
(23, 2, '11h15-11h30', 3),
(24, 2, '11h30-11h45', 3),
(25, 2, '11h45-12h', 3),
(26, 3, '9h-9h15', 3),
(27, 3, '9h30-9h45', 3),
(28, 3, '9h45-10h', 3),
(29, 3, '10h15-10h30', 3),
(30, 3, '10h30-10h45', 3),
(31, 3, '10h45-11h', 3),
(32, 3, '11h-11h15', 3),
(33, 3, '11h15-11h30', 3),
(34, 3, '11h30-11h45', 3),
(35, 3, '11h45-12h', 3),
(36, 4, '9h-9h15', 4),
(37, 4, '9h15-9h30', 3),
(38, 4, '9h30-9h45', 4),
(39, 4, '9h45-10h', 3),
(40, 4, '10h-10h15', 3),
(41, 4, '10h15-10h30', 3),
(42, 4, '10h30-10h45', 3);

-- --------------------------------------------------------

--
-- Table structure for table `cabacsi`
--

CREATE TABLE `cabacsi` (
  `idcabacsi` int(11) NOT NULL,
  `iddatlichbacsi` int(11) NOT NULL,
  `thoigian` varchar(255) NOT NULL,
  `soluong` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cabacsi`
--

INSERT INTO `cabacsi` (`idcabacsi`, `iddatlichbacsi`, `thoigian`, `soluong`) VALUES
(1, 1, '9h-9h15', 2),
(2, 1, '9h15-9h30', 2),
(3, 1, '9h30-9h45', 2),
(4, 1, '9h45-10h', 2),
(5, 1, '10h-10h15', 2),
(6, 2, '10h15-10h30', 1),
(7, 2, '10h30-10h45', 1),
(8, 1, '11h-11h15', 2);

-- --------------------------------------------------------

--
-- Table structure for table `chucvu`
--

CREATE TABLE `chucvu` (
  `idchucvu` int(11) NOT NULL,
  `tenchucvu` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `chucvu`
--

INSERT INTO `chucvu` (`idchucvu`, `tenchucvu`) VALUES
(1, 'Quản trị viên');

-- --------------------------------------------------------

--
-- Table structure for table `chuyenkhoa`
--

CREATE TABLE `chuyenkhoa` (
  `idchuyenkhoa` int(11) NOT NULL,
  `tenchuyenkhoa` text NOT NULL,
  `idbenhvien` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `chuyenkhoa`
--

INSERT INTO `chuyenkhoa` (`idchuyenkhoa`, `tenchuyenkhoa`, `idbenhvien`) VALUES
(1, 'Đa khoa', 1),
(2, 'Khoa nhi', 1),
(3, 'Da liễu', 1),
(4, 'Dinh dưỡng', 1),
(5, 'Khoa mắt', 0),
(6, 'Ngoại tổng quát', 0);

-- --------------------------------------------------------

--
-- Table structure for table `cthdxetnghiem`
--

CREATE TABLE `cthdxetnghiem` (
  `id` int(11) NOT NULL,
  `idhdxetnghiem` int(11) NOT NULL,
  `iddichvu` int(11) NOT NULL,
  `giatien` float NOT NULL,
  `tinhtrang` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cthdxetnghiem`
--

INSERT INTO `cthdxetnghiem` (`id`, `idhdxetnghiem`, `iddichvu`, `giatien`, `tinhtrang`) VALUES
(1, 1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `dangkybs`
--

CREATE TABLE `dangkybs` (
  `id` int(11) NOT NULL,
  `cauhoi` text NOT NULL,
  `email` text NOT NULL,
  `hovaten` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `dangkybs`
--

INSERT INTO `dangkybs` (`id`, `cauhoi`, `email`, `hovaten`) VALUES
(1, 'đâ', 'adasd', 'dâda'),
(2, 'đâ', 'adasd', 'dâda'),
(3, 'đâ', 'adasd', 'dâda'),
(4, 'đâ', 'adasd', 'dâda'),
(5, 'Đá', '2423423', 'Giữ	'),
(6, 'Rwerw3', 'Rưerwerwerwrwrrweewrerwew', 'Rưewe');

-- --------------------------------------------------------

--
-- Table structure for table `danhmuc`
--

CREATE TABLE `danhmuc` (
  `iddanhmuc` int(11) NOT NULL,
  `tendanhmuc` text NOT NULL,
  `iddichvu` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `danhmuc`
--

INSERT INTO `danhmuc` (`iddanhmuc`, `tendanhmuc`, `iddichvu`) VALUES
(1, 'Chuẩn đoán giun sán', 1),
(2, 'Tầm soát tiền sản', 1),
(3, 'Viêm gang', 1),
(4, 'Khám tổng quát', 1),
(5, 'Khám tim', 1),
(6, 'Chụp xquang', 1),
(7, 'Xét nghiệm máu', 1),
(8, 'Sức khỏe', 1),
(9, 'Xét nghiệm gen', 1),
(10, 'Chuẩn đoán giun sán', 2),
(11, 'Tầm soát tiền sản', 2),
(12, 'Viêm gang', 2),
(13, 'Khám tổng quát', 2),
(14, 'Khám tim', 2),
(15, 'Chụp xquang', 2),
(16, 'Xét nghiệm máu', 2),
(17, 'Sức khỏe', 2),
(18, 'Xét nghiệm gen', 2),
(19, 'Chuẩn đoán giun sán', 3),
(20, 'Tầm soát tiền sản', 3),
(21, 'Viêm gang', 3),
(22, 'Khám tổng quát', 3),
(23, 'Khám tim', 3),
(24, 'Chụp xquang', 3),
(25, 'Xét nghiệm máu', 3),
(26, 'Xét nghiệm gen', 3),
(27, 'Chuẩn đoán giun sán', 4),
(28, 'Tầm soát tiền sản', 4),
(29, 'Viêm gang', 4),
(30, 'Khám tổng quát', 4),
(31, 'Khám tim', 4),
(32, 'Chụp xquang', 4),
(33, 'Xét nghiệm máu', 4),
(34, 'Sức khỏe', 4),
(35, 'Xét nghiệm gen', 4);

-- --------------------------------------------------------

--
-- Table structure for table `danhmuccauhoi`
--

CREATE TABLE `danhmuccauhoi` (
  `iddanhmuccauhoi` int(11) NOT NULL,
  `tendanhmuccauhoi` text NOT NULL,
  `hinhanh` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `danhmuccauhoi`
--

INSERT INTO `danhmuccauhoi` (`iddanhmuccauhoi`, `tendanhmuccauhoi`, `hinhanh`) VALUES
(1, 'Tất cả', ''),
(2, 'Nhi khoa', 'nhikhoa.png'),
(3, 'Dinh dưỡng', 'dinhduong.png'),
(4, 'Da liễu', 'dalieu.png'),
(5, 'Nam khoa', 'namkhoa.png');

-- --------------------------------------------------------

--
-- Table structure for table `datcauhoi`
--

CREATE TABLE `datcauhoi` (
  `iddatcauhoi` int(11) NOT NULL,
  `tendatcauhoi` text NOT NULL,
  `iddanhmuccauhoi` int(11) NOT NULL,
  `idnguoidung` int(11) NOT NULL,
  `idtrangthaitraloicauhoi` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `datcauhoi`
--

INSERT INTO `datcauhoi` (`iddatcauhoi`, `tendatcauhoi`, `iddanhmuccauhoi`, `idnguoidung`, `idtrangthaitraloicauhoi`) VALUES
(1, 'bác sĩ cho em hỏi về tình trạng sức khoẻ dấu ... hiệu ', 1, 49, 2),
(3, 'bac si cho em hỏi', 2, 49, 1),
(14, '', 2, 1, 1),
(15, 'Đâsdasda5s4d54a56d456asdsadas', 1, 1, 1),
(16, 'Dfg564d56g456d4g56d4f56gdfgdgdg', 2, 1, 1),
(17, 'Đat cau hoi đem thui nha ', 2, 49, 1),
(18, 'Eeeeee', 5, 49, 1),
(19, 'Eeeeee', 5, 49, 1),
(20, 'Eeeeerewrwerwe', 4, 49, 1),
(21, 'Eeeeerewrwerwe', 4, 49, 1),
(22, 'Eeeeerewrwerwe', 4, 49, 0),
(23, '111111Eeeeerewrwerwe', 5, 49, 0),
(24, '756756756757588888=0-=0-0-=0-=', 4, 49, 1),
(25, 'Eqweqweqweqw', 3, 49, 1),
(26, 'Heiucvt', 5, 49, 1),
(27, 'Đấu đấu đá', 4, 49, 1),
(28, '543543534', 2, 49, 1),
(29, 'Cau noi', 2, 49, 1),
(30, 'Bác sĩ cho em hỏi tình trạng', 4, 49, 1),
(31, '', 0, 50, 1),
(32, 'Bác sĩ cho em hỏi tình trạng ', 3, 50, 1),
(33, 'Bác sĩ cho em hỏi suy du=inh dương', 3, 49, 1),
(34, 'bác sĩ cho em hoir', 0, 0, 1),
(35, 'aaaa', 2, 70, 1),
(36, 'bác s˜cho em ho', 2, 0, 1),
(37, 'aaaaaaaa', 5, 0, 1),
(38, 'aaaaaaaaaazzzzzzxx', 5, 0, 1),
(39, '´dasdasdasdasd23123', 5, 70, 1),
(40, '´dasdasdasdasd23123', 5, 70, 1),
(41, '´dasdasdasdasd23123', 5, 70, 1),
(42, '´dasdasdasdasd23123', 5, 70, 1),
(43, '´dasdasdasdasd23123', 5, 70, 1),
(44, 'a', 2, 70, 1),
(45, 'ghghgfh', 2, 80, 1),
(46, 'Ho sót ,cam cum ', 2, 80, 1),
(47, 'Bac si cho em ho ', 1, 87, 1);

-- --------------------------------------------------------

--
-- Table structure for table `datcauhoibac`
--

CREATE TABLE `datcauhoibac` (
  `iddatcauhoibac` int(11) NOT NULL,
  `idnguoidung` int(11) NOT NULL,
  `ngay` date NOT NULL,
  `idcabacsi` int(11) NOT NULL,
  `idbenhvien` int(11) NOT NULL,
  `idbacsi` int(11) NOT NULL,
  `idtrangthailichkham` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `datcauhoibac`
--

INSERT INTO `datcauhoibac` (`iddatcauhoibac`, `idnguoidung`, `ngay`, `idcabacsi`, `idbenhvien`, `idbacsi`, `idtrangthailichkham`) VALUES
(2, 87, '2020-06-12', 1, 1, 1, 3),
(8, 88, '2020-06-11', 2, 1, 6, 3),
(9, 87, '2020-06-11', 2, 1, 6, 1);

-- --------------------------------------------------------

--
-- Table structure for table `datlich`
--

CREATE TABLE `datlich` (
  `iddatlich` int(11) NOT NULL,
  `iddichvu` int(11) NOT NULL,
  `ngay` date NOT NULL,
  `idbacsi` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `datlich`
--

INSERT INTO `datlich` (`iddatlich`, `iddichvu`, `ngay`, `idbacsi`) VALUES
(1, 3, '2020-05-23', 7),
(2, 3, '2020-05-23', 7),
(3, 5, '2020-05-23', 7),
(4, 3, '2020-05-28', NULL),
(5, 3, '2020-05-29', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `datlichbacsi`
--

CREATE TABLE `datlichbacsi` (
  `iddatlichbacsi` int(11) NOT NULL,
  `idbenhvien` int(11) NOT NULL,
  `ngay` date NOT NULL,
  `idbacsi` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `datlichbacsi`
--

INSERT INTO `datlichbacsi` (`iddatlichbacsi`, `idbenhvien`, `ngay`, `idbacsi`) VALUES
(1, 1, '2020-06-11', 6),
(2, 1, '2020-06-12', 6),
(3, 1, '2020-06-11', 7);

-- --------------------------------------------------------

--
-- Table structure for table `datlichtheophongmach`
--

CREATE TABLE `datlichtheophongmach` (
  `iddltpm` int(11) NOT NULL,
  `idnguoidung` int(11) NOT NULL,
  `idbenhvien` int(11) NOT NULL,
  `idcatheopm` int(11) NOT NULL,
  `idtrangthailichkham` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `dichvu`
--

CREATE TABLE `dichvu` (
  `iddichvu` int(11) NOT NULL,
  `iddanhmuc` int(11) NOT NULL,
  `idbenhvien` int(11) NOT NULL,
  `hinhanh` text NOT NULL,
  `tendichvu` text NOT NULL,
  `mota` text NOT NULL,
  `giatien` text NOT NULL,
  `tenkhac` text NOT NULL,
  `muctieu` text NOT NULL,
  `doituong` text NOT NULL,
  `huongdan` text NOT NULL,
  `chitiet` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `dichvu`
--

INSERT INTO `dichvu` (`iddichvu`, `iddanhmuc`, `idbenhvien`, `hinhanh`, `tendichvu`, `mota`, `giatien`, `tenkhac`, `muctieu`, `doituong`, `huongdan`, `chitiet`) VALUES
(3, 1, 1, 'giunsan.jpg', 'Gói chuẩn đoán giun sán chuyên sâu 1', 'Xác định khả năng nhiễm giun sán', '120000', '', 'Xác định nhiễm giun sán, áp dụng cho khách hàng có triệu chứng ngứa da, ăn thực phẩm sống', 'Tất cả mọi đối tượng', 'Các xét nghiệm máu tầm soát ký sinh trùng thường không cần nhịn ăn đói', 'Các xét nghiệm máu tầm soát ký sinh trùng thường không cần nhịn ăn đói'),
(4, 2, 1, 'giunsan.jpg', 'Gói xét nghiệm tiền sản chuyên sâu', 'Xác định khả năng nhiễm giun sán', '500000', '', 'Gói xét nghiệm tiền sản', 'Nữ chuẩn bị mang thai', 'Thời điểm lấy máu tốt nhất vào buổi sáng, nhịn ăn không uống nước ngọt, cà phê trong vòng 12 giờ.', 'Các xét nghiệm máu tầm soát ký sinh trùng thường không cần nhịn ăn đói'),
(5, 1, 1, 'xetnghiemchuyensau.jpg', 'Gói chuẩn đoán giun sán cơ bản', 'Xác định khả năng nhiễm giun sán', '630000', '', 'Xác định khả năng lây nhiễm giun sán', 'Tất cả mọi đối tượng', 'Các xét nghiệm máu tầm soát ký sinh trùng thường không cần nhịn ăn để lấy máu.\r\nNhân viên của bệnh viện sẽ hướng dẫn sau khi đặt lịch', 'Các xét nghiệm máu tầm soát ký sinh trùng thường không cần nhịn ăn đói'),
(6, 2, 1, 'xetnghiemchuyensau.jpg', 'Gói xét nghiệm tiền sản', 'Xét nghiệm kiểm tra sức khỏe khi mang thai', '150000', '', 'Đánh giá tình trạng viêm nhiễm thiếu máu,Xác định nhóm máu và các bệnh lây nhiễm.', 'Nữ chuẩn bị mang thai', 'Thời điểm lấy máu tốt nhất vào buổi sáng, nhịn ăn không uống nước ngọt, cà phê trong vòng 12 giờ.', 'Các xét nghiệm máu tầm soát ký sinh trùng thường không cần nhịn ăn đói'),
(7, 3, 1, 'viem.jpg', 'Xét nghiệm viêm gan B', 'Theo giõi điều trị viêm gang B', '450000', '', 'Giúp chọn lựa phương pháp điều trị phù hợp ở những người đã từng được điều trị trước đó hay ở những người không đáp ứng với phương pháp điều trị.', 'Tât cả', 'Nhin ăn trước 12 giờ', 'Khi thực hiện xét nghiệm viêm gan B, chuyên viên y tế lấy mẫu máu của bạn sẽ:\r\n\r\nQuấn một dây đàn hồi (garô) xung quanh phần trên cánh tay bạn để ngăn sự lưu thông máu. Điều này làm các mạch máu phía dưới vòng to ra nên sẽ dễ dàng hơn để đưa kim tiêm vào mạch máu.\r\nLau sạch vùng chọc tĩnh mạch bằng cồn.\r\nĐưa kim vào mạch máu. Có thể cần phải đâm kim nhiều hơn một lần.\r\nKéo nòng để lấy máu.\r\nTháo garô khỏi cánh tay khi đã thu thập đủ lượng máu.\r\nĐặc một miếng gạc hoặc bông gòn lên vùng vừa lấy máu sau khi kim rút ra.\r\nÉp lên vùng lấy máu và dán băng cá nhân lên.'),
(8, 1, 2, 'giunsan.jpg', 'Gói chuẩn đoán giun sán chuyên sâu', 'Xác định khả năng nhiễm giun sán', '120000', '', 'Xác định nhiễm giun sán, áp dụng cho khách hàng có triệu chứng ngứa da, ăn thực phẩm sống', 'Tất cả mọi đối tượng', 'Các xét nghiệm máu tầm soát ký sinh trùng thường không cần nhịn ăn đói', 'Các xét nghiệm máu tầm soát ký sinh trùng thường không cần nhịn ăn đói'),
(9, 2, 2, 'giunsan.jpg', 'Gói xét nghiệm tiền sản chuyên sâu', 'Xác định khả năng nhiễm giun sán', '500000', '', 'Gói xét nghiệm tiền sản', 'Nữ chuẩn bị mang thai', 'Thời điểm lấy máu tốt nhất vào buổi sáng, nhịn ăn không uống nước ngọt, cà phê trong vòng 12 giờ.', 'Các xét nghiệm máu tầm soát ký sinh trùng thường không cần nhịn ăn đói'),
(10, 1, 2, 'xetnghiemchuyensau.jpg', 'Gói chuẩn đoán giun sán cơ bản', 'Xác định khả năng nhiễm giun sán', '630000', '', 'Xác định khả năng lây nhiễm giun sán', 'Tất cả mọi đối tượng', 'Các xét nghiệm máu tầm soát ký sinh trùng thường không cần nhịn ăn để lấy máu.\r\nNhân viên của bệnh viện sẽ hướng dẫn sau khi đặt lịch', 'Các xét nghiệm máu tầm soát ký sinh trùng thường không cần nhịn ăn đói'),
(11, 2, 2, 'xetnghiemchuyensau.jpg', 'Gói xét nghiệm tiền sản', 'Xét nghiệm kiểm tra sức khỏe khi mang thai', '150000', '', 'Đánh giá tình trạng viêm nhiễm thiếu máu,Xác định nhóm máu và các bệnh lây nhiễm.', 'Nữ chuẩn bị mang thai', 'Thời điểm lấy máu tốt nhất vào buổi sáng, nhịn ăn không uống nước ngọt, cà phê trong vòng 12 giờ.', 'Các xét nghiệm máu tầm soát ký sinh trùng thường không cần nhịn ăn đói'),
(12, 3, 2, 'viem.jpg', 'Xét nghiệm viêm gan B', 'Theo giõi điều trị viêm gang B', '450000', '', 'Giúp chọn lựa phương pháp điều trị phù hợp ở những người đã từng được điều trị trước đó hay ở những người không đáp ứng với phương pháp điều trị.', 'Tât cả', 'Nhin ăn trước 12 giờ', 'Khi thực hiện xét nghiệm viêm gan B, chuyên viên y tế lấy mẫu máu của bạn sẽ:\r\n\r\nQuấn một dây đàn hồi (garô) xung quanh phần trên cánh tay bạn để ngăn sự lưu thông máu. Điều này làm các mạch máu phía dưới vòng to ra nên sẽ dễ dàng hơn để đưa kim tiêm vào mạch máu.\r\nLau sạch vùng chọc tĩnh mạch bằng cồn.\r\nĐưa kim vào mạch máu. Có thể cần phải đâm kim nhiều hơn một lần.\r\nKéo nòng để lấy máu.\r\nTháo garô khỏi cánh tay khi đã thu thập đủ lượng máu.\r\nĐặc một miếng gạc hoặc bông gòn lên vùng vừa lấy máu sau khi kim rút ra.\r\nÉp lên vùng lấy máu và dán băng cá nhân lên.'),
(13, 1, 3, 'giunsan.jpg', 'Gói chuẩn đoán giun sán chuyên sâu', 'Xác định khả năng nhiễm giun sán', '120000', '', 'Xác định nhiễm giun sán, áp dụng cho khách hàng có triệu chứng ngứa da, ăn thực phẩm sống', 'Tất cả mọi đối tượng', 'Các xét nghiệm máu tầm soát ký sinh trùng thường không cần nhịn ăn đói', 'Các xét nghiệm máu tầm soát ký sinh trùng thường không cần nhịn ăn đói'),
(14, 2, 3, 'giunsan.jpg', 'Gói xét nghiệm tiền sản chuyên sâu', 'Xác định khả năng nhiễm giun sán', '500000', '', 'Gói xét nghiệm tiền sản', 'Nữ chuẩn bị mang thai', 'Thời điểm lấy máu tốt nhất vào buổi sáng, nhịn ăn không uống nước ngọt, cà phê trong vòng 12 giờ.', 'Các xét nghiệm máu tầm soát ký sinh trùng thường không cần nhịn ăn đói'),
(15, 1, 3, 'xetnghiemchuyensau.jpg', 'Gói chuẩn đoán giun sán cơ bản', 'Xác định khả năng nhiễm giun sán', '630000', '', 'Xác định khả năng lây nhiễm giun sán', 'Tất cả mọi đối tượng', 'Các xét nghiệm máu tầm soát ký sinh trùng thường không cần nhịn ăn để lấy máu.\r\nNhân viên của bệnh viện sẽ hướng dẫn sau khi đặt lịch', 'Các xét nghiệm máu tầm soát ký sinh trùng thường không cần nhịn ăn đói'),
(16, 2, 3, 'xetnghiemchuyensau.jpg', 'Gói xét nghiệm tiền sản', 'Xét nghiệm kiểm tra sức khỏe khi mang thai', '150000', '', 'Đánh giá tình trạng viêm nhiễm thiếu máu,Xác định nhóm máu và các bệnh lây nhiễm.', 'Nữ chuẩn bị mang thai', 'Thời điểm lấy máu tốt nhất vào buổi sáng, nhịn ăn không uống nước ngọt, cà phê trong vòng 12 giờ.', 'Các xét nghiệm máu tầm soát ký sinh trùng thường không cần nhịn ăn đói'),
(17, 3, 3, 'viem.jpg', 'Xét nghiệm viêm gan B', 'Theo giõi điều trị viêm gang B', '450000', '', 'Giúp chọn lựa phương pháp điều trị phù hợp ở những người đã từng được điều trị trước đó hay ở những người không đáp ứng với phương pháp điều trị.', 'Tât cả', 'Nhin ăn trước 12 giờ', 'Khi thực hiện xét nghiệm viêm gan B, chuyên viên y tế lấy mẫu máu của bạn sẽ:\r\n\r\nQuấn một dây đàn hồi (garô) xung quanh phần trên cánh tay bạn để ngăn sự lưu thông máu. Điều này làm các mạch máu phía dưới vòng to ra nên sẽ dễ dàng hơn để đưa kim tiêm vào mạch máu.\r\nLau sạch vùng chọc tĩnh mạch bằng cồn.\r\nĐưa kim vào mạch máu. Có thể cần phải đâm kim nhiều hơn một lần.\r\nKéo nòng để lấy máu.\r\nTháo garô khỏi cánh tay khi đã thu thập đủ lượng máu.\r\nĐặc một miếng gạc hoặc bông gòn lên vùng vừa lấy máu sau khi kim rút ra.\r\nÉp lên vùng lấy máu và dán băng cá nhân lên.');

-- --------------------------------------------------------

--
-- Table structure for table `gioitinh`
--

CREATE TABLE `gioitinh` (
  `idgioitinh` int(11) NOT NULL,
  `gioitinh` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `gioitinh`
--

INSERT INTO `gioitinh` (`idgioitinh`, `gioitinh`) VALUES
(1, 'Nam'),
(2, 'Nữ');

-- --------------------------------------------------------

--
-- Table structure for table `hdxetnghiem`
--

CREATE TABLE `hdxetnghiem` (
  `idhdxetnghiem` int(11) NOT NULL,
  `idnguoidung` int(11) DEFAULT NULL,
  `iddichvu` int(11) DEFAULT NULL,
  `ngay` date DEFAULT NULL,
  `giatien` float DEFAULT NULL,
  `idca` int(11) DEFAULT NULL,
  `mahdxn` text DEFAULT NULL,
  `idbenhvien` int(11) DEFAULT NULL,
  `idbacsi` int(11) DEFAULT NULL,
  `idtrangthailichkham` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `hdxetnghiem`
--

INSERT INTO `hdxetnghiem` (`idhdxetnghiem`, `idnguoidung`, `iddichvu`, `ngay`, `giatien`, `idca`, `mahdxn`, `idbenhvien`, `idbacsi`, `idtrangthailichkham`) VALUES
(51, 87, 3, '2020-05-28', 120000, 38, '156474', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `lichbs`
--

CREATE TABLE `lichbs` (
  `idlichbs` int(11) NOT NULL,
  `idca` int(11) NOT NULL,
  `idbacsi` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `lichbs`
--

INSERT INTO `lichbs` (`idlichbs`, `idca`, `idbacsi`) VALUES
(5, 6, 6),
(6, 7, 6),
(7, 8, 6),
(8, 9, 6),
(9, 10, 6),
(10, 11, 6),
(11, 12, 6),
(12, 13, 6),
(13, 14, 6),
(18, 6, 7),
(19, 6, 7),
(20, 7, 7),
(21, 8, 7),
(22, 9, 7),
(23, 10, 7),
(24, 11, 7),
(25, 12, 7),
(26, 13, 7),
(27, 14, 7),
(28, 15, 6),
(29, 15, 6),
(30, 16, 6),
(31, 17, 6),
(32, 18, 6),
(33, 19, 6),
(34, 20, 6),
(35, 21, 6),
(36, 22, 6),
(37, 23, 6),
(38, 24, 6),
(39, 25, 6),
(40, 15, 7),
(41, 16, 7),
(42, 17, 7),
(43, 18, 7),
(44, 19, 7),
(45, 20, 7),
(46, 21, 7),
(47, 22, 7),
(48, 23, 7),
(49, 24, 7),
(50, 25, 7),
(51, 26, 6),
(52, 26, 6),
(53, 27, 6),
(54, 28, 6),
(55, 29, 6),
(56, 30, 6),
(57, 31, 6),
(58, 32, 6),
(59, 33, 6),
(60, 34, 6),
(61, 35, 6),
(62, 26, 7),
(63, 27, 7),
(64, 28, 7),
(65, 29, 7),
(66, 30, 7),
(67, 31, 7),
(68, 32, 7),
(69, 33, 7),
(70, 34, 7),
(71, 35, 7);

-- --------------------------------------------------------

--
-- Table structure for table `nguoidung`
--

CREATE TABLE `nguoidung` (
  `idnguoidung` int(11) NOT NULL,
  `hovaten` varchar(255) NOT NULL,
  `idgioitinh` int(11) NOT NULL,
  `ngaysinh` varchar(255) NOT NULL,
  `diachi` text NOT NULL,
  `sodienthoai` text NOT NULL,
  `nghenghiep` text NOT NULL,
  `socmnd` text NOT NULL,
  `masobnxh` text NOT NULL,
  `cannang` text NOT NULL,
  `chieucao` text NOT NULL,
  `bmi` text NOT NULL,
  `idnhommau` int(11) NOT NULL,
  `tinhtrangbenhly` text NOT NULL,
  `diungvacacphanung` text NOT NULL,
  `cachsudungthuoc` text NOT NULL,
  `email` varchar(255) NOT NULL,
  `matkhau` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `nguoidung`
--

INSERT INTO `nguoidung` (`idnguoidung`, `hovaten`, `idgioitinh`, `ngaysinh`, `diachi`, `sodienthoai`, `nghenghiep`, `socmnd`, `masobnxh`, `cannang`, `chieucao`, `bmi`, `idnhommau`, `tinhtrangbenhly`, `diungvacacphanung`, `cachsudungthuoc`, `email`, `matkhau`) VALUES
(87, 'nguyen truong thanh nha', 1, '2020/05/01', 'hutech ', '+84682051295', 'chua cap nhat', 'chua cap nhat', 'chua cap nhat', '00', '00', '00', 1, 'chua cap nhat', 'chua cap nhat', 'chua cap nhat', 'thanhnha@gmail.com', '4297f44b13955235245b2497399d7a93'),
(88, '112', 112, '11/11/2011', '112', '112', '112', '112', '112', '112', '112', '112', 112, '112', '112', '112', 'tnhieu123@gmail.com', '4297f44b13955235245b2497399d7a93'),
(89, 'nguyen truong thanh nha', 1, '2020/05/01', 'hutech ', '0976567677', 'chua cap nhat', 'chua cap nhat', 'chua cap nhat', '00', '00', '00', 1, 'chua cap nhat', 'chua cap nhat', 'chua cap nhat', 'thanhnha1@gmail.com', '4297f44b13955235245b2497399d7a93'),
(90, 'thanhnha', 1, '2019/01/01', 'nha', '0392307840', 'chua cap nhat', 'chua cap nhat', 'chua cap nhat', '00', '00', '00', 1, 'chua cap nhat', 'chua cap nhat', 'chua cap nhat', 'nha123@gmail.com', '4297f44b13955235245b2497399d7a93'),
(91, 'tha', 1, '2019/01/01', '1111', '1111111111', 'chua cap nhat', 'chua cap nhat', 'chua cap nhat', '00', '00', '00', 1, 'chua cap nhat', 'chua cap nhat', 'chua cap nhat', 'nha1234@gmail.com', '4297f44b13955235245b2497399d7a93');

-- --------------------------------------------------------

--
-- Table structure for table `nhommau`
--

CREATE TABLE `nhommau` (
  `idnhommau` int(11) NOT NULL,
  `tennhommau` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `nhommau`
--

INSERT INTO `nhommau` (`idnhommau`, `tennhommau`) VALUES
(1, 'A'),
(2, 'B'),
(3, 'AB'),
(4, 'O');

-- --------------------------------------------------------

--
-- Table structure for table `thanhpho`
--

CREATE TABLE `thanhpho` (
  `idthanhpho` int(11) NOT NULL,
  `tenthanhpho` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `thanhpho`
--

INSERT INTO `thanhpho` (`idthanhpho`, `tenthanhpho`) VALUES
(1, 'Hà Nội'),
(2, 'Hà Giang'),
(3, 'Cao Bằng'),
(4, 'Bắc Kạn'),
(5, 'Chưa cập nhật');

-- --------------------------------------------------------

--
-- Table structure for table `tintuc`
--

CREATE TABLE `tintuc` (
  `id` int(11) NOT NULL,
  `tentintuc` text NOT NULL,
  `hinhanh` text NOT NULL,
  `noidung` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tintuc`
--

INSERT INTO `tintuc` (`id`, `tentintuc`, `hinhanh`, `noidung`) VALUES
(1, 'Đau bụng có nguy hiểm không? ', 'daubung.jpg', '<h2 class=\"sapo\" style=\"margin: 0px 0px 12px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-weight: normal; font-stretch: normal; font-size: 16px; line-height: 22px; font-family: NotoSans-Bold; vertical-align: baseline; color: rgb(34, 34, 34); letter-spacing: -0.2px; background-color: rgba(255, 255, 255, 0.95);\">TTO - Thông tin về việc hút thuốc lào và thuốc lá, loại nào dễ dẫn đến ung thư hơn? Các bác sĩ bệnh viện Quốc tế Mỹ (AIH) cho rằng, tác hại của hai loại thuốc này đều như nhau, cần bỏ sớm.</h2><div class=\"relate-container\" style=\"margin: 0px 0px 15px; padding: 10px 0px; border: 0px; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch: inherit; font-size: medium; line-height: inherit; font-family: Arial, Helvetica, sans-serif; vertical-align: baseline; background-color: rgb(246, 246, 246);\"><ul style=\"margin: 0px 0px 0px 28px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; list-style-position: initial; list-style-image: initial;\"><li style=\"margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline;\"><a data-zone=\"0\" data-type=\"1\" data-newstype=\"30\" data-id=\"20190506215553661\" title=\"Lắp răng giả có gây ung thư miệng?\" data-objecttype=\"1\" data-title-encode=\"TCVFMSVCQSVBRnAlMjByJUM0JTgzbmclMjBnaSVFMSVCQSVBMyUyMGMlQzMlQjMlMjBnJUMzJUEyeSUyMHVuZyUyMHRoJUM2JUIwJTIwbWklRTElQkIlODduZyUzRg==\" href=\"https://tuoitre.vn/lap-rang-gia-co-gay-ung-thu-mieng-20190506215553661.htm\" style=\"margin: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 12px; line-height: 2.08; font-family: Roboto-Bold; vertical-align: baseline; display: block; text-decoration-line: none; color: rgb(34, 34, 34);\">Lắp răng giả có gây ung thư miệng?</a></li><li style=\"margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline;\"><a data-zone=\"0\" data-type=\"1\" data-newstype=\"30\" data-id=\"20190423215326352\" title=\"Nấu thức ăn trong nồi nhôm có gây ung thư thực quản?\" data-objecttype=\"1\" data-title-encode=\"TiVFMSVCQSVBNXUlMjB0aCVFMSVCQiVBOWMlMjAlQzQlODNuJTIwdHJvbmclMjBuJUUxJUJCJTkzaSUyMG5oJUMzJUI0bSUyMGMlQzMlQjMlMjBnJUMzJUEyeSUyMHVuZyUyMHRoJUM2JUIwJTIwdGglRTElQkIlQjFjJTIwcXUlRTElQkElQTNuJTNG\" href=\"https://tuoitre.vn/nau-thuc-an-trong-noi-nhom-co-gay-ung-thu-thuc-quan-20190423215326352.htm\" style=\"margin: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 12px; line-height: 2.08; font-family: Roboto-Bold; vertical-align: baseline; display: block; text-decoration-line: none; color: rgb(34, 34, 34);\">Nấu thức ăn trong nồi nhôm có gây ung thư thực quản?</a></li><li style=\"margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline;\"><a data-zone=\"0\" data-type=\"1\" data-newstype=\"30\" data-id=\"20190501094817207\" title=\"Ăn nhiều thịt đỏ dễ tăng nguy cơ ung thư\" data-objecttype=\"1\" data-title-encode=\"JUM0JTgybiUyMG5oaSVFMSVCQiU4MXUlMjB0aCVFMSVCQiU4QnQlMjAlQzQlOTElRTElQkIlOEYlMjBkJUUxJUJCJTg1JTIwdCVDNCU4M25nJTIwbmd1eSUyMGMlQzYlQTElMjB1bmclMjB0aCVDNiVCMA==\" href=\"https://tuoitre.vn/an-nhieu-thit-do-de-tang-nguy-co-ung-thu-20190501094817207.htm\" style=\"margin: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 12px; line-height: 2.08; font-family: Roboto-Bold; vertical-align: baseline; display: block; text-decoration-line: none; color: rgb(34, 34, 34);\">Ăn nhiều thịt đỏ dễ tăng nguy cơ ung thư</a></li></ul></div><div class=\"content fck\" id=\"main-detail-body\" style=\"margin: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: medium; line-height: 1.44; font-family: NotoSans-Regular; vertical-align: baseline; color: rgb(34, 34, 34); letter-spacing: -0.2px; background-color: rgba(255, 255, 255, 0.95);\"><div class=\"VCSortableInPreviewMode noCaption active\" type=\"Photo\" style=\"margin: 1.3em auto 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 11px; line-height: 1.45; font-family: Roboto; vertical-align: baseline; text-align: center; display: table; position: relative; z-index: 2;\"><div style=\"margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline;\"><a href=\"https://cdn.tuoitre.vn/2019/5/8/thuoc-la-15573289373591594591102.jpg\" data-fancybox-group=\"img-lightbox\" title=\"\" target=\"_blank\" class=\"detail-img-lightbox\" style=\"margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; display: initial; text-decoration-line: none; cursor: zoom-in; color: rgb(237, 27, 47); letter-spacing: -0.2px;\"><img src=\"https://cdn.tuoitre.vn/2019/5/8/thuoc-la-15573289373591594591102.jpg\" id=\"img_0ed98630-71a5-11e9-ab56-0fb9e15ccceb\" w=\"600\" h=\"400\" alt=\"Hút thuốc lào có dễ mắc ung thư không? - Ảnh 1.\" title=\"Hút thuốc lào có dễ mắc ung thư không? - Ảnh 1.\" rel=\"lightbox\" photoid=\"0ed98630-71a5-11e9-ab56-0fb9e15ccceb\" type=\"photo\" data-original=\"https://cdn.tuoitre.vn/2019/5/8/thuoc-la-15573289373591594591102.jpg\" width=\"\" height=\"\" class=\"lightbox-content\" style=\"margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; max-width: 100%; color: transparent; width: 440px;\"></a></div></div><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\"><b style=\"margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\"><i style=\"margin: 0px; padding: 0px; border: 0px; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\">* Thưa bác sĩ, tôi năm nay 61 tuổi, có bệnh mỡ máu còn lại không mắc bệnh gì khác. Tôi đọc thông tin về nguy cơ mắc bệnh ung thư miệng và hậu môn trong đó có người thường xuyên hút thuốc. Tuy nhiên, tôi không hút thuốc lá mà hút thuốc lào (điếu cày) 15 năm nay. Tôi muốn biết là việc hút thuốc lào có nguy hại không? Có dễ bị ung thư như thuốc lá không? (Nguyễn Văn Tuấn, 61 tuổi, nguyenvantuan198@...)</i></b></p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\">- Chào bạn Tuấn, việc hút thuốc lá hay hút thuốc lào đều như nhau cả về tác hại của nó, việc hút thuốc khng những gây bệnh lý cho phổi mà còn gây ra nhiều bệnh khác ở cả vùng miệng cũng như hậu môn đấy bạn ạ, cho nên bạn cần bỏ sớm hút thuốc cả 2 loại thuốc đó.</p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\"><b style=\"margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\">* Tôi phát hiện mình bị ung thư lưỡi giai đoạn 3. Xin hỏi bác sĩ ở giai đoạn của tôi còn có thể thực hiện phẫu thuật bóc tách, nạo hạch được nữa hay không? Khả năng sống của tôi còn bao nhiêu phần trăm? (Dương Đức Mạnh, 55 tuổi, manhduongduc123@...)</b></p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\">- Chào bạn Mạnh, bạn cho biết bạn bị k.lưỡi gđ.3, nhưng không rõ vị trí u ở 1/3 ngoài, trong hay giữa, tổng trạng bạn có bệnh nào kèm theo không, nên thật khó trả lời cụ thể cho bạn, đồng thời còn phụ thuộc vào từng cơ sở chữa trị bạn ạ.</p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\"><b style=\"margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\"><i style=\"margin: 0px; padding: 0px; border: 0px; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\">* Tôi năm nay 55 tuổi, nửa năm nay tôi nuốt thức ăn bị v¬ướng, nghẹn và đau họng. Ngoài ra cũng có cảm giác đầy bụng, chậm tiêu. Tôi đi nội soi thực quản và được biết có tổn th-ương cách cung răng tr¬ước 30cm, có vết sần và loét. Phía bệnh viện hẹn ngày làm sinh thiết để xác định bệnh. Xin bác sĩ cho tôi biết, tình trạng của tôi là bình thường hay đó là dấu hiệu ung thư thực quản? (Nguyễn Văn Tuấn, 55 tuổi, tuannguyenhn@...)</i></b></p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\">- Chào bạn Tuấn, theo bạn trao đổi thì bạn có 1 số dấu hiệu nuốt vướng, nghẹn, đau họng, đầy bụng, chậm tiêu, có đi nội soi, và được bs hẹn ngày làm sinh thiết, bạn hỏi về tình trạng bệnh.</p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\">Trước tiên bạn nên yên tâm, các dấu hiệu trên cũng chưa nói được điều gì cả, nên chờ kết qủa của sinh thiết bạn ạ, chắc không có gì đáng ngại cả.</p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\"><b style=\"margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\"><i style=\"margin: 0px; padding: 0px; border: 0px; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\">* Anh trai cháu vừa nhận kết quả chụp PT/CT đánh giá và với chẩn đoán ung thư¬ thực quản T2N0M0. Bệnh viện chỉ định hoá trị và xạ trị. Cháu xin hỏi khả năng khỏi bệnh của anh cháu còn cao không? Còn được bao nhiêu năm nữa ạ? (Lê Thùy Thanh Liên, 25 tuổi, noibuondanhroi@...)</i></b></p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\">- Chào cháu Thanh Liên, anh cháu bị ung thư thực quản T2N0M0, bệnh viện chỉ định HT, XT, để trả lời cụ thể thật khó cháu ạ, đồng thời cũng không rõ vị trí u, GPB, thể trạng nữa...nhưng có lời khuyên là cháu và mọi người cần bình tĩnh, không quá lo lắng, cố gắng theo bác sĩ chữa trị nhé.</p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\"><b style=\"margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\"><i style=\"margin: 0px; padding: 0px; border: 0px; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\">* Thưa bác sĩ, viêm loét thực quản ở mức độ nào và kéo dài bao lâu thì sẽ dẫn đến ung thư thực quản ạ? Tôi có chứng viêm loét dạ dày đã rất lâu, tôi đang lo lắng tình trạng bệnh cùa mình. Mong bác sĩ tư vấn giúp? (Xuân Phương, 45 tuổi, xuanphuong4p@...)</i></b></p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\">- Chào bạn Phương, không thể nói viêm loét thực quản ở mức độ nào, kéo dài bao lâu sẽ dẫn đến k.thực quản. Còn bạn bị viêm loét dd đã rất lâu, bạn lai hay lo lắng thì có đầu tiên bạn cần chữa cho lành viêm loét dạ dày, sau đó cần định kì đi khám tầm soát ung thư, chủ yếu về dạ dày, tiêu hóa, có gì mình can thiệp sớm thì không có gì lo ngại cả, chào bạn.</p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\"><b style=\"margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\"><i style=\"margin: 0px; padding: 0px; border: 0px; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\">* Tôi đau dạ dày suốt 2-3 tháng nay, khi nội soi, bs kết luận sung huyết bao tử và uống thuốc điều trị trong 1,5 tháng. Cho tôi hỏi, sung huyết bao tử có nguy hiểm lắm không, nếu điều trị, có trở lại bình thường không? hay còn tiềm ẩn những nguy cơ gì? (Trinhnguyen@...)</i></b></p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\">- Chào bạn, theo bạn nói bạn bị đau dạ dày 2-3 tháng nay, đi nội soi được kết luận xung huyết bao tử, đượ c uống thuốc 1,5 tháng, bạn hỏi có nguy hiểm không? Trước mắt thì không, nhưng lâu dài thì không nói trước được, điều trị tốt thì khỏi, nếu chế độ ăn không tốt, hay lo lắng (stress), rượu bia, nhiễm HPV thì không tốt, không nói trước điều gì bạn ạ.</p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\"><b style=\"margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\"><i style=\"margin: 0px; padding: 0px; border: 0px; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\">* Vừa rồi tôi có đọc thông tin trên mạng chia sẻ về việc ăn mì gói, ăn thức ăn chua cay nhiều có nguy cơ bị ung thư dạ dày? Vậy ung thư dạ dày phần lớn do chế độ ăn uống hay là do di truyền ạ? Nếu mắc ung thư dạ dày giai đoạn sớm khả năng chữa trị thành công là bao nhiêu phần trăm? (Nguyễn Thị Trâm Anh, Q12, TP.HCM)</i></b></p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\">- Chào bạn Trâm Anh, những thông tin trên mạng bạn nên tham khảo thôi, không nên quá lo lắng về mì gói chua cay nhé. Đúng là ung thư dạ dày có nhiều yếu tố gây ra, như chế độ ăn, rượu bia, môi trường, thuốc lá và chính là nhiễm HPV.</p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\">Còn phát hiện sớm (Tis) chữa khỏi gần như 100% bạn ạ.</p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\"><b style=\"margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\"><i style=\"margin: 0px; padding: 0px; border: 0px; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\">* Tôi dạo gần đây hay bị ợ chua, nóng rát bao tử. trước đây tôi bị viêm loét da dày, đã điều trị một thời gian thì nay bị đau lại. Dù ăn 1uôgn đúng giờ cũng bị đau. Mỗi lần đau tôi uống Phosphalugen và Nexium thì thấy đỡ nhưng cứ tái đi tái lại. cho tôi hỏi đây có phải dấu hiệu của ung thư dạ dày không? Và để kiểm tra nên làm những xét nghiệm gì? (Longnguyen@...)</i></b></p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\">- Xin chào bạn, qua trao đổi của bạn, thì bạn nên tới bác sĩ, bệnh viện để khám và tư vấn cho bạn. Không nên tự đi mua thuốc về uống mỗi khi đau, còn bạn hỏi đây có phải là dấu hiệu ung thư không thì ko thể nói là bị ung thư, nhưng cũng không loại trừ, bạn nên vào bệnh viện để bác sĩ tư vấn cụ thể, nếu cần sẽ Nội Soi, Sinh Thiết và làm các xét nghiệm khác để làm rõ căn bệnh của bạn nhé. Chào bạn.</p><div id=\"zone-jnvk0c1v\" class=\"ArfGroup\" style=\"margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline;\"><div id=\"share-jnvk0cro\" class=\"ArfGroup\" style=\"margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline;\"><div id=\"placement-jvltfjo5\" class=\"ArfGroup\" style=\"margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline;\"><div id=\"banner-jnvk0c1v-jvltfkj2\" class=\"ArfGroup\" style=\"margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; min-height: 0px; min-width: 10px;\"><div id=\"slot-1-jnvk0c1v-jvltfkj2\" style=\"margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline;\"></div></div></div></div></div><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\"><b style=\"margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\"><i style=\"margin: 0px; padding: 0px; border: 0px; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\">* Bố tôi nghiện rượu, mỗi bữa cơm đều phải có một cốc rượu mới nuốt được. Mấy năm gần đây còn bị thêm mỡ máu, cao huyết áp, vôi hóa mạch vành. Nửa tháng trước dấu hiệu sức khỏe của ông cụ đi xuống nên tôi đưa bố đến bệnh viện kiểm tra và được kết luận bị ung thư dạ dày giai đoạn 3. Xin bác sĩ cho biết với trường hợp mắc thêm nhiều bệnh như bố tôi thì hướng điều trị như thế nào? Cơ hội sống có còn cao hay không? (Hà Thị Thúy Lan, 35 tuổi, thuylanhathi1985@...)</i></b></p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\">- Chào bạn Thúy Lan, theo bạn trao đổi thì bố bạn bị ung thư dạ dày giai đoạn 3, nhưng không rõ u ở vị trí nào vì mỗi vị trí khác nhau có các phương pháp điều trị khác nhau. Bố bạn lại có các bệnh khác kèm theo như cao HA, mỡ máu, vôi hóa mạch vành...cho nên thể trạng cho phép, các bệnh kèm theo đươc kiểm soát thì có thể trước tiên là Phẫu Thuật sau đó sẽ Hóa trị cho bố bạn. Hiện nay có nhiều loại thuốc tốt, hiệu quả và ít tác dụng phụ, nên bạn yên tâm bác sĩ sẽ có chỉ định đúng cho bố bạn nhé. Chúc bố bạn mau khỏe.</p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\"><b style=\"margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\"><i style=\"margin: 0px; padding: 0px; border: 0px; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\">* Vợ tôi bị ung thư dạ dày, hiện đang thực hiện hóa trị, truyền Epirubicin, và 5-FU. Tuy nhiên mấy ngày mưa nắng thất thường này cô ấy bị đau đầu. Xin hỏi có được uống các loại giảm đau phổ biến như pracetamol hay không? (Trịnh Văn Việt, Quảng Bình, viettrunghungdung@...)</i></b></p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\">- Chào bạn Việt ở Quảng bình, theo bạn trao đổi vợ bạn bị k.dd đang đươc HT, truyền thuốc Epirubicin và 5FU nhưng mấy ngày vừa qua thay đổi thời tiết làm đau đàu thì việc uống giảm đau là bình thường thôi. Bạn không lo lắng gì cả, cố gắng điều trị theo đúng của bác sĩ đã cho bạn nhé, chúc vợ bạn mau chóng lành bệnh.</p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\"><b style=\"margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\"><i style=\"margin: 0px; padding: 0px; border: 0px; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\">* Tôi bị sút cân, ăn không ngon, hay đau dạ dày, đi khám thì có kết quả sau: đường Z cách cung răng 39cm; hang vị: niêm mạc sung huyết, phù nề; Tiền môn vị: phát hiện một tổn thương màu trắng đục nhô cao; Test Urease N.S: dương tính. Bệnh viện chỉ định làm sinh thiết sớm. Xin hỏi tôi có phải đã bị ung thư dạ dày rồi hay không? Tôi 58 tuổi, không có thói quen bia rượu hay thuốc lá. (Ngô Đức Quyết, ngoducquyetvinhphuc@...)</i></b></p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\">- Chào bạn Quyết thân mến, bạn không nên lo lắng quá mức, bệnh viện có chỉ định như vậy là chính xác đấy bạn ạ, vì khi nói là ung thư thì chỉ có kết luận của GPB trả lời dương tính mới được nói là ung thư. Bạn không uống bia rượu, không hút thuốc lá là tốt rồi, nhưng cũng còn nhiều yếu tố khác nữa cũng có thể gây ra ung thư và tuổi 58 cũng là thuộc nhóm có nguy cơ đấy. Cho nên bạn nên tuân theo sự chỉ dẫn của bs nhé. Chào bạn.</p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\"><b style=\"margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\"><i style=\"margin: 0px; padding: 0px; border: 0px; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\">* Mẹ cháu 60 tuổi, bị ung thư đại tràng hiện đã di căn vào phổi. Trường hợp mẹ cháu thì điều trị bằng hóa trị liệu còn cơ hội sống nữa hay không? Giai đoạn này cháu nên cho mẹ ăn thức ăn gì để kéo dài thời gian sống ạ? (Trần Thị Phượng, 30 tuổi, phuonghoanglua@...)</i></b></p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\">- Chào bạn Phượng nhé, theo bạn cho biết mẹ bạn bị k.đại tràng di căn phổi. Cho hỏi mẹ bạn được phát hiện bao lâu rồi, đã vào bệnh viện điều trị gì chưa. Nếu là mới thì bác sĩ sẽ có những chỉ định cụ thể, còn bạn hỏi riêng về Hóa Trị, cơ hội còn sống bao lâu, bạn yên tâm hiện nay có nhiều loại thuốc tốt chữa hiệu quả. Về chế độ ăn uống đủ chất dinh dưỡng, không kiêng gì, bà ăn được gì cho ăn thứ đó, bạn ạ.</p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\"><b style=\"margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\"><i style=\"margin: 0px; padding: 0px; border: 0px; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\">* Nhiều người đi cầu ra máu, tưởng là trĩ, đi khám mới ra ung thư trực tràng.&nbsp;Vậy có cách nào phân biệt 2 bệnh này không ạ? Bệnh trĩ có thể tiến triển thành ung thư không, thưa bác sĩ? (Hậu, Bình Dương)</i></b></p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\">Chào bạn, c<span style=\"margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline;\">ách tốt nhất tìm gặp bác sĩ chuyên khoa để được tư vấn và xác định thời điểm cần tầm soát cũng như phương pháp phù hợp để tìm ra những biến đổi tiền ung thư để có phương án can thiệp cũng như theo dõi.</span></p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\">Bệnh trĩ không tiến triển thành ung thư.</p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\"><b style=\"margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\"><i style=\"margin: 0px; padding: 0px; border: 0px; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\">* Em là nữ, năm nay 27 tuổi. Hồi nhỏ lúc khoảng 10 tuổi, em bị đau đại tràng, bác sĩ kết luận là bị co thắt đại tràng hay viêm đại tràng mãn tính, em không còn nhớ rõ. Khi đó gia đình có cho uống thuốc, đa phần là thuốc đông y. Mỗi lần cơn đau là đau sống đau chết, cảm giác thắt lại, nhưng chỉ một chút lại hết, rồi lại đau, và thường đi cầu ngay lúc vừa ăn xong.&nbsp;</i></b></p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\"><b style=\"margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\"><i style=\"margin: 0px; padding: 0px; border: 0px; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\">Sau đó đến nay thì không còn những cơn đau như vậy, nhưng em vẫn thường bị đi ngoài phân lỏng, phân sống nếu ăn phải cái gì không đảm bảo hoặc do uống sữa buổi sáng. Hồi đó đến nay, chắc cũng khoảng 15 năm rồi, em không đi khám về đại tràng nữa. Một phần kiểm tra đại tràng là phải nội soi nên em cũng hơi ngại.</i></b></p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\"><b style=\"margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\"><i style=\"margin: 0px; padding: 0px; border: 0px; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\">Em muốn hỏi bác sĩ, trường hợp của em có ổn không ạ, liệu cứ để vậy thì có nguy cơ gì không? Em cảm ơn bác sĩ. (Trần Thị Đào, TP.HCM)</i></b></p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\">Chào em,</p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\">Em nên cần tìm tới bác sĩ chuyên khoa nội tiêu hoá để được thăm khám và xét nghiệm để làm rõ nguyên nhân gây ra tình trạng của mình từ đó đưa ra hướng theo dõi và điều trị thích hợp.</p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\"><b style=\"margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\"><i style=\"margin: 0px; padding: 0px; border: 0px; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\">* Dạ chào bác sĩ, tôi bị một cục u cứng ở hậu môn nhưng lồi ra phía&nbsp; bên ngoài hậu môn, mới bị 1 tuần nay, chưa đi khám được.&nbsp; Tôi có lên mạng tìm hiểu, thì thấy giống biểu hiện của bệnh trĩ, nhưng&nbsp; tôi cũng không chắc chắn lắm, vì tôi vẫn lo sợ là u. Trường hợp của tôi có nghiêm trọng không và cục u đó có tự tiêu nếu uống thuốc không hay phải cắt, thưa bác sĩ? (Tiến Đình, dinhnguyenfpt4586@...) ...)</i></b></p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\">Triệu chứng đó có thể là trĩ hoặc polyp hoặc một bất thường khác ở ống hậu môn, bạn nên tới khám sớm ở chuyên khoa hậu môn trực tràng hoặc ngoại tiêu hoá để được chẩn đoán và điều trị</p></div>');
INSERT INTO `tintuc` (`id`, `tentintuc`, `hinhanh`, `noidung`) VALUES
(2, 'Hút thuốc lào có dễ mắc ung thư không?', 'ung-thu-thuc-quan-2.jpg', '<h2 class=\"sapo\" style=\"margin: 0px 0px 12px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-weight: normal; font-stretch: normal; font-size: 16px; line-height: 22px; font-family: NotoSans-Bold; vertical-align: baseline; color: rgb(34, 34, 34); letter-spacing: -0.2px; background-color: rgba(255, 255, 255, 0.95);\">TTO - Thông tin về việc hút thuốc lào và thuốc lá, loại nào dễ dẫn đến ung thư hơn? Các bác sĩ bệnh viện Quốc tế Mỹ (AIH) cho rằng, tác hại của hai loại thuốc này đều như nhau, cần bỏ sớm.</h2><div class=\"relate-container\" style=\"margin: 0px 0px 15px; padding: 10px 0px; border: 0px; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch: inherit; font-size: medium; line-height: inherit; font-family: Arial, Helvetica, sans-serif; vertical-align: baseline; background-color: rgb(246, 246, 246);\"><ul style=\"margin: 0px 0px 0px 28px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; list-style-position: initial; list-style-image: initial;\"><li style=\"margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline;\"><a data-zone=\"0\" data-type=\"1\" data-newstype=\"30\" data-id=\"20190506215553661\" title=\"Lắp răng giả có gây ung thư miệng?\" data-objecttype=\"1\" data-title-encode=\"TCVFMSVCQSVBRnAlMjByJUM0JTgzbmclMjBnaSVFMSVCQSVBMyUyMGMlQzMlQjMlMjBnJUMzJUEyeSUyMHVuZyUyMHRoJUM2JUIwJTIwbWklRTElQkIlODduZyUzRg==\" href=\"https://tuoitre.vn/lap-rang-gia-co-gay-ung-thu-mieng-20190506215553661.htm\" style=\"margin: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 12px; line-height: 2.08; font-family: Roboto-Bold; vertical-align: baseline; display: block; text-decoration-line: none; color: rgb(34, 34, 34);\">Lắp răng giả có gây ung thư miệng?</a></li><li style=\"margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline;\"><a data-zone=\"0\" data-type=\"1\" data-newstype=\"30\" data-id=\"20190423215326352\" title=\"Nấu thức ăn trong nồi nhôm có gây ung thư thực quản?\" data-objecttype=\"1\" data-title-encode=\"TiVFMSVCQSVBNXUlMjB0aCVFMSVCQiVBOWMlMjAlQzQlODNuJTIwdHJvbmclMjBuJUUxJUJCJTkzaSUyMG5oJUMzJUI0bSUyMGMlQzMlQjMlMjBnJUMzJUEyeSUyMHVuZyUyMHRoJUM2JUIwJTIwdGglRTElQkIlQjFjJTIwcXUlRTElQkElQTNuJTNG\" href=\"https://tuoitre.vn/nau-thuc-an-trong-noi-nhom-co-gay-ung-thu-thuc-quan-20190423215326352.htm\" style=\"margin: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 12px; line-height: 2.08; font-family: Roboto-Bold; vertical-align: baseline; display: block; text-decoration-line: none; color: rgb(34, 34, 34);\">Nấu thức ăn trong nồi nhôm có gây ung thư thực quản?</a></li><li style=\"margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline;\"><a data-zone=\"0\" data-type=\"1\" data-newstype=\"30\" data-id=\"20190501094817207\" title=\"Ăn nhiều thịt đỏ dễ tăng nguy cơ ung thư\" data-objecttype=\"1\" data-title-encode=\"JUM0JTgybiUyMG5oaSVFMSVCQiU4MXUlMjB0aCVFMSVCQiU4QnQlMjAlQzQlOTElRTElQkIlOEYlMjBkJUUxJUJCJTg1JTIwdCVDNCU4M25nJTIwbmd1eSUyMGMlQzYlQTElMjB1bmclMjB0aCVDNiVCMA==\" href=\"https://tuoitre.vn/an-nhieu-thit-do-de-tang-nguy-co-ung-thu-20190501094817207.htm\" style=\"margin: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 12px; line-height: 2.08; font-family: Roboto-Bold; vertical-align: baseline; display: block; text-decoration-line: none; color: rgb(34, 34, 34);\">Ăn nhiều thịt đỏ dễ tăng nguy cơ ung thư</a></li></ul></div><div class=\"content fck\" id=\"main-detail-body\" style=\"margin: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: medium; line-height: 1.44; font-family: NotoSans-Regular; vertical-align: baseline; color: rgb(34, 34, 34); letter-spacing: -0.2px; background-color: rgba(255, 255, 255, 0.95);\"><div class=\"VCSortableInPreviewMode noCaption active\" type=\"Photo\" style=\"margin: 1.3em auto 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 11px; line-height: 1.45; font-family: Roboto; vertical-align: baseline; text-align: center; display: table; position: relative; z-index: 2;\"><div style=\"margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline;\"><a href=\"https://cdn.tuoitre.vn/2019/5/8/thuoc-la-15573289373591594591102.jpg\" data-fancybox-group=\"img-lightbox\" title=\"\" target=\"_blank\" class=\"detail-img-lightbox\" style=\"margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; display: initial; text-decoration-line: none; cursor: zoom-in; color: rgb(237, 27, 47); letter-spacing: -0.2px;\"><img src=\"https://cdn.tuoitre.vn/2019/5/8/thuoc-la-15573289373591594591102.jpg\" id=\"img_0ed98630-71a5-11e9-ab56-0fb9e15ccceb\" w=\"600\" h=\"400\" alt=\"Hút thuốc lào có dễ mắc ung thư không? - Ảnh 1.\" title=\"Hút thuốc lào có dễ mắc ung thư không? - Ảnh 1.\" rel=\"lightbox\" photoid=\"0ed98630-71a5-11e9-ab56-0fb9e15ccceb\" type=\"photo\" data-original=\"https://cdn.tuoitre.vn/2019/5/8/thuoc-la-15573289373591594591102.jpg\" width=\"\" height=\"\" class=\"lightbox-content\" style=\"margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; max-width: 100%; color: transparent; width: 440px;\"></a></div></div><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\"><b style=\"margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\"><i style=\"margin: 0px; padding: 0px; border: 0px; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\">* Thưa bác sĩ, tôi năm nay 61 tuổi, có bệnh mỡ máu còn lại không mắc bệnh gì khác. Tôi đọc thông tin về nguy cơ mắc bệnh ung thư miệng và hậu môn trong đó có người thường xuyên hút thuốc. Tuy nhiên, tôi không hút thuốc lá mà hút thuốc lào (điếu cày) 15 năm nay. Tôi muốn biết là việc hút thuốc lào có nguy hại không? Có dễ bị ung thư như thuốc lá không? (Nguyễn Văn Tuấn, 61 tuổi, nguyenvantuan198@...)</i></b></p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\">- Chào bạn Tuấn, việc hút thuốc lá hay hút thuốc lào đều như nhau cả về tác hại của nó, việc hút thuốc khng những gây bệnh lý cho phổi mà còn gây ra nhiều bệnh khác ở cả vùng miệng cũng như hậu môn đấy bạn ạ, cho nên bạn cần bỏ sớm hút thuốc cả 2 loại thuốc đó.</p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\"><b style=\"margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\">* Tôi phát hiện mình bị ung thư lưỡi giai đoạn 3. Xin hỏi bác sĩ ở giai đoạn của tôi còn có thể thực hiện phẫu thuật bóc tách, nạo hạch được nữa hay không? Khả năng sống của tôi còn bao nhiêu phần trăm? (Dương Đức Mạnh, 55 tuổi, manhduongduc123@...)</b></p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\">- Chào bạn Mạnh, bạn cho biết bạn bị k.lưỡi gđ.3, nhưng không rõ vị trí u ở 1/3 ngoài, trong hay giữa, tổng trạng bạn có bệnh nào kèm theo không, nên thật khó trả lời cụ thể cho bạn, đồng thời còn phụ thuộc vào từng cơ sở chữa trị bạn ạ.</p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\"><b style=\"margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\"><i style=\"margin: 0px; padding: 0px; border: 0px; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\">* Tôi năm nay 55 tuổi, nửa năm nay tôi nuốt thức ăn bị v¬ướng, nghẹn và đau họng. Ngoài ra cũng có cảm giác đầy bụng, chậm tiêu. Tôi đi nội soi thực quản và được biết có tổn th-ương cách cung răng tr¬ước 30cm, có vết sần và loét. Phía bệnh viện hẹn ngày làm sinh thiết để xác định bệnh. Xin bác sĩ cho tôi biết, tình trạng của tôi là bình thường hay đó là dấu hiệu ung thư thực quản? (Nguyễn Văn Tuấn, 55 tuổi, tuannguyenhn@...)</i></b></p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\">- Chào bạn Tuấn, theo bạn trao đổi thì bạn có 1 số dấu hiệu nuốt vướng, nghẹn, đau họng, đầy bụng, chậm tiêu, có đi nội soi, và được bs hẹn ngày làm sinh thiết, bạn hỏi về tình trạng bệnh.</p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\">Trước tiên bạn nên yên tâm, các dấu hiệu trên cũng chưa nói được điều gì cả, nên chờ kết qủa của sinh thiết bạn ạ, chắc không có gì đáng ngại cả.</p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\"><b style=\"margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\"><i style=\"margin: 0px; padding: 0px; border: 0px; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\">* Anh trai cháu vừa nhận kết quả chụp PT/CT đánh giá và với chẩn đoán ung thư¬ thực quản T2N0M0. Bệnh viện chỉ định hoá trị và xạ trị. Cháu xin hỏi khả năng khỏi bệnh của anh cháu còn cao không? Còn được bao nhiêu năm nữa ạ? (Lê Thùy Thanh Liên, 25 tuổi, noibuondanhroi@...)</i></b></p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\">- Chào cháu Thanh Liên, anh cháu bị ung thư thực quản T2N0M0, bệnh viện chỉ định HT, XT, để trả lời cụ thể thật khó cháu ạ, đồng thời cũng không rõ vị trí u, GPB, thể trạng nữa...nhưng có lời khuyên là cháu và mọi người cần bình tĩnh, không quá lo lắng, cố gắng theo bác sĩ chữa trị nhé.</p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\"><b style=\"margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\"><i style=\"margin: 0px; padding: 0px; border: 0px; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\">* Thưa bác sĩ, viêm loét thực quản ở mức độ nào và kéo dài bao lâu thì sẽ dẫn đến ung thư thực quản ạ? Tôi có chứng viêm loét dạ dày đã rất lâu, tôi đang lo lắng tình trạng bệnh cùa mình. Mong bác sĩ tư vấn giúp? (Xuân Phương, 45 tuổi, xuanphuong4p@...)</i></b></p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\">- Chào bạn Phương, không thể nói viêm loét thực quản ở mức độ nào, kéo dài bao lâu sẽ dẫn đến k.thực quản. Còn bạn bị viêm loét dd đã rất lâu, bạn lai hay lo lắng thì có đầu tiên bạn cần chữa cho lành viêm loét dạ dày, sau đó cần định kì đi khám tầm soát ung thư, chủ yếu về dạ dày, tiêu hóa, có gì mình can thiệp sớm thì không có gì lo ngại cả, chào bạn.</p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\"><b style=\"margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\"><i style=\"margin: 0px; padding: 0px; border: 0px; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\">* Tôi đau dạ dày suốt 2-3 tháng nay, khi nội soi, bs kết luận sung huyết bao tử và uống thuốc điều trị trong 1,5 tháng. Cho tôi hỏi, sung huyết bao tử có nguy hiểm lắm không, nếu điều trị, có trở lại bình thường không? hay còn tiềm ẩn những nguy cơ gì? (Trinhnguyen@...)</i></b></p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\">- Chào bạn, theo bạn nói bạn bị đau dạ dày 2-3 tháng nay, đi nội soi được kết luận xung huyết bao tử, đượ c uống thuốc 1,5 tháng, bạn hỏi có nguy hiểm không? Trước mắt thì không, nhưng lâu dài thì không nói trước được, điều trị tốt thì khỏi, nếu chế độ ăn không tốt, hay lo lắng (stress), rượu bia, nhiễm HPV thì không tốt, không nói trước điều gì bạn ạ.</p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\"><b style=\"margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\"><i style=\"margin: 0px; padding: 0px; border: 0px; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\">* Vừa rồi tôi có đọc thông tin trên mạng chia sẻ về việc ăn mì gói, ăn thức ăn chua cay nhiều có nguy cơ bị ung thư dạ dày? Vậy ung thư dạ dày phần lớn do chế độ ăn uống hay là do di truyền ạ? Nếu mắc ung thư dạ dày giai đoạn sớm khả năng chữa trị thành công là bao nhiêu phần trăm? (Nguyễn Thị Trâm Anh, Q12, TP.HCM)</i></b></p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\">- Chào bạn Trâm Anh, những thông tin trên mạng bạn nên tham khảo thôi, không nên quá lo lắng về mì gói chua cay nhé. Đúng là ung thư dạ dày có nhiều yếu tố gây ra, như chế độ ăn, rượu bia, môi trường, thuốc lá và chính là nhiễm HPV.</p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\">Còn phát hiện sớm (Tis) chữa khỏi gần như 100% bạn ạ.</p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\"><b style=\"margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\"><i style=\"margin: 0px; padding: 0px; border: 0px; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\">* Tôi dạo gần đây hay bị ợ chua, nóng rát bao tử. trước đây tôi bị viêm loét da dày, đã điều trị một thời gian thì nay bị đau lại. Dù ăn 1uôgn đúng giờ cũng bị đau. Mỗi lần đau tôi uống Phosphalugen và Nexium thì thấy đỡ nhưng cứ tái đi tái lại. cho tôi hỏi đây có phải dấu hiệu của ung thư dạ dày không? Và để kiểm tra nên làm những xét nghiệm gì? (Longnguyen@...)</i></b></p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\">- Xin chào bạn, qua trao đổi của bạn, thì bạn nên tới bác sĩ, bệnh viện để khám và tư vấn cho bạn. Không nên tự đi mua thuốc về uống mỗi khi đau, còn bạn hỏi đây có phải là dấu hiệu ung thư không thì ko thể nói là bị ung thư, nhưng cũng không loại trừ, bạn nên vào bệnh viện để bác sĩ tư vấn cụ thể, nếu cần sẽ Nội Soi, Sinh Thiết và làm các xét nghiệm khác để làm rõ căn bệnh của bạn nhé. Chào bạn.</p><div id=\"zone-jnvk0c1v\" class=\"ArfGroup\" style=\"margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline;\"><div id=\"share-jnvk0cro\" class=\"ArfGroup\" style=\"margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline;\"><div id=\"placement-jvltfjo5\" class=\"ArfGroup\" style=\"margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline;\"><div id=\"banner-jnvk0c1v-jvltfkj2\" class=\"ArfGroup\" style=\"margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; min-height: 0px; min-width: 10px;\"><div id=\"slot-1-jnvk0c1v-jvltfkj2\" style=\"margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline;\"></div></div></div></div></div><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\"><b style=\"margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\"><i style=\"margin: 0px; padding: 0px; border: 0px; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\">* Bố tôi nghiện rượu, mỗi bữa cơm đều phải có một cốc rượu mới nuốt được. Mấy năm gần đây còn bị thêm mỡ máu, cao huyết áp, vôi hóa mạch vành. Nửa tháng trước dấu hiệu sức khỏe của ông cụ đi xuống nên tôi đưa bố đến bệnh viện kiểm tra và được kết luận bị ung thư dạ dày giai đoạn 3. Xin bác sĩ cho biết với trường hợp mắc thêm nhiều bệnh như bố tôi thì hướng điều trị như thế nào? Cơ hội sống có còn cao hay không? (Hà Thị Thúy Lan, 35 tuổi, thuylanhathi1985@...)</i></b></p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\">- Chào bạn Thúy Lan, theo bạn trao đổi thì bố bạn bị ung thư dạ dày giai đoạn 3, nhưng không rõ u ở vị trí nào vì mỗi vị trí khác nhau có các phương pháp điều trị khác nhau. Bố bạn lại có các bệnh khác kèm theo như cao HA, mỡ máu, vôi hóa mạch vành...cho nên thể trạng cho phép, các bệnh kèm theo đươc kiểm soát thì có thể trước tiên là Phẫu Thuật sau đó sẽ Hóa trị cho bố bạn. Hiện nay có nhiều loại thuốc tốt, hiệu quả và ít tác dụng phụ, nên bạn yên tâm bác sĩ sẽ có chỉ định đúng cho bố bạn nhé. Chúc bố bạn mau khỏe.</p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\"><b style=\"margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\"><i style=\"margin: 0px; padding: 0px; border: 0px; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\">* Vợ tôi bị ung thư dạ dày, hiện đang thực hiện hóa trị, truyền Epirubicin, và 5-FU. Tuy nhiên mấy ngày mưa nắng thất thường này cô ấy bị đau đầu. Xin hỏi có được uống các loại giảm đau phổ biến như pracetamol hay không? (Trịnh Văn Việt, Quảng Bình, viettrunghungdung@...)</i></b></p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\">- Chào bạn Việt ở Quảng bình, theo bạn trao đổi vợ bạn bị k.dd đang đươc HT, truyền thuốc Epirubicin và 5FU nhưng mấy ngày vừa qua thay đổi thời tiết làm đau đàu thì việc uống giảm đau là bình thường thôi. Bạn không lo lắng gì cả, cố gắng điều trị theo đúng của bác sĩ đã cho bạn nhé, chúc vợ bạn mau chóng lành bệnh.</p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\"><b style=\"margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\"><i style=\"margin: 0px; padding: 0px; border: 0px; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\">* Tôi bị sút cân, ăn không ngon, hay đau dạ dày, đi khám thì có kết quả sau: đường Z cách cung răng 39cm; hang vị: niêm mạc sung huyết, phù nề; Tiền môn vị: phát hiện một tổn thương màu trắng đục nhô cao; Test Urease N.S: dương tính. Bệnh viện chỉ định làm sinh thiết sớm. Xin hỏi tôi có phải đã bị ung thư dạ dày rồi hay không? Tôi 58 tuổi, không có thói quen bia rượu hay thuốc lá. (Ngô Đức Quyết, ngoducquyetvinhphuc@...)</i></b></p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\">- Chào bạn Quyết thân mến, bạn không nên lo lắng quá mức, bệnh viện có chỉ định như vậy là chính xác đấy bạn ạ, vì khi nói là ung thư thì chỉ có kết luận của GPB trả lời dương tính mới được nói là ung thư. Bạn không uống bia rượu, không hút thuốc lá là tốt rồi, nhưng cũng còn nhiều yếu tố khác nữa cũng có thể gây ra ung thư và tuổi 58 cũng là thuộc nhóm có nguy cơ đấy. Cho nên bạn nên tuân theo sự chỉ dẫn của bs nhé. Chào bạn.</p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\"><b style=\"margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\"><i style=\"margin: 0px; padding: 0px; border: 0px; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\">* Mẹ cháu 60 tuổi, bị ung thư đại tràng hiện đã di căn vào phổi. Trường hợp mẹ cháu thì điều trị bằng hóa trị liệu còn cơ hội sống nữa hay không? Giai đoạn này cháu nên cho mẹ ăn thức ăn gì để kéo dài thời gian sống ạ? (Trần Thị Phượng, 30 tuổi, phuonghoanglua@...)</i></b></p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\">- Chào bạn Phượng nhé, theo bạn cho biết mẹ bạn bị k.đại tràng di căn phổi. Cho hỏi mẹ bạn được phát hiện bao lâu rồi, đã vào bệnh viện điều trị gì chưa. Nếu là mới thì bác sĩ sẽ có những chỉ định cụ thể, còn bạn hỏi riêng về Hóa Trị, cơ hội còn sống bao lâu, bạn yên tâm hiện nay có nhiều loại thuốc tốt chữa hiệu quả. Về chế độ ăn uống đủ chất dinh dưỡng, không kiêng gì, bà ăn được gì cho ăn thứ đó, bạn ạ.</p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\"><b style=\"margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\"><i style=\"margin: 0px; padding: 0px; border: 0px; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\">* Nhiều người đi cầu ra máu, tưởng là trĩ, đi khám mới ra ung thư trực tràng.&nbsp;Vậy có cách nào phân biệt 2 bệnh này không ạ? Bệnh trĩ có thể tiến triển thành ung thư không, thưa bác sĩ? (Hậu, Bình Dương)</i></b></p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\">Chào bạn, c<span style=\"margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline;\">ách tốt nhất tìm gặp bác sĩ chuyên khoa để được tư vấn và xác định thời điểm cần tầm soát cũng như phương pháp phù hợp để tìm ra những biến đổi tiền ung thư để có phương án can thiệp cũng như theo dõi.</span></p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\">Bệnh trĩ không tiến triển thành ung thư.</p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\"><b style=\"margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\"><i style=\"margin: 0px; padding: 0px; border: 0px; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\">* Em là nữ, năm nay 27 tuổi. Hồi nhỏ lúc khoảng 10 tuổi, em bị đau đại tràng, bác sĩ kết luận là bị co thắt đại tràng hay viêm đại tràng mãn tính, em không còn nhớ rõ. Khi đó gia đình có cho uống thuốc, đa phần là thuốc đông y. Mỗi lần cơn đau là đau sống đau chết, cảm giác thắt lại, nhưng chỉ một chút lại hết, rồi lại đau, và thường đi cầu ngay lúc vừa ăn xong.&nbsp;</i></b></p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\"><b style=\"margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\"><i style=\"margin: 0px; padding: 0px; border: 0px; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\">Sau đó đến nay thì không còn những cơn đau như vậy, nhưng em vẫn thường bị đi ngoài phân lỏng, phân sống nếu ăn phải cái gì không đảm bảo hoặc do uống sữa buổi sáng. Hồi đó đến nay, chắc cũng khoảng 15 năm rồi, em không đi khám về đại tràng nữa. Một phần kiểm tra đại tràng là phải nội soi nên em cũng hơi ngại.</i></b></p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\"><b style=\"margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\"><i style=\"margin: 0px; padding: 0px; border: 0px; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\">Em muốn hỏi bác sĩ, trường hợp của em có ổn không ạ, liệu cứ để vậy thì có nguy cơ gì không? Em cảm ơn bác sĩ. (Trần Thị Đào, TP.HCM)</i></b></p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\">Chào em,</p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\">Em nên cần tìm tới bác sĩ chuyên khoa nội tiêu hoá để được thăm khám và xét nghiệm để làm rõ nguyên nhân gây ra tình trạng của mình từ đó đưa ra hướng theo dõi và điều trị thích hợp.</p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\"><b style=\"margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\"><i style=\"margin: 0px; padding: 0px; border: 0px; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; letter-spacing: -0.2px;\">* Dạ chào bác sĩ, tôi bị một cục u cứng ở hậu môn nhưng lồi ra phía&nbsp; bên ngoài hậu môn, mới bị 1 tuần nay, chưa đi khám được.&nbsp; Tôi có lên mạng tìm hiểu, thì thấy giống biểu hiện của bệnh trĩ, nhưng&nbsp; tôi cũng không chắc chắn lắm, vì tôi vẫn lo sợ là u. Trường hợp của tôi có nghiêm trọng không và cục u đó có tự tiêu nếu uống thuốc không hay phải cắt, thưa bác sĩ? (Tiến Đình, dinhnguyenfpt4586@...) ...)</i></b></p><p style=\"margin-right: 0px; margin-bottom: 24px; margin-left: 0px; padding: 0px; border: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 16px; line-height: 1.44; vertical-align: baseline; letter-spacing: -0.2px;\">Triệu chứng đó có thể là trĩ hoặc polyp hoặc một bất thường khác ở ống hậu môn, bạn nên tới khám sớm ở chuyên khoa hậu môn trực tràng hoặc ngoại tiêu hoá để được chẩn đoán và điều trị</p></div>'),
(48, 'Đau bụng - dấu hiệu phổ biến của nhiều bệnh nguy hiểm', 'hinh.jpg', '<p><i><strong>Đau bụng có thể ở mức độ nhẹ hoặc nghiêm trọng, liên tục hoặc xuất hiện rồi biến mất, cấp tính hoặc mãn tính – tức kéo dài hàng tuần, hàng tháng hoặc hàng năm. Vị trí, kiểu đau, nhất là thời gian phát bệnh đặc biệt hữu ích trong việc cung cấp những manh mối quan trọng để xác định nguyên nhân đau bụng.</strong></i></p><h2>1. Nguyên nhân đau bụng</h2><h3>1.1. Đau bụng trên</h3><figure class=\"image\"><img src=\"https://vinmec-prod.s3.amazonaws.com/images/20190622_024605_656629_dau-bung-1.max-1800x1800.png\" alt=\"Đau bụng trên\"></figure><figure class=\"image\"><img src=\"https://vinmec-prod.s3.amazonaws.com/images/20190622_024641_249165_dau-bung-2.max-1800x1800.png\" alt=\"Đau bụng trên\"></figure><p>&nbsp;</p><p>Lưu ý rằng rất nhiều nguyên nhân đau bụng nhận thức được không đến từ các vị trí của phần bụng. Điều này đặc biệt rõ ràng với đau bụng trên xảy ra ở một cơ quan hoặc hệ cơ quan gần phần bụng trên như phần dưới phổi (viêm phổi) hoặc đôi khi là vấn đề của tim như đau thắt ngực, nhồi máu cơ tim, đặc biệt ở nữ giới.</p><h3>1.2. Đau bụng dưới</h3><figure class=\"image\"><img src=\"https://vinmec-prod.s3.amazonaws.com/images/20190622_024715_663012_dau-bung-a.max-1800x1800.png\" alt=\"Đau bụng dưới\"></figure><figure class=\"image\"><img src=\"https://vinmec-prod.s3.amazonaws.com/images/20190622_024747_264891_dau-bung-b.max-1800x1800.png\" alt=\"Đau bụng dưới\"></figure><p>&nbsp;</p><p>Một số trong các nguyên nhân trên rất khó định vị và người bệnh chỉ tường thuật “chỗ nào cũng đau”. Một số đáng kể người bệnh bị những cơn đau lan tỏa trong khi cũng là nguyên nhân ấy nhưng ở bệnh nhân khác lại là đau khu trú, ví dụ như đau do viêm ruột thừa, viêm túi thừa, vân vân.</p><p>Tuy nhiên, những tình trạng sau thường gây đau bụng lan tỏa:</p><ul><li>Phình động mạch</li><li>Chướng bụng</li><li>Đầy hơi</li><li>Viêm dạ dày ruột</li><li>Lồng ruột</li><li>Hội chứng ruột kích thích</li><li>Thiếu máu cục bộ mạc treo</li><li>Viêm hạch mạc treo</li><li>Viêm phúc mạc</li><li>Mang thai (người bệnh chưa biết)</li><li>Thiếu máu tế bào lưỡi liềm</li><li>Viêm loét đại tràng</li><li>Urê - huyết.</li></ul><p>Các danh sách trên đưa ra nhiều ví dụ về nguyên nhân gây đau bụng (không đầy đủ). Các bác sĩ căn cứ trên vị trí đau, kiểu đau và cường độ đau để đưa ra chẩn đoán. Ví dụ như, nếu một bệnh nhân lớn tuổi có cơn đau cấp tương đối ổn định trong vòng vài giờ đồng hồ, khu trú tại bụng trái hoặc phần giữa bụng dưới với điểm đau 9 trên 10, đau nhói hoặc như bị xé, bác sĩ sẽ đặt phình động mạch chủ ngực ở vị trí cao trong danh sách nguyên nhân nghĩ đến.</p><h3>1.3. Đau bụng cấp</h3><p>&nbsp;</p><p>Có rất nhiều nguyên nhân gây đau bụng cấp, thường đi kèm với các triệu chứng khác và tiến triển trong vài giờ đến vài ngày. Chúng bao gồm từ những tình trạng nhẹ tự khỏi không cần điều trị đến những trường hợp y tế khẩn cấp nghiêm trọng, bao gồm:</p><ul><li>Phình động mạch chủ bụng</li><li>Viêm ruột thừa</li><li>Viêm ống mật</li><li>Viêm túi mật</li><li>Viêm bàng quang</li><li>Viêm túi thừa</li><li>Viêm tá tràng (viêm phần ruột đầu tiên của ruột non)</li><li>Thai ngoài tử cung</li><li>Tắc phân</li><li>Nhồi máu cơ tim</li><li>Chấn thương</li><li>Tắc ruột</li><li>Lồng ruột (nhi)</li><li>Nhiễm trùng thận (viêm thận - bể thận)</li><li>Sỏi thận</li><li>Áp xe gan (túi mủ trong gan)</li><li>Thiếu máu cục bộ mạc treo</li><li>Viêm hạch mạc treo (hạch của mạc treo giữ các cơ quan đúng vị trí bị sưng)</li><li>Huyết khối mạc treo (khối máu đông trong tĩnh mạch đưa máu về từ ruột)</li><li>Viêm tụy</li><li>Viêm màng ngoài tim</li><li>Viêm phúc mạc</li><li>Viêm màng phổi</li><li>Viêm phổi</li><li>Nhồi máu phổi</li><li>Vỡ lách</li><li>Viêm vòi trứng</li><li>Viêm xơ hạch mạc treo</li><li>Zona</li><li>Nhiễm trùng lách</li><li>Áp xe lách (túi mủ trong lách)</li><li>Rách đại tràng</li><li>Nhiễm trùng đường tiểu</li><li>Viêm dạ dày ruột do siêu vi.</li></ul><figure class=\"image\"><img src=\"https://vinmec-prod.s3.amazonaws.com/images/20190406_034853_357057_dau-bung-kinh-thoi-.max-1800x1800.png\" alt=\"Đau bụng kinh thời kỳ kinh nguyệt\"></figure><p>Một số trường hợp đau bụng cấp có thể tự khỏi</p><p>&nbsp;</p><h3>1.4. Đau bụng mãn (từng đợt hoặc đợt cấp)</h3><p>Nguyên nhân cụ thể của đau bụng mãn thường rất khó xác định. Các triệu chứng từ nhẹ đến nặng, đến rồi đi nhưng không nhất thiết xấu đi theo thời gian. Các tình trạng có thể gây đau bụng mãn bao gồm:</p><ul><li>Đau thắt ngực (giảm lưu lượng máu đến tim)</li><li>Bệnh celiac</li><li>Lạc nội mạc tử cung</li><li>Sỏi mật</li><li>Viêm dạ dày (viêm niêm mạc dạ dày)</li><li>Bệnh trào ngược dạ dày thực quản (GERD)</li><li>Thoát vị gián đoạn</li><li><a href=\"https://www.vinmec.com/vi/benh/thoat-vi-ben-tre-em-3255/\">Thoát vị bẹn</a></li><li><a href=\"https://www.vinmec.com/vi/benh/hoi-chung-ruot-kich-thich-3045/\">Hội chứng ruột kích thích</a></li><li>Hội chứng Mittelschmerz (tình trạng đau bụng dưới một bên liên quan đến rụng trứng)</li><li>Đau dạ dày không loét</li><li>U nang buồng trứng</li><li>Bệnh viêm vùng chậu (PID)</li><li><a href=\"https://www.vinmec.com/vi/benh/viem-loet-da-day-3122/\">Loét dạ dày</a></li><li>Thiếu máu hồng cầu hình liềm</li><li>Co thắt cơ bụng</li><li>Viêm loét đại tràng.</li></ul><h3>1.5. Đau bụng tiến triển</h3><figure class=\"image\"><img src=\"https://vinmec-prod.s3.amazonaws.com/images/20190510_071541_781087_dau-da-day.max-1800x1800.jpg\" alt=\"Đau thượng vị dạ dày\"></figure><p>Đau bụng tiến triển theo thời gian có thể vô cùng nghiêm trọng</p><p>&nbsp;</p><p>Đau bụng liên tục xấu đi theo thời gian, thường đi kèm với sự phát triển của các triệu chứng khác, thường gây các tình trạng nghiêm trọng. Nguyên nhân gây đau bụng tiến triển bao gồm:</p><ul><li>Ung thư</li><li>Bệnh Crohn</li><li>Lách to</li><li>Ung thư túi mật</li><li>Viêm gan</li><li>Ung thư thận</li><li>Nhiễm độc chì</li><li>Ung thư gan</li><li>Bệnh u lympho không Hodgkin</li><li>Ung thư tuyến tụy</li><li>Ung thư dạ dày</li><li>Áp xe buồng trứng (túi chứa mủ liên quan đến ống dẫn trứng và buồng trứng)</li><li>Urê huyết (tích tụ các chất thải trong máu).</li></ul><p>Hãy gọi cho bác sĩ ngay khi bạn bị đau bụng nhiều đến nỗi không thể di chuyển mà không gây đau tăng, hoặc không thể ngồi yên hoặc tìm tư thế thoải mái hơn. Cần tìm hỗ trợ y tế ngay khi đau bụng đi kèm các dấu hiệu triệu chứng đáng lo ngại khác như:</p><ul><li>Đau nhiều</li><li>Sốt</li><li>Phân có máu</li><li>Buồn nôn và nôn liên tục</li><li>Sút cân</li><li>Vàng da</li><li>Đau nhiều khi chạm vào bụng</li><li>Sưng bụng.</li></ul><p>Trong khoảng thời gian đó, hãy tìm cách giảm đau. Ví dụ, ăn các bữa ăn nhỏ hơn nếu cơn đau của bạn đi kèm với chứng khó tiêu. Tránh dùng thuốc giảm đau không kê đơn như aspirin hoặc ibuprofen (Advil, Motrin IB, những loại khác) vì những thuốc này có thể gây kích ứng dạ dày có thể làm đau bụng hơn.</p><p><i><strong>Bài viết tham khảo nguồn Mayoclinic.org</strong></i> .</p>'),
(49, 'Những lưu ý quan trọng trước khi khám sức khỏe tổng quát', 'ung-thu-thuc-quan-2.jpg', '<p>Với hệ thống phòng khám chữa bệnh hiện đại, sang trọng cùng nhiều trung tâm hỗ trợ chuyên ngành và công nghệ cao, Bệnh viện Đa khoa quốc tế Vinmec đã trở thành địa chỉ chăm sóc sức khỏe uy tín, đáng tin cậy của người dân. Quý khách hàng vui lòng dành một chút thời gian đọc kỹ các lưu ý trước khi đến Vinmec thực hiện khám sức khỏe tổng quát để đảm bảo đạt được kết quả chính xác nhất.</p><h2>1. Những thông tin cần cung cấp trước khi khám sức khỏe tổng quát tại Vinmec</h2><h3>Tiền sử sức khỏe gia đình</h3><p>Khách hàng cần chuẩn bị các thông tin về sức khỏe và bệnh tật của các thành viên trong gia đình mình. Tiền sử gia đình có thể làm quí vị tăng nguy cơ một số bệnh như đái tháo đường, ung thư, bệnh tim và đột quỵ.</p><p>Bác sĩ sẽ đánh giá nguy cơ bệnh của khách hàng dựa trên tiền sử gia đình và các yếu tố nguy cơ khác, đồng thời sẽ giúp quí vị biết cách phòng bệnh, làm xét nghiệm sàng lọc để phát hiện bệnh ở giai đoạn sớm.</p><h3>Tiền sử sức khỏe bản thân</h3><p>Bao gồm lịch chủng ngừa vaccine từ trước tới nay, những nguyên nhân gây dị ứng nếu có(thuốc, thực phẩm...). Khách hàng nhớ lại xem trước đây mình có mắc bệnh hay mổ gì hay không, quá trình điều trị như thế nào.</p><figure class=\"image\"><img src=\"https://vinmec-prod.s3.amazonaws.com/images/20190215_070755_419518_kham_suc_khoe_tong_.max-1800x1800.jpg\" alt=\"khám sức khỏe tổng quát\"></figure><p>Có nhiều điểm cần lưu ý trước khi khám sức khỏe tổng quát để đạt hiệu quả cao nhất</p><h2>2. Chuẩn bị trước khi đến khám sức khỏe tổng quát tại Vinmec</h2><h3>Mang theo đầy đủ giấy tờ tùy thân</h3><ul><li>Bao gồm chứng minh thư nhân dân hoặc hộ chiếu/thẻ căn cước công dân, bảo hiển y tế/bảo hiểm nhân thọ...</li><li>Nên mang theo các kết quả xét nghiệm, đơn thuốc cũ nếu có.</li></ul><h3>Một số vấn đề cần lưu ý</h3><ul><li>Khách hàng đang điều trị Tăng huyết áp, bệnh tim mạch: Vẫn dùng thuốc theo đơn hàng ngày.</li><li>Đang điều trị Đái tháo đường: Không nên dùng thuốc uống hoặc tiêm insulin vào buổi sáng khi đến khám.</li><li>Khách hàng có bệnh tật về mắt: Hãy mang theo kính đang dùng để kiểm tra thị lực. Không nên đeo kính áp tròng vào ngày khám.</li><li>Để thoải mái trong quá trình thăm khám nên tránh mặc quần áo bó quá chật hay mặc váy liền thân<br>&nbsp;</li></ul><h2>3. Chuẩn bị trước khi thực hiện các xét nghiệm trong gói khám sức khỏe tổng quát</h2><h3>Xét nghiệm máu</h3><ul><li>Một số xét nghiệm yêu cầu cần nhin ăn trước khi xét nghiệm: 12 giờ với xét nghiệm mỡ máu(Cholesterol, Triglycerid), đường máu(Glucose), định lượng các Vitamin.</li><li>Khách hàng chỉ nên uống nước lọc, không uống nước ngọt, sữa, nước hoa quả, rượu, chè, cà phê, trong vòng 12 tiếng trước khi làm xét nghiệm máu.</li><li>Không nên uống các loại vitamin và khoáng chất trong vòng 24 giờ trước khi làm xét nghiệm.</li></ul><h3>Xét nghiệm nước tiểu (Lấy vào ngày làm xét nghiệm)</h3><ul><li>Cần vệ sinh sạch tay và bộ phận sinh dục ngoài. Lấy mẫu nước tiểu bằng 1 tay không chạm vào mặt trong của lọ đựng bệnh phẩm (Trên lọ có ghi tên, ngày tháng năm sinh của khách hàng).</li><li>Quy trình lấy mẫu nước tiểu: Bắt đầu đi tiểu vào bồn cầu, sau đó vài giây đặt lọ xét nghiệm vào đúng dòng chảy để hứng trực tiếp nước tiểu đến khi được 2/3 lọ thì dừng. Vặn nắp lọ, cho vào trong túi díp, miết chặt miệng túi và đặt vào đúng nơi được hướng dẫn.</li></ul><h3>Xét nghiệm phân</h3><ul><li>Lấy mẫu phân bằng dụng cụ (thìa) trong lọ đựng bệnh phẩm (Trên lọ có ghi tên, ngày tháng năm sinh của khách hàng). Nên lấy ở chỗ có lẫn nhày, máu (nếu có).</li><li>Lượng phân khoảng 1 thìa (hay bằng đầu ngón tay). Vặn nắp lọ, cho vào trong túi díp, miết chặt miệng túi và đặt vào đúng nơi được hướng dẫn.</li></ul><h3>Xét nghiệm phiến đồ cổ tử cung âm đạo (PAP Smear hoặc Thinprep)</h3><p>Đây là xét nghiệm nhằm phát hiện sớm ung thư cổ tử cung. Lưu ý:</p><ul><li>Xét nghiệm này chỉ dành cho phụ nữ đã từng quan hệ tình dục</li><li>Không làm xét nghiệm này khi đang có kinh nguyệt, đang ra máu âm đạo, đang có viêm nhiễm nặng, đang đặt thuốc điều trị viêm âm đạo, đang có thai.</li><li>Thời điểm làm xét nghiệm nên trước và sau kỳ kinh ít nhất 7 ngày. Trước khi làm xét nghiệm 24 giờ không thụt rửa âm đạo, quan hệ tình dục.</li></ul><h2>4. Lưu ý trước khi thực hiện các kỹ thuật chẩn đoán hình ảnh</h2><h3>Chụp X. Quang tim phổi</h3><p>Nhằm phát hiện các tổn thương bất thường ở phổi, tim, tầm soát khối u phổi. Không áp dụng để kiểm tra ở phụ nữ có thai hoặc nghi ngờ có thai. Tổng thời gian thực hiện khoảng 5 phút (thay đồ, kiểm tra thông tin, đặt tư thế, phát tia).</p><h3>Chụp X. quang tuyến vú (nếu có)</h3><p>Kỹ thuật này nhằm phát hiện các tổn thương bất thường ở vú, sàng lọc ung thư vú. Thường áp dụng cho phụ nữ trên 40 tuổi hoặc theo chỉ định của bác sĩ, đối với phụ nữ có tiền sử gia đình bên ngoại bị ung thư vú có thể chụp sớm hơn.</p><ul><li>Phụ nữ đang có kinh nguyệt, đang cho con bú, đang có viêm tuyến vú hay áp xe vú nên trì hoãn.</li><li>Đối với phụ nữ chưa mạn kinh thì nên chụp vào ngày thứ 7 tới ngày thứ 14 của chu kỳ kinh (hoặc 1 tuần sau sạch kinh) vì khi đó nồng độ Estrogen trong máu giảm xuống, khi đó tuyến vú ít giữ nước, bớt căng hơn;</li><li>Đối với phụ nữ mạn kinh có thể chụp bất kỳ khi nào.</li><li>Trong trường hợp khách hàng đã thực hiện nâng ngực thẩm mỹ xin vui lòng thông báo cho kỹ thuật viên, bác sĩ biết.</li><li>Tổng thời gian thực hiện X Quang khoảng 20 phút.</li></ul><h3>Siêu âm ổ bụng (bao gồm phụ khoa với nữ và tiền liệt tuyến với nam)</h3><p>Nên nhịn ăn ít nhất 4 tiếng trước khi làm siêu âm để đánh giá đường mật, uống khoảng 500ml nước lọc và nhịn đi tiểu khoảng 1 giờ trước khi siêu âm để đánh giá vùng tiểu khung.</p><p>Thời gian thực hiện khoảng 10 phút.</p><h3>Siêu âm vú</h3><p>Nhằm phát hiện các bất thường của tuyến vú, thực hiện theo chỉ định của bác sĩ khám hay khuyến cáo của bác sĩ chẩn đoán hình ảnh. Thời gian thực hiện khoảng 10 phút.</p><h2>5. Trao đổi với bác sĩ khám sức khỏe tổng quát</h2><p>Sau khi có đủ các dữ liệu về tình trạng sức khỏe của khách hàng, bác sĩ sẽ cho bạn biết kết quả, cấp toa thuốc nếu cần và cho những lời khuyên về sức khỏe thông qua Báo cáo y tế và hoặc tư vấn trực tiếp hay qua điện thoại.</p><ul><li>Trong trường hợp khách hàng đã nhận báo cáo y tế cần tư vấn thêm có thể liên hệ với tổng đài để đặt lịch hẹn tư vấn, khách hàng nên đọc báo cáo y tế trước và chuẩn bị sẵn những câu hỏi cần trao đổi với bác sĩ.</li><li>Khách hàng cần hỏi bác sĩ tất cả thắc mắc về bệnh trạng của mình: có phải uống thuốc, uống trong bao lâu, phản ứng thuốc, có cách chữa nào khác ngoài dùng thuốc, tái khám...</li><li>Khách hàng cũng nên hỏi bác sĩ về chủng ngừa các bệnh như viêm gan siêu vi B, uốn ván, cúm gia cầm, ung thư cổ tử cung... Nếu đợt khám tổng quát đạt kết quả tốt, nếu có điều kiện, việc khám và kiểm tra sức khỏe định kỳ hằng năm là tốt nhất dù ở độ tuổi nào.</li></ul><p>Tổng thời gian để hoàn thiện chu trình khám sức khỏe tổng quát của Quý vị tại bệnh viện vào khoảng từ 2,5 giờ đến 3 giờ. Quý khách sẽ được phục vụ bữa ăn sáng nhẹ theo hướng dẫn của nhân viên trung tâm khám sức khỏe tổng quát.</p><p><br>&nbsp;</p>');

-- --------------------------------------------------------

--
-- Table structure for table `traloicauhoi`
--

CREATE TABLE `traloicauhoi` (
  `idtraloicauhoi` int(11) NOT NULL,
  `idbacsi` int(11) NOT NULL,
  `iddatcauhoi` int(11) NOT NULL,
  `noidung` text NOT NULL,
  `idtrangthaitraloicauhoi` int(11) NOT NULL,
  `iddanhmuccauhoi` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `traloicauhoi`
--

INSERT INTO `traloicauhoi` (`idtraloicauhoi`, `idbacsi`, `iddatcauhoi`, `noidung`, `idtrangthaitraloicauhoi`, `iddanhmuccauhoi`) VALUES
(1, 7, 47, 'Chào bạn, cảm ơn bạn đã gửi câu hoi cho chúng tôi 1', 2, 1),
(2, 6, 3, 'Chào bạn, cảm ơn bạn đã gửi câu hoi cho chúng tôi 2', 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `trangthaihethong`
--

CREATE TABLE `trangthaihethong` (
  `idtrangthaihethong` int(11) NOT NULL,
  `tentrangthai` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `trangthaihethong`
--

INSERT INTO `trangthaihethong` (`idtrangthaihethong`, `tentrangthai`) VALUES
(1, 'Kích hoạt'),
(2, 'Chưa kích hoạt'),
(3, 'Tạm khoá'),
(4, 'Chấm dứt');

-- --------------------------------------------------------

--
-- Table structure for table `trangthailichkham`
--

CREATE TABLE `trangthailichkham` (
  `idtrangthailichkham` int(11) NOT NULL,
  `tentrangthai` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `trangthailichkham`
--

INSERT INTO `trangthailichkham` (`idtrangthailichkham`, `tentrangthai`) VALUES
(1, 'Xác nhận'),
(2, 'Chờ xác nhận'),
(3, 'Chờ xác nhận');

-- --------------------------------------------------------

--
-- Table structure for table `trangthaitraloicauhoi`
--

CREATE TABLE `trangthaitraloicauhoi` (
  `idtrangthaitraloicauhoi` int(11) NOT NULL,
  `tentrangthai` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `trangthaitraloicauhoi`
--

INSERT INTO `trangthaitraloicauhoi` (`idtrangthaitraloicauhoi`, `tentrangthai`) VALUES
(1, 'Dang chờ'),
(2, 'Đã tư vấn'),
(3, 'Chưa xác nhận'),
(4, 'Đã xác nhận');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `bacsi`
--
ALTER TABLE `bacsi`
  ADD PRIMARY KEY (`idbacsi`) USING BTREE,
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `benhvien`
--
ALTER TABLE `benhvien`
  ADD PRIMARY KEY (`idbenhvien`);

--
-- Indexes for table `ca`
--
ALTER TABLE `ca`
  ADD PRIMARY KEY (`idca`);

--
-- Indexes for table `cabacsi`
--
ALTER TABLE `cabacsi`
  ADD PRIMARY KEY (`idcabacsi`);

--
-- Indexes for table `chucvu`
--
ALTER TABLE `chucvu`
  ADD PRIMARY KEY (`idchucvu`);

--
-- Indexes for table `chuyenkhoa`
--
ALTER TABLE `chuyenkhoa`
  ADD PRIMARY KEY (`idchuyenkhoa`);

--
-- Indexes for table `cthdxetnghiem`
--
ALTER TABLE `cthdxetnghiem`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `idhdxetnghiem` (`idhdxetnghiem`),
  ADD UNIQUE KEY `iddichvu` (`iddichvu`);

--
-- Indexes for table `dangkybs`
--
ALTER TABLE `dangkybs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `danhmuc`
--
ALTER TABLE `danhmuc`
  ADD PRIMARY KEY (`iddanhmuc`);

--
-- Indexes for table `danhmuccauhoi`
--
ALTER TABLE `danhmuccauhoi`
  ADD PRIMARY KEY (`iddanhmuccauhoi`);

--
-- Indexes for table `datcauhoi`
--
ALTER TABLE `datcauhoi`
  ADD PRIMARY KEY (`iddatcauhoi`);

--
-- Indexes for table `datcauhoibac`
--
ALTER TABLE `datcauhoibac`
  ADD PRIMARY KEY (`iddatcauhoibac`);

--
-- Indexes for table `datlich`
--
ALTER TABLE `datlich`
  ADD PRIMARY KEY (`iddatlich`);

--
-- Indexes for table `datlichbacsi`
--
ALTER TABLE `datlichbacsi`
  ADD PRIMARY KEY (`iddatlichbacsi`);

--
-- Indexes for table `datlichtheophongmach`
--
ALTER TABLE `datlichtheophongmach`
  ADD PRIMARY KEY (`iddltpm`);

--
-- Indexes for table `dichvu`
--
ALTER TABLE `dichvu`
  ADD PRIMARY KEY (`iddichvu`);

--
-- Indexes for table `gioitinh`
--
ALTER TABLE `gioitinh`
  ADD PRIMARY KEY (`idgioitinh`);

--
-- Indexes for table `hdxetnghiem`
--
ALTER TABLE `hdxetnghiem`
  ADD PRIMARY KEY (`idhdxetnghiem`);

--
-- Indexes for table `lichbs`
--
ALTER TABLE `lichbs`
  ADD PRIMARY KEY (`idlichbs`);

--
-- Indexes for table `nguoidung`
--
ALTER TABLE `nguoidung`
  ADD PRIMARY KEY (`idnguoidung`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `nhommau`
--
ALTER TABLE `nhommau`
  ADD PRIMARY KEY (`idnhommau`);

--
-- Indexes for table `thanhpho`
--
ALTER TABLE `thanhpho`
  ADD PRIMARY KEY (`idthanhpho`);

--
-- Indexes for table `tintuc`
--
ALTER TABLE `tintuc`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `traloicauhoi`
--
ALTER TABLE `traloicauhoi`
  ADD PRIMARY KEY (`idtraloicauhoi`);

--
-- Indexes for table `trangthaihethong`
--
ALTER TABLE `trangthaihethong`
  ADD PRIMARY KEY (`idtrangthaihethong`);

--
-- Indexes for table `trangthailichkham`
--
ALTER TABLE `trangthailichkham`
  ADD PRIMARY KEY (`idtrangthailichkham`);

--
-- Indexes for table `trangthaitraloicauhoi`
--
ALTER TABLE `trangthaitraloicauhoi`
  ADD PRIMARY KEY (`idtrangthaitraloicauhoi`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `bacsi`
--
ALTER TABLE `bacsi`
  MODIFY `idbacsi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `benhvien`
--
ALTER TABLE `benhvien`
  MODIFY `idbenhvien` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `ca`
--
ALTER TABLE `ca`
  MODIFY `idca` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `cabacsi`
--
ALTER TABLE `cabacsi`
  MODIFY `idcabacsi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `chucvu`
--
ALTER TABLE `chucvu`
  MODIFY `idchucvu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `chuyenkhoa`
--
ALTER TABLE `chuyenkhoa`
  MODIFY `idchuyenkhoa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `cthdxetnghiem`
--
ALTER TABLE `cthdxetnghiem`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `dangkybs`
--
ALTER TABLE `dangkybs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `danhmuc`
--
ALTER TABLE `danhmuc`
  MODIFY `iddanhmuc` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `danhmuccauhoi`
--
ALTER TABLE `danhmuccauhoi`
  MODIFY `iddanhmuccauhoi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `datcauhoi`
--
ALTER TABLE `datcauhoi`
  MODIFY `iddatcauhoi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `datcauhoibac`
--
ALTER TABLE `datcauhoibac`
  MODIFY `iddatcauhoibac` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `datlich`
--
ALTER TABLE `datlich`
  MODIFY `iddatlich` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `datlichbacsi`
--
ALTER TABLE `datlichbacsi`
  MODIFY `iddatlichbacsi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `datlichtheophongmach`
--
ALTER TABLE `datlichtheophongmach`
  MODIFY `iddltpm` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `dichvu`
--
ALTER TABLE `dichvu`
  MODIFY `iddichvu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `gioitinh`
--
ALTER TABLE `gioitinh`
  MODIFY `idgioitinh` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `hdxetnghiem`
--
ALTER TABLE `hdxetnghiem`
  MODIFY `idhdxetnghiem` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `lichbs`
--
ALTER TABLE `lichbs`
  MODIFY `idlichbs` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT for table `nguoidung`
--
ALTER TABLE `nguoidung`
  MODIFY `idnguoidung` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

--
-- AUTO_INCREMENT for table `nhommau`
--
ALTER TABLE `nhommau`
  MODIFY `idnhommau` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `thanhpho`
--
ALTER TABLE `thanhpho`
  MODIFY `idthanhpho` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tintuc`
--
ALTER TABLE `tintuc`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `traloicauhoi`
--
ALTER TABLE `traloicauhoi`
  MODIFY `idtraloicauhoi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `trangthaihethong`
--
ALTER TABLE `trangthaihethong`
  MODIFY `idtrangthaihethong` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `trangthailichkham`
--
ALTER TABLE `trangthailichkham`
  MODIFY `idtrangthailichkham` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `trangthaitraloicauhoi`
--
ALTER TABLE `trangthaitraloicauhoi`
  MODIFY `idtrangthaitraloicauhoi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
