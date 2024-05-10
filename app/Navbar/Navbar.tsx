function Navbar() {
  return (
    <div>
      <div className="w-full bg-gray-100 p-4">
        {/* Left Side */}
        <div className="flex justify-between">
          <div className="flex justify-start gap-4 items-center w-1/2">
            <img src="/assets/hamburger.svg" alt="mail" className="w-7" />
            <img src="/assets/mail.svg" alt="mail" className="w-10" />
            <div className="text-xl"><span className="text-red-500 font-semibold text-2xl">S</span>mail</div>

            <div className="hidden sm:flex items-center bg-blue-100 text-white rounded-full w-full">
              <img
                src="/assets/magnifier.svg"
                alt="magnifier"
                className="m-4"
              />
              <input
                type="text"
                placeholder="Search Mail"
                className="bg-blue-100 text-black w-11/12 placeholder:text-gray-600 outline-none"
              />
              <img
                src="/assets/hamburger.svg"
                alt="mail"
                className="w-7 mr-5"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="justify-end items-center gap-4 hidden sm:flex">
            <img src="/assets/question.svg" alt="question" className="w-10" />
            <img src="/assets/wheel.svg" alt="wheel" className="w-10" />
            <img src="/assets/dots.svg" alt="dots" className="w-10" />
            <img src="/assets/avatar.svg" alt="avatar" className="w-10" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
