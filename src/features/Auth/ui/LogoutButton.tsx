// import { Button } from "@/shared/ui/Button";
import { Button } from "../../../shared/ui/Button";
import { logout } from "../model/authModel"

export const LogoutButton: React.FC = () => {
    return <Button disabled={false} onClick={logout}>Logout</Button>;
}