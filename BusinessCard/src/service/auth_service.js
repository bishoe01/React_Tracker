import { GoogleAuthProvider, GithubAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
class AuthService {
    constructor(app) {
        this.firebaseAuth = getAuth(app);
        this.googleProvider = new GoogleAuthProvider();
        this.githubProvider = new GithubAuthProvider();
    }
    login(providerName) {
        const authProvider = this.getProvider(providerName);
        return signInWithPopup(this.firebaseAuth, authProvider);
    }
    logout() {
        this.firebaseAuth.signOut();
    }
    onAuthChange(onUserChanged) {
        this.firebaseAuth.onAuthStateChanged((user) => {
            onUserChanged(user);
        });
    }
    getProvider(providerName) {
        switch (providerName) {
            case 'Google':
                return this.googleProvider;
            case 'Github':
                return this.githubProvider;
            default:
                throw new Error(`not supported provider : ${providerName}`);
        }
    }
}



export default AuthService;

