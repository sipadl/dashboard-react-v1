import React from 'react';

export default function ActiveBadge() {
  return (
    <div style={{
      width: 'auto',
      height: '100%',
      padding: '4px 8px',
      background: '#DEF9E7',
      borderRadius: '200px',
      border: '1px #AAE8BB solid',
      justifyContent: 'flex-start',
      alignItems: 'center',
      gap: '4px',
      display: 'inline-flex'
    }}>
      <div style={{
        textAlign: 'center',
        color: '#00BA34',
        fontSize: '12px',
        fontFamily: 'Inter',
        fontWeight: '500',
        lineHeight: '18px',
        wordWrap: 'break-word'
      }}>
        Active
      </div>
    </div>
  );
}
