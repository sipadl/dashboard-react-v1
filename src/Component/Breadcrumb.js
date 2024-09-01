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
          <div style={{
            width: '3px',
            height: '6px',
            position: 'relative'
          }}>
            <div style={{
              width: '6px',
              height: '3px',
              position: 'absolute',
              left: '0px',
              top: '6px',
              transform: 'rotate(-90deg)',
              transformOrigin: '0 0',
              border: '1px solid #353535'
            }}></div>
          </div>
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
