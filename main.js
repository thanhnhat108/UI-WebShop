var registerField = document.querySelector('.register-field')

registerField.onclick = function() {
    var modalSection = document.querySelector('.modal-section')
    modalSection.innerHTML = `
    <div class="modal">
    <div class="modal__overlay" onclick="closeModal()"></div>
    <div class="modal__body">
        
        <!-- Register form -->
        <div class="auth-form">
            <div class="auth-form__container">
                <div class="auth-form__header">
                    <h3 class="auth-form__heading">Đăng Ký</h3>
                    <span class="auth-form__switch-btn" onclick="changeModalLogin()">Đăng nhập</span>
                </div>

                <div class="auth-form__form">
                    <div class="auth-form__group">
                        <input type="text" class="auth-form__input" placeholder="Email">
                    </div>
                    <div class="auth-form__group">
                        <input type="password" class="auth-form__input" placeholder="Mật khảu">
                    </div>
                    <div class="auth-form__group">
                    <input type="password" class="auth-form__input" placeholder="Nhập lại mật khảu">
                    </div>
                </div>

                <div class="auth-form__aside">
                    <p class="auth-form__policy-text">Bằng việc đăng kí, bạn đã đồng ý với Cloud về 
                        <a href="#" class="auth-form__text-link">Điều khoản dịch vụ</a> &
                        <a href="#" class="auth-form__text-link">Chính sách bảo mật</a>
                    </p>
                </div>

                <div class="auth-form__controls">
                    <button class="btn auth-form__controls-back btn--normal" onclick="closeModal()">TRỞ LẠI</button>
                    <button class="btn btn--primary">ĐĂNG KÝ</button>
                </div>

            </div>

            <div class="auth-form__socials">
                <a href="#" class="auth-form__socials--facebook btn btn--with-icon">
                    <i class="auth-form__socials-icon fa-brands fa-facebook-square"></i>
                    <span class="auth-form__socials-title">Kết nối với Facebook</span>
                </a>
                <a href="#" class="auth-form__socials--google btn btn--with-icon">
                    <i class="auth-form__socials-icon fa-brands fa-google"></i>
                    <span class="auth-form__socials-title">Kết nối với Google</span>
                    
                    
                </a>
            </div>
        </div>
    `
}


var registerField = document.querySelector('.login-field')
registerField.onclick = function() {
    var modalSection = document.querySelector('.modal-section')
    modalSection.innerHTML = `
    <div class="modal">
    <div class="modal__overlay" onclick="closeModal()"></div>
    <div class="modal__body">
    <div class="auth-form">
        <div class="auth-form__container">
            <div class="auth-form__header">
                <h3 class="auth-form__heading">Đăng nhập</h3>
                <span class="auth-form__switch-btn" onclick="changeModalRegister()">Đăng Ký</span>
            </div>

            <div class="auth-form__form">
                <div class="auth-form__group">
                    <input type="text" class="auth-form__input" placeholder="Email">
                </div>
                <div class="auth-form__group">
                    <input type="password" class="auth-form__input" placeholder="Mật khảu">
                </div>
                <div class="auth-form__group">

            </div>

            <div class="auth-form__aside">
                <div class="auth-form__help">
                    <a href="#" class="auth-form__help-link auth-form__help-text-primary">Quên mật khẩu</a>
                    <span class="auth-form__help--separate"></span>
                    <a href="#" class="auth-form__help-link ">Cần trợ giúp?</a>
                </div>
            </div>

            <div class="auth-form__controls">
                <button class="btn auth-form__controls-back btn--normal" onclick="closeModal()">TRỞ LẠI</button>
                <button class="btn btn--primary">ĐĂNG NHẬP</button>
            </div>
        </div>
    </div>
<div class="auth-form__socials">
    <a href="#" class="auth-form__socials--facebook btn btn--with-icon">
        <i class="auth-form__socials-icon fa-brands fa-facebook-square"></i>
        <span class="auth-form__socials-title">Đăng nhập với Facebook</span>
    </a>
    <a href="#" class="auth-form__socials--google btn btn--with-icon">
        <i class="auth-form__socials-icon fa-brands fa-google"></i>
        <span class="auth-form__socials-title">Đăng nhập với Google</span>
    </a>
</div>

</div>
    `
}


