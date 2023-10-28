import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import auth from "../Config/Firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	// State
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	// Create user with email and password
	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	// Observe current user
	useEffect(() => {
		setLoading(true);
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			setUser(currentUser);
			setLoading(false);
			console.log("Observe", currentUser);
		});

		return () => {
			return unsubscribe();
		};
	}, []);

	// Send all info to the context
	const authInfo = {
		user,
		loading,
		createUser,
		signIn,
		logOut,
	};

	return (
		<AuthContext.Provider value={authInfo}> {children} </AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node,
};

export default AuthProvider;
