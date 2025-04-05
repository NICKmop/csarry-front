import { getCurrentUser } from '../../../entities/User';

export const logout = () => {
    localStorage.removeItem("user");
    alert(!!getCurrentUser());
    window.location.reload();
};

export const isAuthenticated = () => !!getCurrentUser(); 