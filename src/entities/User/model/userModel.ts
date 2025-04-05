export interface User {
    id: number;
    name: string;
}
// only user relationship code create
export const getCurrentUser = (): User| null => {
    // 로컬 스토리지에서 사용자 정보 가져오기!
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}