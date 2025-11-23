export function validateFullName(name) {
    const re = /^[a-zA-ZÀ-ÿ\s'-]{2,50}$/;
    return re.test(name);
}


export function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


export function validatePhone(phone) {
    const re = /^(0[67]\d{8}|\+212[67]\d{8})$/;
    return re.test(phone);
}


export function validateURL(url) {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}