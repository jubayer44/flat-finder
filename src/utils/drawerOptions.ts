import { TUserRole } from "@/types";
import AddBoxIcon from '@mui/icons-material/AddBox';
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

const drawerOptions = (role: TUserRole) => {

    const defaultOptions = {
        flatsOptions: [
            {
                title: "Dashboard",
                path: "",
                icon: DashboardIcon
            },
            {
                title: "Post a Flat",
                path: `${role}/flat-post`,
                icon: AddBoxIcon
            },
            {
                title: "My Flat Posts",
                path: `${role}/my-flat-posts`,
                icon: HomeIcon
            },
            {
                title: "My Requests Flat",
                path: `${role}/my-requests-flat`,
                icon: QuestionAnswerIcon
            },
            {
                title: "Requests on My Flats",
                path: `${role}/requests-on-my-flat`,
                icon: GroupIcon
            },
        ],
        accountOptions: [
            {
                title: "Edit Profile",
                path: `edit-profile`,
                icon: PersonIcon
            },
            {
                title: "Change Password",
                path: `change-password`,
                icon: LockIcon
            }
        ]
    }

    return defaultOptions;
};

export default drawerOptions;