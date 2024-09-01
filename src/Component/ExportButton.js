import React from 'react';
import ico from '../assets/exp.svg';

export default function ExportButton() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      borderRadius: '8px',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'inline-flex'
    }}>
      <button 
      type='button'
      style={{
        width: '82px',
        padding: '9px 12px',
        background: 'white',
        borderRadius: '8px',
        overflow: 'hidden',
        border: '1px #979C9E solid',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '4px',
        display: 'flex'
      }}>
          <img src={ico} />
        <div style={{
          textAlign: 'center',
          color: '#353535',
          fontSize: '12px',
          fontFamily: 'Inter',
          fontWeight: '400',
          lineHeight: '18px',
          wordWrap: 'break-word'
        }}>
          Export
        </div>
      </button>
    </div>
  );
}
