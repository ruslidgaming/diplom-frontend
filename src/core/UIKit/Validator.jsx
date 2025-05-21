class Validator {
    required(value) {
        return value.trim() !== ''
            ? { valid: true }
            : { valid: false, message: 'Обязательное поле' };
    }

    min(value, min) {
        let valid = false;

        if (typeof value === 'number') {
            valid = value >= min;
        } else {
            valid = String(value).length >= min;
        }

        return valid
            ? { valid: true }
            : { valid: false, message: `Минимум ${min} символов` };
    }

    max(value, max) {
        let valid = false;

        if (typeof value === 'number') {
            valid = value <= max;
        } else {
            valid = String(value).length <= max;
        }

        return valid
            ? { valid: true }
            : { valid: false, message: `Максимум ${max} символов` };
    }

    email(value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const valid = emailRegex.test(value);

        return valid
            ? { valid: true }
            : { valid: false, message: `Введите корректный email` };
    }

    pattern(value, pattern, message = null) {
        const valid = pattern.test(value);
        const defaultMsg = `Не соответствует требуемому формату`;

        return valid
            ? { valid: true }
            : { valid: false, message: defaultMsg };
    }

    number(value) {
        const valid = !isNaN(parseFloat(value)) && isFinite(value);

        return valid
            ? { valid: true }
            : { valid: false, message: 'Поле должно быть числом' };
    }

    match(value1, value2) {
        return value1 === value2
            ? { valid: true }
            : { valid: false, message: 'Пароли не совпадают' };

    }
}

// Экспорт класса
const validator = new Validator();
export default validator;