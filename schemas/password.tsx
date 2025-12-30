import Image from 'next/image';
import React from 'react';

const PasswordSchema = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Create a Strong Password</h2>
                <form className="space-y-4">            
                    <div>
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 border rounded"
                          placeholder="Enter your password"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Confirm Password</label>
                        <input
                            type="password" 
                            className="w-full px-3 py-2 border rounded"
                            placeholder="Confirm your password"
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                        Set Password
                    </button>
                </form>
            </div>
        </div>
    );
}
