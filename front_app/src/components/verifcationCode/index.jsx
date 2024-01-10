import React from 'react';
import './s.css'; 
  // ce code est generer par chatGpt , il marche à 100 mais j'ai pas compris le principe de fonction handleBackspace
const VerificationPage = ( {code,inputRefs,onCodeChange} ) => {
    const handleCodeChange = (e, index) => {
        const newCode = [...code];
        newCode[index] = e.target.value.slice(-1);
        onCodeChange(newCode); 
    
        // Déplacer le focus vers le champ de saisie suivant
        if (index < 3 && e.target.value) {
          inputRefs[index + 1].current.focus();
        }
      };
      const handleBackspace = (e, index) => {
        // Déplacer le focus vers le champ de saisie précédent s'il est vide et la touche Backspace est pressée
        if (index > 0 && e.key === 'Backspace' && !code[index]) {
          inputRefs[index - 1].current.focus();
        }
      };
  return (
    <div className='myDiv'>
      <div style={{ display: 'flex' }}>
        {code.map((digit, index) => (
          <input
            key={index}
            type="text"
            value={digit}
            onChange={(e) => handleCodeChange(e, index)}
            onKeyDown={(e) => handleBackspace(e, index)}
            maxLength={1}
            className='myInput'
            ref={inputRefs[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default VerificationPage;
