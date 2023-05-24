interface ErrorElement {
    name: string,
    code: string,
    message: string,
}
export default class MessageErrors {
    static Data: Array<ErrorElement> = [
        {
            name: "Ok",
            code: "000000",
            message: "Thành công."
        },
        {
            name: "NotImplementedException",
            code: "000001",
            message: "Lỗi không thực thi."
        },
        {
            name: "BusinessException",
            code: "000002",
            message: "Lỗi hệ thống."
        },
        {
            name: "EventNotFoundException",
            code: "000003",
            message: "Lỗi không tìm thấy sự kiện"
        },
        {
            name: "InvalidStreamException",
            code: "000004",
            message: "Lỗi luồng không hợp lệ."
        },
        {
            name: "StreamNotFoundException",
            code: "000005",
            message: "Tài khoản hoặc mật khẩu không chính xác"
        },
        {
            name: "IncorrectProductItemException",
            code: "000006",
            message: "Số lượng sản phẩm nhập vào vượt quá giới hạn."
        },
        {
            name: "InvalidDeliveryAddressException",
            code: "000007",
            message: "Địa chỉ giao hàng không được tìm thấy."
        },
        {
            name: "InvalidTotalAmountException",
            code: "000008",
            message: "Quyền bị từ chối, Bạn có thể tạo người dùng chỉ thuộc đối tượng thuê của bạn"
        },
        {
            name: "InvalidTotalDiscountAmountException",
            code: "000009",
            message: "Tổng số tiền chiết khấu không hợp lệ."
        },
        {
            name: "OutOfStockException",
            code: "000010",
            message: "Số lượng sản phẩm không đủ."
        },
        {
            name: "UnableToGetItemException",
            code: "0000011",
            message: "Đã có lỗi xảy ra. Vui lòng liên hệ quản trị viên để biết thêm thông tin chi tiết!"
        },
        {
            name: "UnableToSaveItemException",
            code: "0000012",
            message: "Đã có lỗi xảy ra. Vui lòng liên hệ quản trị viên để biết thêm thông tin chi tiết!"
        },
        {
            name: "AlreadyDeletedFormulaException",
            code: "000013",
            message: "Công thức đã bị xóa ."
        },
        {
            name: "AttributeAlreadyDeletedException",
            code: "000014",
            message: "Thuộc tính đã bị xóa."
        },
        {
            name: "AttributeIdsRequiredException",
            code: "000015",
            message: "Bạn được yêu cầu nhập ID thuộc tính."
        },
        {
            name: "AttributeNotFoundException",
            code: "000016",
            message: "Không tìm thấy thuộc tính."
        },
        {
            name: "AttributeValueNotFoundException",
            code: "000017",
            message: "Không tìm thấy giá trị thuộc tính"
        },
        {
            name: "CategoryAlreadyDeletedException",
            code: "000018",
            message: "Bản ghi đã bị xoá."
        },
        {
            name: "CategoryCanNotDeletedException",
            code: "000019",
            message: "Danh mục không thể xoá, xin vui lòng xoá danh mục con."
        },
        {
            name: "CategoryNotFoundException",
            code: "000020",
            message: "Không thể tìm thấy bản ghi."
        },
        {
            name: "DuplicatedAttributeException",
            code: "000021",
            message: "Thuộc tính trùng lặp."
        },
        {
            name: "DuplicatedItemException",
            code: "000022",
            message: "Lỗi lặp lại bản ghi"
        },
        {
            name: "DuplicateMasterDataException",
            code: "000023",
            message: "Bản ghi bị trùng lặp."
        },
        {
            name: "InvalidAttributeException",
            code: "000024",
            message: "Thuộc tính không hợp lệ."
        },
        {
            name: "InValidCategoryException",
            code: "000025",
            message: "Bản ghi không hợp lệ."
        },
        {
            name: "InValidDonGiaNhanCongKhException",
            code: "000026",
            message: "Đơn giá nhân công khách hàng không hợp lệ."
        },
        {
            name: "InValidDonGiaNhanCongMaxKhException",
            code: "000027",
            message: "Giá trị tối đa của đơn giá nhân công khách hàng không hợp lệ."
        },
        {
            name: "InValidDonGiaNhanCongMinNvkdException",
            code: "000028",
            message: "Giá trị tối thiểu của đơn giá nhân công nhân viên kinh doanh không hợp lệ."
        },
        {
            name: "InValidDonGiaNhanCongNvkdException",
            code: "000029",
            message: "Đơn giá nhân công nhân viên kinh doanh không hợp lệ."
        },
        {
            name: "InValidDonGiaVatTuKhException",
            code: "000030",
            message: "Đơn giá vật tư khách hàng không hợp lệ."
        },
        {
            name: "InValidDonGiaVatTuMaxKhException",
            code: "000031",
            message: "Giá trị tối đa của đơn giá vật tư khách hàng không hợp lệ."
        },
        {
            name: "InValidDonGiaVatTuMinNvkdException",
            code: "000032",
            message: "Giá trị tối thiểu của đơn giá vật tư nhân viên kinh doanh không hợp lệ."
        },
        {
            name: "InValidDonGiaVatTuNvkdException",
            code: "000033",
            message: "Đơn giá vật tư nhân viên kinh doanh không hợp lệ."
        },
        {
            name: "InvalidParamCalculationFormulaException",
            code: "000034",
            message: "Danh sách tham số trong công thức không tồn tại trong hệ thống hoặc danh sách đầu vào tham số không giống với danh sách tham số trong đầu vào công thức."
        },
        {
            name: "InvalidParentCategoryException",
            code: "000035",
            message: "Danh mục cha không hợp lệ."
        },
        {
            name: "MasterDataCannotUpdateException",
            code: "000036",
            message: "Bản ghi không thể cập nhật"
        },
        {
            name: "MasterDataNotFoundException",
            code: "000037",
            message: "Không thể tìm thấy bản ghi."
        },
        {
            name: "MasterDataTypeNotFoundException",
            code: "000038",
            message: "Không thể tìm thấy kiểu của bản ghi."
        },
        {
            name: "NotFoundCategoryException",
            code: "000039",
            message: "Không thể tìm thấy bản ghi."
        },
        {
            name: "NotFoundFormulaException",
            code: "000040",
            message: "Không thể tìm thấy bản ghi."
        },

        {
            name: "NotFoundUomException",
            code: "000041",
            message: "Không thể tìm thấy bản ghi."
        },
        {
            name: "UnableToTrackRequestException",
            code: "000042",
            message: "Không thể trích xuất id yêu cầu hoặc id người dùng qua dữ liệu meta."
        },
        {
            name: "FileNotFoundException",
            code: "000043",
            message: "Đã có lỗi xảy ra. Không thể tìm kiếm tệp!"
        },

        {
            name: "InvalidPermissionsException",
            code: "000044",
            message: "Đã có lỗi xảy ra. Không có quyền truy cập"
        },

        {
            name: "ChangePasswordRequiredException",
            code: "000045",
            message: "Bạn được yêu cầu thay đổi mật khẩu của mình trước tiên"
        },
        {
            name: "DeniedPermissionException",
            code: "000046",
            message: "Quyền bị từ chối, Bạn có thể tạo người dùng chỉ thuộc đối tượng thuê của bạn"
        },
        {
            name: "ExpiredOtpException",
            code: "0000047",
            message: "Mã OTP của bạn đã hết hạn xin vui lòng thử lại."
        },
        {
            name: "ExpiredResetPasswordTokenException",
            code: "0000048",
            message: "Hết hạn đặt lại mật khẩu."
        },
        {
            name: "InValidCategoryException   ",
            code: "000049",
            message: "Đã có lỗi xảy ra. Vui lòng liên hệ quản trị viên để biết thêm thông tin chi tiết!"
        },
        {
            name: "IncorrectOtpWithLockoutEnabledException",
            code: "000050",
            message: "Mã OTP không đúng."
        },
        {
            name: "IncorrectPasswordException",
            code: "000051",
            message: "Mật khẩu không hợp lệ"
        },
        {
            name: "InvalidatedCaptchaTokenException",
            code: "000052",
            message: "Mã Capcha không hợp lệ."
        },
        {
            name: "InvalidProfileException",
            code: "000053",
            message: "Thông tin tài khoản không hợp lệ."
        },
        {
            name: "InvalidProfileException",
            code: "000054",
            message: "Thông tin tài khoản không hợp lệ."
        },
        {
            name: "ItemAlreadyLockedException",
            code: "000055",
            message: "Bản ghi đã bị khoá."
        },
        {
            name: "ItemAlreadyUnlockedException",
            code: "000056",
            message: "Bản ghi đã được mở khoá."
        },
        {
            name: "LockedUserOutException",
            code: "000057",
            message: "Tên đăng nhập hoặc mật khẩu không chính xác."
        },
        {
            name: "LockedUserOutInAffectedException",
            code: "000058",
            message: "Bạn đang tạm thời bị khóa."
        },
        {
            name: "LogInNameOrPasswordIncorrectWithLockoutEnabledException",
            code: "000059",
            message: "Tên đăng nhập hoặc mật khẩu không đúng."
        },
        {
            name: "LogInNameOrPasswordIncorrectWithoutLockOutException",
            code: "000060",
            message: "Tên đăng nhập hoặc mật khẩu không đúng."
        },
        {
            name: "MaximumOtpQuotationExceededException",
            code: "000061",
            message: "Mã OTP đã vượt quá lượt gửi."
        },
        {
            name: "NoDefaultProfileException",
            code: "000062",
            message: "Không tìm thấy thông tin cá nhân."
        },
        {
            name: "ProviderNotFoundException",
            code: "000063",
            message: "Không tìm thấy nhà cung cấp."
        },
        {
            name: "SameOldPasswordException",
            code: "000064",
            message: "Mật khẩu cũ giống với mật khẩu mới xin vui lòng thử lại."
        },
        {
            name: "SignInOauthNotValidException",
            code: "000065",
            message: "Token không hợp lệ."
        },
        {
            name: "UnableToSendOtpException",
            code: "000066",
            message: "Gửi OTP thất bại."
        },
        {
            name: "UserDeletedException   ",
            code: "000067",
            message: "Tài khoản đã bị xoá."
        },
        {
            name: "UserNotActiveException   ",
            code: "000068",
            message: "Tài khoản không hoạt động."
        },
        {
            name: "UserPendingForActivationException   ",
            code: "000069",
            message: "Tài khoản đang chờ kích hoạt."
        },
        {
            name: "UserPendingForApprovalException   ",
            code: "000070",
            message: "Tài khoản đang chờ chấp nhận."
        },
        {
            name: "UserPendingForConfirmationException   ",
            code: "000071",
            message: "Người dùng của bạn đang chờ xác nhận của bạn."
        },
        {
            name: "UnableToCancelOrderException",
            code: "000072",
            message: "Đơn hàng đã bị hủy, không thể thực hiện lại."
        },
        {
            name: "UnableToConfirmOrderException",
            code: "000073",
            message: "Đơn hàng đã được xác nhận, không thể làm lại"
        },
        {
            name: "UnableToRejectOrderException",
            code: "000074",
            message: "Đơn đặt hàng đã bị từ chối, không thể thực hiện lại"
        },
        {
            name: "DuplicateProductException",
            code: "000075",
            message: "Công tác công thức này đã có trong công tác tiêu chuẩn"
        },
        {
            name: "EmptyImportFileException",
            code: "000076",
            message: "Dữ liệu nhập vào trống."
        },
        {
            name: "IncorrectMasterDataException",
            code: "000077",
            message: "Đã có lỗi xảy ra. Vui lòng liên hệ quản trị viên để biết thêm thông tin chi tiết!"
        },
        {
            name: "InvalidTotalLaborUnitPriceException",
            code: "000078",
            message: "Tổng đơn giá nhân công không hợp lệ"
        },
        {
            name: "InvalidTotalMaterialsUnitPriceException",
            code: "000079",
            message: "Tổng đơn giá vật liệu không hợp lệ"
        },
        {
            name: "UnableGetMasterDataOrCategoryException",
            code: "000080",
            message: "Không thể xác thực dữ liệu"
        },
        {
            name: "DuplicateQuotationException",
            code: "000081",
            message: "Báo giá trùng lặp"
        },
        {
            name: "ExceedLaborPriceValueException",
            code: "000082",
            message: "Đơn giá nhân công tối đa đã vượt qua giá trị cho phép"
        },
        {
            name: "ExceedMaterialsPriceValueException",
            code: "000083",
            message: "Đơn giá vật tư tối đa đã vượt qua giá trị cho phép"
        },
        {
            name: "InValidAreaItemException",
            code: "000084",
            message: "Khu vực không chính xác"
        },
        {
            name: "InValidAttributeException",
            code: "000085",
            message: "Thuộc tính đầu vào không hợp lệ"
        },

        {
            name: "InValidCustomerException.",
            code: "000086",
            message: "Khách hàng có email này đang được quản lý bởi một nhân viên bán hàng khác."
        },

        {
            name: "InValidExportLaborPriceItemException",
            code: "000087",
            message: "Giá Nhân công không chính xác"
        },
        {
            name: "InValidExportMaterialsPriceItemException",
            code: "000088",
            message: "Giá vật liệu không chính xác"
        },
        {
            name: "InValidGrandTotalItemException",
            code: "000089",
            message: "Tổng giá trị không chính xác"
        },
        {
            name: "InValidGrandTotalException",
            code: "000090",
            message: "Tổng giá trị không không đúng"
        },
        {
            name: "InValidLaborTotalMoneyException",
            code: "000091",
            message: "Thành tiền nhân công không đúng"
        },
        {
            name: "InValidLaborUnitPriceItemException",
            code: "000092",
            message: "Đơn giá nhân công không đúng"
        },
        {
            name: "InValidM2LaborUnitPriceItemException",
            code: "000093",
            message: "Đơn giá nhân công trên mét vuông không chính xác"
        },
        {
            name: "InValidM2MaterialsUnitPriceItemException",
            code: "000094",
            message: "Đơn giá vật liệu trên mét vuông không chính xác"
        },
        {
            name: "InValidMaterialsTotalMoneyException",
            code: "000095",
            message: "Tổng tiền đơn giá vật liệu trên mét vuông không chính xác"
        },
        {
            name: "InValidMaterialUnitPriceItemException",
            code: "000096",
            message: "Đơn giá Vật liệu không đúng"
        },
        {
            name: "InValidQuotationItemExceptions",
            code: "000097",
            message: "Mục báo giá không hợp lệ."
        },
        {
            name: "InValidTaxMoneyException",
            code: "000098",
            message: "Thuế suất vật tư của người thuê không hợp lệ."
        },
        {
            name: "InValidTaxTotalException",
            code: "000099",
            message: "Tổng thuế suất vật tư của người thuê không hợp lệ."
        },
        {
            name: "InValidTenantQuotationException",
            code: "0000100",
            message: "Mục báo giá của người thuê không hợp lệ."
        },
        {
            name: "InValidTypeQuotationException",
            code: "0000101",
            message: "Đảm bảo rằng báo giá là bản nháp"
        },

        {
            name: "NotFoundAttributeValueException",
            code: "000102",
            message: "Không thể tìm thấy thuộc tính của bản ghi "
        },

        {
            name: "NotFoundBrandException",
            code: "0000103",
            message: "Không thể tìm thấy thương hiệu "
        },
        {
            name: "NotFoundCalculationFormulaException",
            code: "0000104",
            message: "Không thể tìm thấy công thức tính toán của bản ghi "
        },
        {
            name: "NotFoundOriginException",
            code: "0000105",
            message: "Không thể tìm thấy nguồn gốc "
        },

        {
            name: "NotFoundProductFormulaException",
            code: "000106",
            message: "Không thể tìm thấy công thức công tác "
        },

        {
            name: "NotFoundQuotationByTenantException",
            code: "0000107",
            message: "Không thể tìm thấy báo giá của người thuê "
        },
        {
            name: "NotFoundQuotationException",
            code: "0000108",
            message: "Không thể tìm thấy báo giá "
        },
        {
            name: "NotFoundQuotationItemException",
            code: "0000109",
            message: "Không thể tìm thấy sản phẩm tiêu chuẩn "
        },

        {
            name: "NotFoundRecommendationItemInQuotation",
            code: "000110",
            message: "Không thể tìm thấy đề xuất báo giá trong danh sách báo giá "
        },

        {
            name: "NotFoundUnitException",
            code: "0000111",
            message: "Không thể tìm thấy đơn vị "
        },
        {
            name: "UnableToGenerateNewIdException",
            code: "0000112",
            message: "Không thể khởi tạo id mới."
        },
        {
            name: "",
            code: "0000113",
            message: "Không thể xóa vì có một sản phẩm hiện có của danh mục này."
        },
        {
            name: "BadRequestException",
            code: "000400",
            message: "Lỗi sai URL"
        },
        {
            name: "UnauthorizedException UnauthorizedJwtException",
            code: "000401",
            message: "Không sở hữu quyền truy cập"
        },
        {
            name: "AccessDeniedException",
            code: "000403",
            message: "Không có quyền truy cập"
        },
        {
            name: "BadRequestException",
            code: "000404",
            message: "Website lỗi"
        },
        {
            name: "InternalServerError, ApiVersionErrorException, SystemException",
            code: "000500",
            message: "Lỗi máy chủ"
        },
        {
            name: "",
            code: '000999',
            message: "Đã có lỗi xảy ra. Vui lòng liên hệ quản trị viên để biết thêm thông tin chi tiết!"
        }
    ]

}