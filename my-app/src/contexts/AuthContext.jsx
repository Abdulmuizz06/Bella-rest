import React, { createContext, useContext, useEffect, useState } from 'react';
import { account, client } from '../lib/appwrite';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const refreshUser = async () => {
    try {
      const res = await account.get();
      setUser(res);
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshUser();

    // Debug: print Appwrite SDK capabilities to the console so it's easy to
    // see which methods are available in this environment.
    try {
      const methodsToCheck = [
        'create',
        'createAccount',
        'createEmailSession',
        'createSession',
        'createJWT',
        'get',
        'deleteSession'
      ];
      const capabilities = {};
      methodsToCheck.forEach((m) => {
        capabilities[m] = typeof account[m] === 'function';
      });

      console.info('Appwrite SDK debug:', {
        project: client?.config?.project || client?.project || 'unknown',
        endpoint: client?.config?.endpoint || client?._endpoint || 'unknown',
        capabilities,
        account,
        client
      });
    } catch (err) {
      console.debug('Appwrite SDK debug error:', err);
    }
    // We could poll or listen to changes; for now simple on-mount check
  }, []);

  const signup = async (email, password, name) => {
    // Create account (support multiple SDK method names)
    if (typeof account.create === 'function') {
      await account.create('unique()', email, password, name || undefined);
    } else if (typeof account.createAccount === 'function') {
      await account.createAccount('unique()', email, password, name || undefined);
    } else {
      throw new Error('Appwrite account.create / account.createAccount not available - check your SDK version');
    }

    // Create session (support multiple SDK method names)
    if (typeof account.createEmailSession === 'function') {
      await account.createEmailSession(email, password);
    } else if (typeof account.createSession === 'function') {
      await account.createSession(email, password);
    } else {
      // Some SDKs use createJWT or different flows; surface helpful error
      throw new Error('Appwrite account.createEmailSession / account.createSession not available - check your SDK version');
    }
    await refreshUser();
  };

  const login = async (email, password) => {
    // Try different session creation methods depending on SDK
    if (typeof account.createEmailSession === 'function') {
      await account.createEmailSession(email, password);
    } else if (typeof account.createSession === 'function') {
      await account.createSession(email, password);
    } else if (typeof account.createJWT === 'function') {
      // createJWT is different (server-side) but try to be helpful
      throw new Error('This Appwrite SDK appears to not support client-side email sessions. Use createEmailSession/createSession or configure server-side JWT.');
    } else {
      throw new Error('No supported Appwrite session method found (createEmailSession/createSession)');
    }

    await refreshUser();
  };

  const logout = async () => {
    try {
      await account.deleteSession('current');
    } catch (err) {
      console.error('Logout error', err);
    }
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
