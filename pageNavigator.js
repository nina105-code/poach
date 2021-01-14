import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import Login from '../screens/login-signup/login';
import Signup from '../screens/login-signup/signup';
import SignupStudent from '../screens/login-signup/signupStudent';
import SignupCompany from '../screens/login-signup/signupCompany';
import PasswordReset from '../screens/login-signup/passwordReset';
import CheckEmailPassword from '../screens/login-signup/checkEmailPassword';
import VerificationEmail from '../screens/login-signup/verificationEmail';
import ProfileStudent from '../screens/profile-student/profileStudent';
import OfferStudent from '../screens/profile-student/offerStudent';
import ChatStudent from '../screens/profile-student/chatStudent';
import EditStudent from '../screens/profile-student/edit-pages/editStudent';
import ProfileCompany from '../screens/profile-company/profileCompany';
import EditCompany from '../screens/profile-company/editCompany';
import PostedJobsCompany from '../screens/profile-company/postedJobsCompany';
import PostJobsCompany from '../screens/profile-company/postJobsCompany';

const screens = {
    Home: {
        screen: Home
    },
    Login: {
        screen: Login
    },
    Signup: {
        screen: Signup
    },
    SignupStudent: {
        screen: SignupStudent
    },
    SignupCompany: {
        screen: SignupCompany
    },
    PasswordReset: {
        screen: PasswordReset
    },
    CheckEmailPassword: {
        screen: CheckEmailPassword
    },
    VerificationEmail: {
        screen: VerificationEmail
    },
    ProfileStudent: {
        screen: ProfileStudent
    },
    EditStudent: {
        screen: EditStudent
    },
    OfferStudent: {
        screen: OfferStudent
    },
    ChatStudent: {
        screen: ChatStudent
    },
    ProfileCompany: {
        screen: ProfileCompany
    },
    EditCompany: {
        screen: EditCompany
    },
    PostedJobsCompany: {
        screen: PostedJobsCompany
    },
    PostJobsCompany: {
        screen: PostJobsCompany
    },
}

const PageNavigator = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerShown: false
    },
});

export default createAppContainer(PageNavigator);