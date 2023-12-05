// AuthComponent.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, getDocs, where, query } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';

const AuthComponent = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      // Registra el usuario en Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Verifica si el nombre de usuario ya está en uso
      const isUsernameAvailable = await checkUsernameAvailability();

      if (!isUsernameAvailable) {
        console.error('Nombre de usuario no disponible');
        return;
      }

      // Guarda el usuario en la colección "usuarios" en Firestore
      await addDoc(collection(db, 'usuarios'), {
        uid: user.uid,
        email: user.email,
        username: username,
      });

      console.log('Usuario registrado con éxito');
      // Redirige al usuario después del registro
      navigate('/');
    } catch (error) {
      console.error('Error al registrar el usuario:', error.message);
    }
  };

  const handleLogin = async () => {
    try {
      // Inicia sesión con Firebase Authentication
      await signInWithEmailAndPassword(auth, `${username}@example.com`, password);
      
      console.log('Inicio de sesión exitoso');
      // Redirige al usuario después del inicio de sesión
      navigate('/');
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
    }
  };

  // Verifica si un usuario con el mismo nombre de usuario ya existe
  const checkUsernameAvailability = async () => {
    const usersRef = collection(db, 'usuarios');
    const q = query(usersRef, where('username', '==', username));
    const querySnapshot = await getDocs(q);

    return querySnapshot.empty; // Retorna true si no hay usuarios con el mismo nombre de usuario
  };

  return (
    <div>
      <h2>Autenticación</h2>
      <label>
        Nombre de Usuario:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Correo Electrónico:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Contraseña:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={handleRegister}>Registrar</button>
      <button onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  );
};

export default AuthComponent;
