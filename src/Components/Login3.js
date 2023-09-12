import React, { useState } from 'react';

export default function Login3() {
    const InputWithFixedLabel = ({ id, placeholder, value, setValue }) => {
        const [isFocused, setIsFocused] = useState(false);
        const [error, setError] = useState('');

        const handleFocus = () => {
            setIsFocused(true);
        };

        const handleBlur = () => {
            setIsFocused(false);

            // Perform validation when the input field is blurred
            if (id === 'exampleFormControlInput1') {
                if (!/^[\w\.-]+@[\w\.-]+\.\w+$/.test(value)) {
                    setError('Please enter a valid email address');
                } else {
                    setError('');
                }
            } else if (id === 'exampleFormControlInput2') {
                const hasLowerCase = /[a-z]/.test(value);
                const hasUpperCase = /[A-Z]/.test(value);
                const hasDigit = /\d/.test(value);
                const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\-\\/]/.test(value);

                if (!hasLowerCase || !hasUpperCase || !hasDigit || !hasSpecialChar) {
                    setError('Password must contain lowercase, uppercase, digit, and special character');
                } else {
                    setError('');
                }
            }
        };

        const handleInputChange = (event) => {
            const newValue = event.target.value;
            setValue(newValue);
            setError('');
        };

        return (
            <div className="relative mb-4" data-te-input-wrapper-init>
                <input
                    type="text"
                    className={`peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`}
                    id={id}
                    placeholder={placeholder}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleInputChange}
                    value={value}
                />
                <label
                    htmlFor={id}
                    className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out transform origin-top ${
                        isFocused || value ? 'scale-75 -translate-y-3' : ''
                    }`}
                >
                    {placeholder}
                </label>
                {error && !isFocused && <p className="text-red-500 text-xs mt-1">{error}</p>}
            </div>
        );
    };

    const [usernameValue, setUsernameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const handleLogin = () => {
        // Perform your login logic here

        // Clear the input fields after login button is clicked
        setUsernameValue('');
        setPasswordValue('');
    };

    
    return (
        <div>
          <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
            <div className="container h-full p-10">
              <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                <div className="w-full">
                  <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                    <div className="g-0 lg:flex lg:flex-wrap">
                      <div className="bg-gradient-to-r from-orange-400 to-pink-600 flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none">
                        <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                          <h4 className="mb-6 text-xl text-black font-semibold">
                            We are more than just a company
                          </h4>
                          <p className="text-sm text-black">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                          </p>
                        </div>
                      </div>
    
                      <div className="px-4 md:px-0 lg:w-6/12">
                        <div className="md:mx-6 md:p-12">
                          <div className="text-center">
                            <img
                              className="mx-auto w-48"
                              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                              alt="logo"
                            />
                            <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">We are The Lotus Team</h4>
                          </div>
    
                          <form>
                            <p className="mb-4">Please login to your account</p>
                            <InputWithFixedLabel id="exampleFormControlInput1" 
                                                 placeholder="Username" 
                                                 value={usernameValue}
                                                 setvalue={setUsernameValue}/>
                            <InputWithFixedLabel id="exampleFormControlInput2" 
                                                 placeholder="Password" 
                                                 value={passwordValue}
                                                 setvalue={setPasswordValue} />
                            <div className="mb-12 pb-1 pt-1 text-center">
                              <button
                                className="bg-gradient-to-r from-orange-400 to-pink-600 mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                type="button"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                onClick={handleLogin}
                              >
                                Log in
                              </button>
                              <a href="#!">Forgot password?</a>
                            </div>
                            <div className="flex items-center justify-between pb-6">
                              <p className="mb-0 mr-2">Don't have an account?</p>
                              <button
                                type="button"
                                className="border-2 border-red-700 text-red inline-block rounded px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:border-red-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-red-600 focus:border-red-600 focus:text-red-600 focus:outline-none focus:ring-0 active:border-red-700 active:text-red-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                              >
                                Register
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
}
