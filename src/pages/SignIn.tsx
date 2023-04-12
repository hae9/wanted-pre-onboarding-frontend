import React, { useEffect, useState } from 'react';
import { signIn } from '../api/authApi';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [inputs, setInputs] = useState<signData>({ email: '', password: '' });
  const [isValid, setIsValid] = useState(false);

  const navigate = useNavigate();
  const onSubmit = (event: React.FormEvent) => {
    event?.preventDefault();
    signIn(inputs).then((res) => {
      if (res?.status === 200) {
        localStorage.setItem('access_token', res.data['access_token']);
        navigate('/todo');
      }
    });
  };

  useEffect(() => {
    const emailExp = /.*@.*/g;
    const passwordExp = /.{8,}/g;
    if (!emailExp.test(inputs.email) || !passwordExp.test(inputs.password)) {
      setIsValid(false);
      return;
    }

    setIsValid(true);
  }, [inputs]);

  return (
    <div className="flex flex-col w-[30rem] items-center gap-10 border-2 border-gray border-opacity-50 p-10 rounded-lg">
      <h2 className="text-blue font-bold text-[1.8rem]">로그인</h2>
      <form className="flex flex-col w-3/4 gap-4 justify-center" onSubmit={onSubmit}>
        <label className="w-full flex justify-between text-gray-dark font-semibold">
          이메일
          <input
            type="text"
            data-testid="email-input"
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            className="border border-gray rounded-full px-2"
            required
          />
        </label>
        <label className="w-full flex justify-between  text-gray-dark font-semibold">
          비밀번호
          <input
            type="password"
            data-testid="password-input"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            className="border border-gray rounded-full px-2"
            required
          />
        </label>

        <button
          type="submit"
          data-testid="signup-button"
          className={`mt-5 py-2 ${isValid ? 'bg-blue' : 'bg-gray '} rounded-full text-white flex justify-center font-semibold`}
          disabled={!isValid}
        >
          로그인
        </button>
      </form>
    </div>
  );
};

export default SignIn;
