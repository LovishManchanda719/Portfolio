"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Moon, Sun, LogIn, LogOut, User } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  const { currentUser, logout } = useAuth();
  const router = useRouter();

  const navItems = [
    { name: 'Home', href: '/Portfolio/' },
    { name: 'About', href: '/Portfolio/#about' },
    { name: 'Skills', href: '/Portfolio/#skills' },
    { name: 'Projects', href: '/Portfolio/#projects' },
    { name: 'Education', href: '/Portfolio/#education' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/Portfolio/#contact' }
  ];

  const handleAuthAction = async () => {
    if (currentUser) {
      try {
        await logout();
        router.push('/Portfolio/'); // Updated path
      } catch (error) {
        console.error('Logout failed', error);
      }
    } else {
      router.push('/Portfolio/auth'); // Updated path
    }
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
      } shadow-md`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/Portfolio/" className="text-2xl font-bold">
          Lovish Manchanda
        </Link>

        <div className="flex items-center space-x-6">
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href={item.href} 
                className={`hover:text-blue-500 transition-colors ${
                  isDarkMode ? 'hover:text-blue-300' : 'hover:text-blue-700'
                }`}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}

          {/* Authentication Button */}
          <motion.button 
            onClick={handleAuthAction}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center space-x-2 px-3 py-2 rounded-full ${
              currentUser 
                ? (isDarkMode 
                    ? 'bg-red-700 hover:bg-red-600 text-white' 
                    : 'bg-red-500 hover:bg-red-600 text-white')
                : (isDarkMode 
                    ? 'bg-blue-700 hover:bg-blue-600 text-white' 
                    : 'bg-blue-500 hover:bg-blue-600 text-white')
            }`}
          >
            {currentUser ? (
              <>
                <LogOut size={20} />
                <span>Logout</span>
              </>
            ) : (
              <>
                <LogIn size={20} />
                <span>Login</span>
              </>
            )}
          </motion.button>

          {/* Dark Mode Toggle */}
          <motion.button 
            onClick={toggleDarkMode}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="ml-2"
          >
            {isDarkMode ? <Sun className="text-yellow-500" /> : <Moon className="text-gray-800" />}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;