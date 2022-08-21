import firebase from 'firebase';
import { GoogleAuthProvider ,GithubAuthProvider } from "firebase/auth";

class AuthService {
    login(providerName){
        const provider = new [`${providerName}AuthProvider`]();
    }
}
