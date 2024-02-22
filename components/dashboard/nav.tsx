import React from "react";

export function Nav() {
  return (
    <nav className="bg-[#1c1819] mt-4 rounded-lg text-white h-14 w-full sticky px-4 flex items-center justify-between">
      <div className="logo text-lg font-bold">متجرك</div>
      <div className="actions flex gap-4 items-center">
        <button className="p-2 flex hover:bg-[#0e0e0e] rounded-lg">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="w-5 h-5 fill-white"
          >
            <path
              fillRule="evenodd"
              d="M15.612 4.709a3.8 3.8 0 0 0-1.087-.681C14.198 2.911 13.245 2 12 2c-1.247 0-2.195.907-2.517 2.025a3.8 3.8 0 0 0-1.095.684c-.826.746-1.153 1.751-1.317 2.704-.102.59-.155 1.274-.205 1.92-.026.345-.052.68-.084.983-.1.95-.267 1.795-.647 2.512-.22.417-.469.713-.766 1.066-.118.142-.245.293-.381.465-.454.574-.9 1.276-.985 2.317v.012l-.001.002c-.011.164-.047.674.32 1.117.377.458.963.593 1.558.593h12.24c.595 0 1.18-.135 1.559-.593.366-.442.33-.953.319-1.117v-.002l-.001-.012c-.086-1.04-.531-1.743-.985-2.317a20 20 0 0 0-.381-.465c-.297-.353-.545-.649-.766-1.065-.38-.718-.547-1.562-.647-2.513a36 36 0 0 1-.084-.982c-.05-.647-.103-1.331-.205-1.921-.164-.953-.491-1.958-1.317-2.704M9.595 6.044c.368-.333 1.022-.627 2.29-.643L12 5.4c.51 0 .924.042 1.254.114q.122.027.23.059l.072.018c.39.118.658.28.849.453.386.349.613.877.75 1.675.09.52.129 1.037.172 1.612.027.363.056.75.1 1.174.108 1.017.303 2.139.848 3.166.318.6.74 1.104 1.067 1.493q.146.17.258.312c.298.377.495.7.573 1.123l-.053.001H5.827c.078-.424.274-.747.573-1.124q.113-.141.257-.312c.327-.39.75-.892 1.068-1.493.545-1.027.74-2.149.847-3.166.045-.424.074-.81.1-1.174.044-.575.083-1.092.172-1.612.138-.798.365-1.326.751-1.675"
              clipRule="evenodd"
            />
            <path d="M10.65 19.6a.9.9 0 0 0-.652 1.52c.5.528 1.198.88 2.002.88.8 0 1.51-.349 2.014-.881a.9.9 0 0 0-.654-1.519z" />
          </svg>
        </button>
        <div className="user flex gap-2 items-center">
          <div className="avatar w-7 h-7 rounded-full border-[2px] border-white overflow-hidden">
            <img
              src="https://www.gravatar.com/avatar/b4c23341f62c5ebbf3d3c856295c654f?s=200"
              alt="user avatar"
              className="w-full h-full"
            />
          </div>
          <p className="text-sm">عبدالرحيم الكحطاني</p>
        </div>
      </div>
    </nav>
  );
}