"use client"

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import {
  RootState,
  useAppSelector,
} from '@/store';

const withAuth = (Component: any) => {
  const AuthenticatedComponent = () => {
    const {push } = useRouter()
    const id = useAppSelector((state: RootState) => state.user.userInfo.name)
    const loading = useAppSelector((state: RootState) => state.user.loading)
    console.log(loading);
    
    useEffect(() => {
      if (!id && !loading) {
        push('/landing')
      }
    }, [id]);

    return !id ? <div className="min-h-screen" /> : <Component />;
  };

  return AuthenticatedComponent;
};

export default withAuth