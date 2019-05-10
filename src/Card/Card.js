import React from 'react';

export const Card = ({ title, i }) => {
  const className = `goal goal${i + 1}`
  return (
    <div className={className}>{title}</div>
  )
}