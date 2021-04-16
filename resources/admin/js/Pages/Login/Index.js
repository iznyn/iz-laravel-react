import React from 'react';
import { IoMdLogIn, IoMdMail } from 'react-icons/io';
import { IoKey } from 'react-icons/io5';

import Layout from '@inc/Layout/Blank';
import FieldText from '@comp/Form/FieldText';
import Link from '@comp/Link';

const Login = () => (
  <Layout>
    <div className="fixed inset-0 bg-primary overflow-hidden">
      <div className="p-8 w-full h-full flex items-center justify-center">
        <div className="px-32 pt-10 pb-20 bg-light w-full max-w-4xl rounded-xxl">
          <div className="mb-4 flex items-center justify-center">
            <IoMdLogIn className="text-6xl mr-4 text-light2" />
            <h1 className="text-4xl font-bold">Login</h1>
          </div>
          <p className="text-muted text-2xl italic text-center">
            Please sign in to access administrator page
          </p>
          <div className="mt-16">
            <form method="post">
              <FieldText
                id="email"
                size="lg"
                placeholder="Enter your email address"
                icon={<IoMdMail />}
              />
              <FieldText
                id="password"
                size="lg"
                placeholder="Enter your password"
                icon={<IoKey />}
                last
              />
              <p className="mt-4 text-right">
                <Link to="/admin/forgot-password">Forgot Password?</Link>
              </p>
              <div className="mt-16"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Login;
