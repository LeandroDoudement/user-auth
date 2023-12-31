import Header from '@/components/header';
import UserTable from '@/components/userTable';
import { useState } from 'react';

const UsersPanel = () => {
  const [filter, setFilter] = useState('');

  return (
    <div className="container mx-auto flex-1 flex flex-col items-center px-2">
      <div className="antialiased font-sans bg-gray-200 ">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="py-8">
            <div>
              <h2 className="text-2xl font-semibold leading-tight">
                Painel de usuários
              </h2>
            </div>
            <div className="my-2 flex sm:flex-row flex-col gap-2">
              <div className="flex flex-row mb-1 sm:mb-0"></div>
              <div className="block relative">
                <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current text-gray-500"
                  >
                    <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
                  </svg>
                </span>
                <input
                  placeholder="Nome ou Email"
                  className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                  onChange={(e) => setFilter(e.target.value)}
                />
              </div>
            </div>
            <UserTable filter={filter} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersPanel;
