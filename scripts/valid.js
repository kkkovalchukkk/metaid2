window.addEventListener('DOMContentLoaded', () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    const registrationFormEl = document.querySelector('#form-registration');
    const intranceFormEl = document.querySelector('#form-intrance');
    const footerFormEl = document.querySelector('#footer-form');
    const registrationNameInputEl = registrationFormEl?.querySelector('#form-name-input');
    const registrationSurnameInputEl = registrationFormEl?.querySelector('#form-surname-input');
    const registrationEmailInputEl = registrationFormEl?.querySelector('#form-email-input');
    const registrationTelInputEl = registrationFormEl?.querySelector('#form-tel-input');
    const registrationPasswordInputEl = registrationFormEl?.querySelector('#form-password-input');
    const registrationPasswordRepeatInputEl = registrationFormEl?.querySelector('#form-password-input-repeat');
    const intranceEmailInputEl = intranceFormEl?.querySelector('#form-email-input');
    const intrancePasswordInputEl = intranceFormEl?.querySelector('#form-password-input');
    const intranceErrorEl = intranceFormEl?.querySelector('.form__error');
  
    const checkInputValidity = (input) => input && input.value.trim() !== '';
  
    const submitRegistrationForm = (e) => {
        e.preventDefault();
        let isValid = true;
  
        [
            registrationNameInputEl,
            registrationSurnameInputEl,
            registrationEmailInputEl,
            registrationTelInputEl,
            registrationPasswordInputEl,
            registrationPasswordRepeatInputEl,
        ].forEach((input) => {
            if (!checkInputValidity(input)) {
                input.classList.add('valEntry--invalid');
                setTimeout(function() {
                    input.classList.remove('valEntry--invalid');
                    input.classList.add('valEntry--required');
                }, 1000);
                isValid = false;
            } else {
                input.classList.remove('valEntry--invalid', 'valEntry--required');
            }
        });
  
        if (isValid && registrationPasswordRepeatInputEl.value !== registrationPasswordInputEl.value) {
            registrationPasswordRepeatInputEl.classList.add('valEntry--invalid');
            isValid = false;
        }
  
        if (isValid) {
            registrationFormEl.submit();
        }
    };
  
    const submitIntranceForm = (e) => {
        e.preventDefault();
        let isValid = true;
  
        [intranceEmailInputEl, intrancePasswordInputEl].forEach((input) => {
            if (!checkInputValidity(input)) {
                input.classList.add('valEntry--invalid');
                intranceErrorEl.classList.add('form__error--invalid');
                isValid = false;
            } else {
                input.classList.remove('valEntry--invalid');
                intranceErrorEl.classList.remove('form__error--invalid');
            }
        });
  
        if (isValid) {
            intranceFormEl.submit();
        }
    };
  
    const submitFooterForm = (e) => {
        e.preventDefault();
        const emailInput = e.target.querySelector('.form-input-email');
  
        if (checkInputValidity(emailInput) && emailRegex.test(emailInput.value)) {
            emailInput.classList.remove('valEntry--invalid');
            footerFormEl.submit();
        } else {
            emailInput.classList.add('valEntry--invalid');
        }
    };
  
  
    [registrationNameInputEl, registrationSurnameInputEl].forEach((input) => {
        input?.addEventListener('input', () => {
            if (input.value.length < 2 || input.value.length > 30) {
                input.classList.add('valEntry--invalid');
            } else {
                input.classList.remove('valEntry--invalid', 'valEntry--required');
            }
        });
    });
  
  
    [registrationEmailInputEl, intranceEmailInputEl].forEach((input) => {
        input?.addEventListener('input', () => {
            if (!emailRegex.test(input.value)) {
                input.classList.add('valEntry--invalid');
            } else {
                input.classList.remove('valEntry--invalid', 'valEntry--required');
            }
        });
    });
  
  
    registrationTelInputEl?.addEventListener('input', () => {
        console.log(registrationTelInputEl.value.length);
        
        if (registrationTelInputEl.value.length < 11) {
            registrationTelInputEl.classList.add('valEntry--invalid');
        } else {
            registrationTelInputEl.classList.remove('valEntry--invalid', 'valEntry--required');
        }
    });
  
  
    [registrationPasswordInputEl, intrancePasswordInputEl].forEach((input) => {
        input?.addEventListener('input', () => {
            if (input.value.length < 6) {
                input.classList.add('valEntry--invalid');
            } else {
                input.classList.remove('valEntry--invalid', 'valEntry--required');
            }
        });
    });
  
    registrationFormEl?.addEventListener('submit', submitRegistrationForm);
    intranceFormEl?.addEventListener('submit', submitIntranceForm);
    footerFormEl?.addEventListener('submit', submitFooterForm);
  });