"use client"

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from '@/store';

const withoutAuth = (Component: any) => {
  const AuthenticatedComponent = () => {
    const dispatch = useAppDispatch()
    const {replace } = useRouter()
    const id = useAppSelector((state: RootState) => state.user.userInfo.name)
    const loading = useAppSelector((state: RootState) => state.user.loading)

    useEffect(() => {
      if (id) {
        replace('/')
      }
    }, [id]);

    return id ? <div className="min-h-screen" /> : <Component />;
  };

  return AuthenticatedComponent;
};

export default withoutAuth