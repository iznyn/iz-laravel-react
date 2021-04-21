import React from 'react';
import { IoMdLogIn, IoMdMail } from 'react-icons/io';
import { IoKey } from 'react-icons/io5';

import Layout from '@inc/Layout/Blank';
import FieldText from '@comp/Form/FieldText';
import Button from '@comp/Button/Solid';
import Link from '@comp/Link';

const Login = () => (
  <Layout>
    <div className="fixed inset-0 bg-primary overflow-hidden">
      <div className="p-5 w-full h-full flex items-center justify-center">
        <div className="px-20 pt-7 pb-14 bg-light w-full max-w-2xl rounded-6xl">
          <div className="mb-2 flex items-center justify-center">
            <IoMdLogIn className="text-3xl mr-2 text-light2" />
            <h1 className="text-3xl font-bold">Login</h1>
          </div>
          <p className="text-muted text-base italic text-center">
            Please sign in to access administrator page
          </p>
          <div className="mt-10">
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
              <p className="mt-2 text-right">
                <Link to="/admin/forgot-password">Forgot Password?</Link>
              </p>
              <div className="mt-10">
                <Button
                  label="Login"
                  full
                  loading
                  handler={() => console.log('Test')}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Login;
