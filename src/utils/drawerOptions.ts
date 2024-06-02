import { USER_ROLE } from "@/constants/role";
import { TUserRole } from "@/types";
import AddBoxIcon from '@mui/icons-material/AddBox';
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ViewListIcon from '@mui/icons-material/ViewList';

const drawerOptions = (role: TUserRole) => {

    // if(!role) return 

    const sidebarOptions = {
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
    };

    if(role === USER_ROLE.USER){
        sidebarOptions.flatsOptions.push(
            {
                title: "My Requested Flat",
                path: `${role}/my-requests-flat`,
                icon: QuestionAnswerIcon
            },
            {
                title: "Requests on My Flats",
                path: `${role}/requests-on-my-flat`,
                icon: GroupIcon
            },
        )
    };

    if(role === USER_ROLE.ADMIN){
        sidebarOptions.flatsOptions.push(
            {
                title: "View All Flats",
                path: `${role}/view-all-flats`,
                icon: ViewListIcon
            }
        );
        sidebarOptions.accountOptions.push(
            {
                title: "Manage Users",
                path: `${role}/manage-users`,
                icon: ManageAccountsIcon
            }
        )

    }



    return sidebarOptions;
};

export default drawerOptions;