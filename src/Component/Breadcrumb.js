import React from 'react';

export default function Breadcrumb({ before, after }) {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      justifyContent: 'flex-start',
      alignItems: 'center',
      gap: '12px',
      display: 'inline-flex'
    }}>
      {before ? (
        <>
          <div style={{
            color: '#979C9E',
            fontSize: '12px',
            fontFamily: 'Inter',
            fontWeight: '400',
            lineHeight: '18px',
            wordWrap: 'break-word'
          }}>
            {before}
          </div>
          <i className="bx bx-chevron-right"></i>
        </>
      ) : null}
      <div style={{
        color: '#5538EE',
        fontSize: '12px',
        fontFamily: 'Inter',
        fontWeight: '400',
        lineHeight: '18px',
        wordWrap: 'break-word'
      }}>
        {after}
      </div>
    </div>
  );
}
