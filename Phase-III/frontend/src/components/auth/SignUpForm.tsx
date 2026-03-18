'use client';

import React, { useState } from 'react';

interface SignUpFormProps {
  onSuccess?: () => void;
}

export function SignUpForm({ onSuccess }: SignUpFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Dummy signup (no backend)
    console.log('Dummy signup:', { email, password });

    // Direct success
    if (onSuccess) onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 rounded bg-gray-800 text-white"
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 rounded bg-gray-800 text-white"
        required
      />

      <button
        type="submit"
        className="w-full bg-green-600 p-2 rounded text-white"
      >
        Sign Up
      </button>
    </form>
  );
}