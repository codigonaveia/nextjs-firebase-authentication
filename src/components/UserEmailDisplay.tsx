"use client"
import { useEffect, useState } from 'react';
import { auth } from '@/firebase/config'; // Importe o Firebase configurado

const UserEmailDisplay = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  console.log(userEmail);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userState) => {
      if (userState) {
        // Se o usuário estiver autenticado, pega o email
        setUserEmail(userState.email);
      } else {
        // Se não houver usuário autenticado, limpa o email
        setUserEmail(null);
      }
    });

    // Limpa o listener quando o componente desmonta
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {userEmail ? (
        <p className='text-blue-900 py-2 bg-yellow-400 p-2 m-4 shadow-xl rounded-lg'>Bem-vindo,  {userEmail}</p>
      ) : (
        <p>Nenhum usuário autenticado.</p>
      )}
    </div>
  );
};

export default UserEmailDisplay;