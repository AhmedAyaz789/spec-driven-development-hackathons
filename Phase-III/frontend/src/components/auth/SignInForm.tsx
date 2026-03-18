'use client';

import React, { useState } from 'react';

interface SignInFormProps {
  onSuccess?: () => void;
  initialEmail?: string;
}

export function SignInForm({ onSuccess, initialEmail = '' }: SignInFormProps) {
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Dummy login (no backend)
    console.log('Dummy login:', { email, password });

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
        className="w-full bg-blue-600 p-2 rounded text-white"
      >
        Sign In
      </button>
    </form>
  );
}