// Handle logic
function closeModal() {
    document.querySelector('.modal-section').innerHTML = ''
}

function changeModalLogin() {
    document.querySelector('.auth-form').innerHTML = 
        `
        <div class="auth-form__container">
        <div class="auth-form__header">
            <h3 class="auth-form__heading">Đăng nhập</h3>
            <span class="auth-form__switch-btn" onclick="changeModalRegister()">Đăng Ký</span>
        </div>

        <div class="auth-form__form">
            <div class="auth-form__group">
                <input type="text" class="auth-form__input" placeholder="Email">
            </div>
            <div class="auth-form__group">
                <input type="password" class="auth-form__input" placeholder="Mật khảu">
            </div>
            <div class="auth-form__group">

        </div>

        <div class="auth-form__aside">
            <div class="auth-form__help">
                <a href="#" class="auth-form__help-link auth-form__help-text-primary">Quên mật khẩu</a>
                <span class="auth-form__help--separate"></span>
                <a href="#" class="auth-form__help-link ">Cần trợ giúp?</a>
            </div>
        </div>

        <div class="auth-form__controls">
            <button class="btn auth-form__controls-back btn--normal" onclick="closeModal()">TRỞ LẠI</button>
            <button class="btn btn--primary">ĐĂNG NHẬP</button>
        </div>
    </div>
</div>
<div class="auth-form__socials">
    <a href="#" class="auth-form__socials--facebook btn btn--with-icon">
        <i class="auth-form__socials-icon fa-brands fa-facebook-square"></i>
        <span class="auth-form__socials-title">Đăng nhập với Facebook</span>
    </a>
    <a href="#" class="auth-form__socials--google btn btn--with-icon">
        <i class="auth-form__socials-icon fa-brands fa-google"></i>
        <span class="auth-form__socials-title">Đăng nhập với Google</span>
    </a>
</div>
        `
}

function changeModalRegister() {
    document.querySelector('.auth-form').innerHTML = 
    `
    <div class="auth-form__container">
    <div class="auth-form__header">
        <h3 class="auth-form__heading">Đăng Ký</h3>
        <span class="auth-form__switch-btn" onclick="changeModalLogin()">Đăng nhập</span>
    </div>

    <div class="auth-form__form">
        <div class="auth-form__group">
            <input type="text" class="auth-form__input" placeholder="Email">
        </div>
        <div class="auth-form__group">
            <input type="password" class="auth-form__input" placeholder="Mật khảu">
        </div>
        <div class="auth-form__group">
        <input type="password" class="auth-form__input" placeholder="Nhập lại mật khảu">
        </div>
    </div>

    <div class="auth-form__aside">
        <p class="auth-form__policy-text">Bằng việc đăng kí, bạn đã đồng ý với Cloud về 
            <a href="#" class="auth-form__text-link">Điều khoản dịch vụ</a> &
            <a href="#" class="auth-form__text-link">Chính sách bảo mật</a>
        </p>
    </div>

    <div class="auth-form__controls">
        <button class="btn auth-form__controls-back btn--normal" onclick="closeModal()">TRỞ LẠI</button>
        <button class="btn btn--primary">ĐĂNG KÝ</button>
    </div>

</div>

<div class="auth-form__socials">
    <a href="#" class="auth-form__socials--facebook btn btn--with-icon">
        <i class="auth-form__socials-icon fa-brands fa-facebook-square"></i>
        <span class="auth-form__socials-title">Kết nối với Facebook</span>
    </a>
    <a href="#" class="auth-form__socials--google btn btn--with-icon">
        <i class="auth-form__socials-icon fa-brands fa-google"></i>
        <span class="auth-form__socials-title">Kết nối với Google</span>
        
        
    </a>
</div>
    `
}


