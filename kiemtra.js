function validate() {
    var u = document.getElementById("username").value;
    var p1 = document.getElementById("password").value;
    var p2 = document.getElementById("password-repeat").value;

    if (u == "") {
        alert("Vui lòng nhập tên!");
        return false;
    }
    if (p1 == "") {
        alert("Vui lòng nhập mật khẩu!");
        return false;
    }
    if (p2 == "") {
        alert("Vui lòng xác minh mật khẩu!");
        return false;
    }
    if (p1 != p2) {
        alert("Mật khẩu không khớp, vui lòng nhập lại!");
        return false;
    }
    alert("Đăng ký tài khoản thành công!")

    return true;
}